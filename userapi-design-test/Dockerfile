FROM dparra0007/dredd:20180328-4

RUN apk update && apk add ca-certificates && update-ca-certificates && apk add openssl

CMD ["/bin/sh", "-c", "sleep 15 && apiary fetch --api-name=userapi65 --output=swagger.yaml && dredd ./swagger.yaml http://userapi-apigateway:8080 -r apiary -j apiaryApiKey:bf50f24bdfc3dd2c747dc3c429b2b989 -j apiaryApiName:userapi65"]