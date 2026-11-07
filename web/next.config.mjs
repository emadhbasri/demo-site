// The browser only talks to web; /api/* is proxied to the Express service on the compose network.
export default {
  async rewrites() {
    return [{ source: '/api/:path*', destination: 'http://api:4000/api/:path*' }];
  },
};
