export default () => ({
  connection: {
    client: "mysql",
    connection: {
      port: 3306,
      database: "live",
      user: "live",
      password: "",
      ssl: false,
    },
  },
});
