FROM iaghcp-docker-technical-architecture.jfrog.io/dredd:1.0.0

RUN apk update && apk add ca-certificates && update-ca-certificates && apk add openssl

CMD ["/bin/sh", "-c", "sleep 60 && apiary fetch --api-name=userapi65 --output=swagger.yaml && dredd ./swagger.yaml http://userapi:3000 -r apiary -j apiaryApiKey:bf50f24bdfc3dd2c747dc3c429b2b989 -j apiaryApiName:userapi65"]