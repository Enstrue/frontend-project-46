### Hexlet tests and linter status:
[![Actions Status](https://github.com/Enstrue/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Enstrue/frontend-project-46/actions)

[![Node CI](https://github.com/Enstrue/frontend-project-46/actions/workflows/node.js.yml/badge.svg)](https://github.com/Enstrue/frontend-project-46/actions/workflows/node.js.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/98b4467774ba9e81009b/maintainability)](https://codeclimate.com/github/Enstrue/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/98b4467774ba9e81009b/test_coverage)](https://codeclimate.com/github/Enstrue/frontend-project-46/test_coverage)

**Вычислитель отличий** – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

**Пример использования:**

```
# формат plain
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

# формат stylish
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```