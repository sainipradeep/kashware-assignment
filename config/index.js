module.exports = {
  app: {
    port: process.env.DEV_APP_PORT || 3000,
    appName: process.env.APP_NAME || 'kashware',
    env: process.env.NODE_ENV || 'development',
  },
  auth: {
    jwt_secret: process.env.JWT_SECRET || 'VmVyeVBvd2VyZnVsbFNlY3JldA==',
    jwt_expiresin: process.env.JWT_EXPIRES_IN || '1d',
    algorithm: "RS256",
    saltRounds: process.env.SALT_ROUND || 10,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET || 'VmVyeVBvd2VyZnVsbFNlY3JldA==',
    refresh_token_expiresin: process.env.REFRESH_TOKEN_EXPIRES_IN || '2d', // 2 days
  },
  username: "username",
  passwordHash: "$2b$10$bemkYHXdOejvT3TSkipn4.qWkEOlYqdK7FJQTqMftBuufqmATG6Vu"
};
