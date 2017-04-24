FROM node:onbuild

RUN apt-get update
RUN apt-get install git-core

RUN chmod +x ./start.sh
CMD ./start.sh

EXPOSE 3000