# Chart-Proxy
> Reverse Proxy for all the services

## Related Projects
  ###### Chart that interacts with the other microservices
  -

  ###### Microservices
  - https://github.com/Dr-Wing/about-microservice

## Table of Contents
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

## Requirements
### With Docker
- docker
### Without Docker
- node, npm, and mongo

## Development
### With Docker
- Build a docker image from the project directory
```sh
docker build -t proxy .
```

- Start a docker container from that image, mounted to a volume of the project directory (this way the running container can access changes in the project directory)
```sh
docker run -p 3000:3000 -v $(pwd):/app --name proxy proxy
```
### Without Docker