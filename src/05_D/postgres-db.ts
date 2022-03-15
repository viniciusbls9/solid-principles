import DbConnectionInterface from "../models/db-connection-interface";

class PostgresDb implements DbConnectionInterface {
  connect() {
    return "connecting to Postgres...";
  }
}
export default PostgresDb;
