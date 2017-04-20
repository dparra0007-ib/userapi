FROM dparra0007/apigateway

COPY src/main/resources/ src/main/resources/

RUN mvn install

CMD ["mvn package"]

EXPOSE 8080

ENTRYPOINT ["java","-jar","target/api-gateway-0.0.1-SNAPSHOT.jar"]