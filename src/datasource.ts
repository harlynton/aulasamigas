import { DataSource } from "typeorm";
import CONFIG from "./config";

const AppDataSource = new DataSource({
  type: "mysql",
  host: CONFIG.DATABASE.HOST,
  port: CONFIG.DATABASE.DBPORT,
  username: CONFIG.DATABASE.DBUSER,
  password: CONFIG.DATABASE.DBPWD,
  database: CONFIG.DATABASE.DBNAME,
  entities:[
    `${__dirname}/**/**.entity{.ts,.js}`
  ],
  synchronize: false,
});

export default AppDataSource;
