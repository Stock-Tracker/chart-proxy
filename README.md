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
- Create a file in the project directory named `.env`, based on `.env.template`. This file will need:
  1. The URL of the deployed EC2 instance for this reverse proxy
  2. The URL of the deployed EC2 instance for the Price Chart service
  3. The URL of the deployed EC2 instance for the People Also Bought service
  4. The absolute path to the private key file in order to authenticate into that instance.

- From your LOCAL computer
```sh
# Makes the environment variables you just defined in `.env` available in your current shell
export $(cat .env)
```

```sh
# Only include the 1 at the end if this is the first time you've run this script on this instance (installs things like docker, docker-compose, etc...)
bash deploy.sh $pathToPEM $instance 1 && bash compose.sh $pathToPEM $instance
```

- (if needed) Enter yes at the prompt.

- The app is now running on the instance in a container at port 80.

### If Needed
- To stop (and clean up after yourself!) or restart the app, run these commands from your local machine (respectively)
```sh
bash compose.sh $pathToPEM $instance 1
```

- To restart the app:
```sh
bash compose.sh $pathToPEM $instance
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