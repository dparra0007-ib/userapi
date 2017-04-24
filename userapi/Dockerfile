FROM node:onbuild

ENV GLOBALCONF="https://github.com/dparra0007/W53-GLOBAL-CONFIG.git"
ENV GLOBALCONFFILE="./W53-GLOBAL-CONFIG/env.sh"

ENV SYSTEMCONF="https://dparra0007@gitlab.com/dparra0007/W53-USERAPI-CONFIG.git"
ENV SYSTEMCONFFILE="./W53-USERAPI-CONFIG/env.sh"

RUN apt-get update
RUN apt-get install git-core

RUN chmod +x ./start.sh
CMD ./start.sh

EXPOSE 3000