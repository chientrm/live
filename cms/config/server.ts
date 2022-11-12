export default ({ env }) => {
  const url = env("GITPOD_WORKSPACE_URL", "").replace("://", "://1337-"),
    config = {
      host: "localhost",
      app: { keys: env.array("APP_KEYS") },
      url,
      admin: { url: `${url}/admin` },
    };
  return config;
};
