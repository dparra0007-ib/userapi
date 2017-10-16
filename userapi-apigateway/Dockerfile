FROM dparra0007/apigateway:20171014-1

COPY src/main/resources/ src/main/resources/

RUN mvn install

USER 1001

CMD ["mvn package"]

EXPOSE 8080

ENTRYPOINT ["java","-jar","target/api-gateway-0.0.1-SNAPSHOT.jar"]