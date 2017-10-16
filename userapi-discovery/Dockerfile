FROM dparra0007/discovery:20171015.1

COPY src/main/resources/ src/main/resources/

USER 1001

RUN mvn clean package

EXPOSE 8761

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","./target/eureka-0.0.1-SNAPSHOT.jar"]