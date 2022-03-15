import MysqlDb from "./mysql-db";
import PostgresDb from "./postgres-db";

describe("Postgres and MySQL connect", () => {
  test("should correctly connection with database", () => {
    const mySQL = new MysqlDb();
    const postgresDB = new PostgresDb();

    expect(mySQL.connect()).toBe("connecting to MySQL...");
    expect(postgresDB.connect()).toBe("connecting to Postgres...");
  });
});
