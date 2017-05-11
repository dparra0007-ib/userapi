FROM dparra0007/discovery

COPY src/main/resources/ src/main/resources/

RUN mvn clean package

EXPOSE 8761

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","./target/eureka-0.0.1-SNAPSHOT.jar"]