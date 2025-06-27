FROM node:20-alpine

ARG DATABASE_URL

WORKDIR /usr/src/app

COPY ./packages /usr/src/app/packages
COPY ./apps/web /usr/src/app/apps/web
COPY package.json /usr/src/app/package.json  
COPY pnpm-workspace.yaml /usr/src/app/pnpm-workspace.yaml  
COPY pnpm-lock.yaml /usr/src/app/pnpm-lock.yaml  
COPY turbo.json /usr/src/app/turbo.json  

RUN corepack enable && pnpm install --frozen-lockfile

RUN pnpm --filter=db exec prisma generate

EXPOSE 3000

WORKDIR /usr/src/app/apps/web

RUN pnpm run build

CMD ["pnpm", "start"]