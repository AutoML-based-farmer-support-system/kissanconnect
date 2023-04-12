var dbHost = process.env.dbHost || "0.0.0.0";
module.exports = {
  name: "Kisan Connect",
  title: "Kisan Connect",
  commands: {
    package:
      "electron-packager electron.js spruce --electronVersion=2.0.12 --overwrite --icon=/public/images/logo/logo.png --prune=true --out=release",
    build: ""
  },
  http: {
    host: "localhost",
    port: 7854
  },
  author: "Charan Narukulla",
  version: "2.0.0",
  db: {
    connectionUri: "mongodb://" + dbHost + ":27017/kisanconnect",
    params: {},
    collections: ["moment", "user", "feeling", "ask"]
  }
};
