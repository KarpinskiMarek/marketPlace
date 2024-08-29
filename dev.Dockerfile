FROM node:20

ENV app_root /market-place
ENV PATH $app_root/node_modules/.bin:$PATH

RUN apt-get update \
 && apt-get install -y chromium \
    --no-install-recommends

RUN mkdir $app_root
WORKDIR $app_root

COPY package.json package.json

RUN rm -rf node_modules && npm install
RUN npm i -g @nestjs/cli ts-node

EXPOSE 3000

CMD ["npm", "run", "start:debug"]