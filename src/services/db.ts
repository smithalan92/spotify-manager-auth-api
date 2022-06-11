import mysql from "mysql2/promise";
import { Env } from "../lib/types";

async function makeDb({ env }: { env: Env }) {
  const connection = await mysql.createConnection({
    host: env.MYSQL_HOST,
    user: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD,
    database: "countries",
  });

  await connection.connect();

  return connection;
}

export default makeDb;
