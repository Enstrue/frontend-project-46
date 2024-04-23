import _ from 'lodash';

const outputValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const formatNode = (node, path = '') => {
  const {
    key, type, value, oldValue, newValue, children,
  } = node;

  const fullPath = path === '' ? key : `${path}.${key}`;

  const formattedChildren = children
    ? children.flatMap((child) => formatNode(child, fullPath)) : [];

  switch (type) {
    case 'added':
      return [`Property '${fullPath}' was added with value: ${outputValue(value)}`];
    case 'removed':
      return [`Property '${fullPath}' was removed`];
    case 'changed':
      return [`Property '${fullPath}' was updated. From ${outputValue(oldValue)} to ${outputValue(newValue)}`];
    case 'nested':
      return formattedChildren;
    default:
      return [];
  }
};

const plainFormatDiff = (diff) => {
  const iter = (nodes) => {
    const lines = nodes.flatMap((node) => formatNode(node)).join('\n');
    return lines;
  };

  return iter(diff);
};

export default plainFormatDiff;
