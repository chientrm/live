import os from "os";

const homedir = os.homedir();

export default () => ({
  connection: {
    client: "sqlite",
    connection: { filename: `${homedir}/live.db` },
    useNullAsDefault: true,
  },
});
