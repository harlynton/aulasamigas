import "reflect-metadata";

import app from "./app";
import CONFIG from "./config";
import AppDataSource from "./datasource";

const PORT = CONFIG.SERVER.SETTINGS.PORT;

async function main() {
  await AppDataSource.initialize()
    .then(() => {
      console.log("*********************************");
      console.log("     Data Base connected");
      app.listen(PORT, () => {
        console.log(`     Server on port ${PORT}`);
        console.log("*********************************");
      });
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
}

main();
