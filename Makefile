main: build post_build push_staging

minor: build_minor post_build push_staging

major: build_major post_build push_staging

silent: build_silent post_build push_staging

deploy: build_silent post_build push_production

build:
	@echo 'Running normal revision build...'
	@grunt build

build_minor:
	@echo 'Running minor revision build...'
	@grunt build_minor

build_major:
	@echo 'Running major revision build...'
	@grunt build_major

build_silent:
	@echo 'Running silent build...'
	@grunt build_silent

post_build:
	@git add dist
	@git commit -am "Deployment Build - `date`"
	@echo 'Build completed.'

push_staging:
	@echo 'Pushing to staging'
	@git push staging develop --force

push_production:
	@echo 'Pushing to production'
	@git push production master --force
