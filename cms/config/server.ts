export default ({ env }) => {
  const keys = env.array("APP_KEYS"),
    url = env("GITPOD_WORKSPACE_URL", "").replace("://", "://1337-"),
    config = { app: { keys }, url, admin: { url: `${url}/admin` } };
  return config;
};
