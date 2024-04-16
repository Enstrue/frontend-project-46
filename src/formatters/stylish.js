import _ from 'lodash';

const indentSize = 4;

const indent = (depth) => ' '.repeat(depth * indentSize);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const lines = Object.entries(value)
    .map(([key, val]) => `${indent(depth + 1)}${key}: ${stringify(val, depth + 1)}`);
  return `{\n${lines.join('\n')}\n${indent(depth)}}`;
};

const formatNode = (node, depth) => {
  const {
    key, type, value, oldValue, newValue, children,
  } = node;

  if (type === undefined) {
    throw new Error(`Тип узла не определен для ключа: ${key}`);
  }
  let formattedChildren = '';
  if (children) {
    formattedChildren = children.map((child) => formatNode(child, depth + 1)).join('\n');
  }

  switch (type) {
    case 'nested':
      return `${indent(depth)}${key}: {\n${formattedChildren}\n${indent(depth)}}`;
    case 'unchanged':
      return `${indent(depth)}  ${key}: ${stringify(value, depth)}`;
    case 'changed':
      return [
        `${indent(depth)}- ${key}: ${stringify(oldValue, depth)}`,
        `${indent(depth)}+ ${key}: ${stringify(newValue, depth)}`,
      ].join('\n');
    case 'removed':
      return `${indent(depth)}- ${key}: ${stringify(value, depth)}`;
    case 'added':
      return `${indent(depth)}+ ${key}: ${stringify(value, depth)}`;
    default:
      throw new Error(`Неизвестный тип узла: ${type}`);
  }
};

const formatDiff = (diff) => {
  const iter = (nodes, depth) => {
    const lines = nodes.map((node) => formatNode(node, depth));
    return `{\n${lines.join('\n')}\n}`;
  };

  return iter(diff, 0);
};

export default formatDiff;
