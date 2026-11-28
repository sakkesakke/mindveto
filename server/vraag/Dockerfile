FROM node:22-alpine
WORKDIR /app
COPY server.mjs codes.mjs admin.mjs ./
RUN mkdir -p /app/data && chown -R node:node /app/data
USER node
ENV DATA_DIR=/app/data PORT=8787
EXPOSE 8787
CMD ["node", "server.mjs"]
