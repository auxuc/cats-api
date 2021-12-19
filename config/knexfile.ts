const dbSecrets = {
  client: "mysql",
  connection: {
    host: process.env.HOST || "127.0.0.1",
    port: process.env.PORT || "3306",
    user: "root",
    password: process.env.PASSWORD || "yourpassword",
    database: process.env.DATABASE || "cats",
  },
};

export default dbSecrets;
