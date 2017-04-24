FROM node:onbuild

ENV SYSTEMCONF="https://dparra0007@gitlab.com/dparra0007/W53-USERAPI-CONFIG.git"
ENV SYSTEMCONFFILE="./W53-USERAPI-CONFIG/env.sh"

RUN apt-get update
RUN apt-get install git-core

RUN chmod +x ./start.sh
CMD ./start.sh

EXPOSE 3000