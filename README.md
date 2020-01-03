# Chart
> Reverse Proxy for a Service-oriented architecture clone of the [stock detail page from Robinhood.com](https://robinhood.com/stocks/AAPL)

## Table of Contents
- [Chart](#chart)
  - [Table of Contents](#table-of-contents)
  - [Related Projects](#related-projects)
  - [Deployment](#deployment)
    - [If Needed](#if-needed)
  - [Requirements](#requirements)
  - [Development](#development)
    - [With Docker](#with-docker)
    - [Without Docker](#without-docker)
  - [Build](#build)

## Related Projects
- Microservices
  - [About](https://github.com/Dr-Wing/about-microservice)
  - [Price Chart](https://github.com/Dr-Wing/chart)
  - [Earnings Chart](https://github.com/Dr-Wing/earnings)
  - [People Also Bought](https://github.com/Dr-Wing/people-also-bought)

## Deployment
- Create a file in the project directory named `.env`, based on `.env.template`. This file will need the URL of the deployed EC2 instance, as well as the absolute path to the private key file in order to authenticate into that instance.

- From your LOCAL computer
```sh
# Makes the environment variables you just defined in `.env` available in your current shell
export $(cat .env)
```

```sh
# Only include the 1 at the end if this is the first time you've run this script on this instance (installs things like docker, docker-compose, etc...)
bash deploy.sh $instance $pathToPEM 1
```

- Enter yes at the prompt.

- The app is now running on the instance in a container at port 80.

### If Needed
- To stop the app (and clean up after yourself!), run this command from the `reverse-proxy` directory of the ec2 instance:
```sh
docker-compose down -v --rmi all
```
- To connect to the mongo db running in the mongo container (ie, check if there is data there, etc ...), from the ec2 instance, run
```sh
docker exec -i ec2-user_mongo_1 mongo "mongodb://localhost"
```

## Requirements
- docker
- docker-compose

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
- From within the root directory:
```sh
npm install
  ```

  ```sh
npm run dev
  ```

  ```sh
npm run start-dev
  ```

## Build
- Creates a webpack bundle, Builds a docker image, and pushes it to dockerhub
```sh
npm run build
```