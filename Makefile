install:
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node bin/index.js

lint:
	npx eslint .

test:
	npx jest

test-coverage:
	npm run coverage