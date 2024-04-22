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
bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json -f plain

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

# формат stylish
bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json

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

## Examples
### Compare json
[![asciicast](https://asciinema.org/a/655815.svg)](https://asciinema.org/a/655815)
### Compare yaml
[![asciicast](https://asciinema.org/a/655816.svg)](https://asciinema.org/a/655816)
### Plain output format
[![asciicast](https://asciinema.org/a/655817.svg)](https://asciinema.org/a/655817)
### JSON output format
[![asciicast](https://asciinema.org/a/655818.svg)](https://asciinema.org/a/655818)