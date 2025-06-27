FROM node:20-alpine

WORKDIR /usr/src/app

COPY ./turbo.json ./
COPY ./pnpm-lock.yaml ./
COPY ./package.json ./
COPY ./pnpm-workspace.yaml ./

COPY ./packages ./packages
COPY ./apps/backend ./apps/backend

RUN corepack enable && pnpm install --frozen-lockfile

RUN pnpm --filter=db exec prisma generate

EXPOSE 3001

WORKDIR /usr/src/app/apps/backend

RUN pnpm --filter=backend run build

CMD ["pnpm", "start"]