FROM node:6.10.3-onbuild

ENV GLOBALCONF="https://github.com/dparra0007/W53-GLOBAL-CONFIG.git"
ENV GLOBALCONFFILE="./W53-GLOBAL-CONFIG/env.sh"

ENV SYSTEMCONF="https://github.com/dparra0007/W53-USERAPI-CONFIG.git"
ENV SYSTEMCONFFILE="./W53-USERAPI-CONFIG/env.sh"

RUN apt-get update
RUN apt-get install git-core

RUN chown -R 1000:0 /usr/src/app && chmod -R og+rwx /usr/src/app
RUN chmod +x ./start.sh

USER 1000

CMD ./start.sh

EXPOSE 3000