import db from "../dbconf.js"
import createTestTable from "./create_test_table.js";

const runDbMigrations = async () => {
  console.log('BEGIN DB MIGRATION');

  // use single client forn transactions
  const client = await db.connect()

  try {
    // await client.query('BEGIN'); // begin transaction

    await client.query(createTestTable);

    await client.query('COMMIT') // commit transaction

    console.log('END DB MIGRATION');
  } catch (e) {
    await client.query('ROLLBACK') // rollback transaction

    console.log('DB migration failed');

    throw e
  } finally {
    client.release()
  }
}

export default runDbMigrations;