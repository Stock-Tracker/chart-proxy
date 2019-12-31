# Chart-Proxy
> Reverse Proxy for all the services

## Related Projects
  ###### Chart that interacts with the other microservices

  ###### Microservices
  - https://github.com/Dr-Wing/about-microservice

## Table of Contents
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage
- No .env file is required.

- From your LOCAL computer:
```sh
bash ec2-move-files.sh EC2_INSTANCE_URL
```

- ssh into the ec2 instance like so:
```sh
ssh -i ~/aws/Administrator-key-pair-useast1.pem ec2-user@EC2_INSTANCE_URL
```

- change directory to `reverse-proxy`
```sh
cd reverse-proxy
```

- From the ec2 instance (If this file has not already been run on this instance)
```sh
bash ec2-install.sh
```

- If ec2-install.sh was run, logout of the ec2 instance with `exit` and log back in using the command above

- Again from the ec2 instance, `reverse-proxy` directory
```sh
docker-compose up
```

> The reverse proxy is now running in a container at port 80. To stop the app (and clean up after yourself!), run this command from the `reverse-proxy` directory of the ec2 instance:
```sh
docker-compose down -v --rmi all
```

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