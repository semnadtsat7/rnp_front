FROM node:13.7-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run --production build
RUN rm -r node_modules
RUN yarn install --production

FROM node:13.7-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]