install:
	./.setup.sh

start:
	./.start.sh

dev_be:
	docker exec -ti dev_be zsh

dev:
	docker exec -ti dev_be npm run dev

build:
	docker exec -ti dev_be npm run build
