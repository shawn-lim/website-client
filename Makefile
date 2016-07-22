main: build post_build push_integration

minor: build_minor post_build push_integration

major: build_major post_build push_integration

silent: build_silent post_build push_integration

stage: build_silent post_build push_staging

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

push_integration:
	@echo 'Pushing to integration'
	@git push integration develop --force

push_staging:
	@echo 'Pushing to staging'
	@git push staging staging --force

push_production:
	@echo 'Pushing to production'
	@git push production master --force
