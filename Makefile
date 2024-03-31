install:
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node src/gendiff.js

lint:
	npx eslint .

test:
	npx jest

test-coverage:
	npm run coverage