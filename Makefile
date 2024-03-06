install:
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node gendiff.js