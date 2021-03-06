import knex from "knex";


export abstract class BaseDB {
  protected connection = knex({
    client: process.env.CLIENT as string,

        connection: {
            host: process.env.HOST,
            port: 3306,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE
    }
  });
}
