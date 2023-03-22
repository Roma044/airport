const oracledb = require("oracledb");

async function connectToDatabase() {
  const connection = await oracledb.getConnection({
    user: "COMP214_W23_zo_44",
    password: "password",
    connectString: "199.212.26.208",
  });
  return connection;
}

module.exports = {
  connectToDatabase,
};
