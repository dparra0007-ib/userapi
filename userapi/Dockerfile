FROM node:6.10.3-onbuild

RUN mkdir -p /usr/src/conf && \
    chown -R 1000:0 /usr/src/conf && chmod -R og+rwx /usr/src/conf && \
    mkdir -p /usr/src/dynamic-conf &&\
    chown -R 1000:0 /usr/src/conf && chmod -R og+rwx /usr/src/dynamic-conf

ADD start.sh start.sh
RUN chmod +x ./start.sh

USER 1000

CMD ./start.sh

EXPOSE 3000