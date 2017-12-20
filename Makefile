default: clean compile

deps:
	rm -rf node_modules
	npm install

clean:
	rm -rf lib

compile:
	node_modules/.bin/tsc --project tsconfig.json --declaration

watch:
	node_modules/.bin/tsc --watch --declaration

test:
	bin/run-tests

package: clean deps compile

publish: package test
	npm publish

.PHONY: default deps clean compile test watch package publish
