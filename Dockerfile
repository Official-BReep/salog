FROM nginx:1.28-alpine
LABEL org.opencontainers.image.title="Satisfactory Logistics Planner" \
      org.opencontainers.image.description="Browser-based factory planning and logistics simulation" \
      org.opencontainers.image.version="9.6"
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1
