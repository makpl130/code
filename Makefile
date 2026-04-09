install-first-time:			# run install first time  
			npm install

install:				# Installing all needed dependencies
			npm ci

brain-games:				# Run Brain Games
			node bin/brain-games.js

publish:				# Publish package
			npm publish --dry-run

lint:					# run npx eslint .
			npx eslint .
