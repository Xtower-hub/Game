FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY packages/shared ./packages/shared
COPY server ./server

RUN npm install --workspace=packages/shared --workspace=server
RUN npm run build --workspace=packages/shared
RUN npm run build --workspace=server

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=2567

COPY package*.json ./
COPY packages/shared/package*.json ./packages/shared/
COPY packages/shared/dist ./packages/shared/dist
COPY server/package*.json ./server/
COPY server/dist ./server/dist

RUN npm install --only=production --workspace=packages/shared --workspace=server

EXPOSE 2567

CMD ["node", "server/dist/index.js"]
