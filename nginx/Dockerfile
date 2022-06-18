FROM nginx:1.22.0-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx","-g", "daemon off;"]
