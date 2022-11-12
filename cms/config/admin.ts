export default ({ env }) => ({
  auth: { secret: env("ADMIN_JWT_SECRET") },
  apiToken: { salt: env("API_TOKEN_SALT") },
  webpack: (config) => ({
    ...config,
    devServer: {
      public: env("GITPOD_WORKSPACE_URL", "").replace("://", `://1337-`),
      disableHostCheck: true,
    },
  }),
});
