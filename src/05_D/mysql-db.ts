import DbConnectionInterface from "../models/db-connection-interface";

class MysqlDb implements DbConnectionInterface {
  connect() {
    return "connecting to MySQL...";
  }
}
export default MysqlDb;
