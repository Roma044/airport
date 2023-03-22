const { connectToDatabase } = require("./dbconnect.js");

async function queryDatabase() {
  let connection;
  try {
    connection = await connectToDatabase();

    const result = await connection.execute("SELECT * FROM airports");

    console.log(result.rows);
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

queryDatabase();
