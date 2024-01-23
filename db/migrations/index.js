import db from "../dbconf.js"

import createTestTable from "./create_test_table.js";
import createSubscriptionPlanTable from "./create_subscription_plan.js";
import createSubFeatureTable from "./create_sub_features_table.js";
import createSysUserTable from "./create_sys_user_table.js";

const runDbMigrations = async () => {
  console.log('BEGIN DB MIGRATION');

  // use single client forn transactions
  const client = await db.connect()

  try {
    // await client.query('BEGIN'); // begin transaction

    await client.query(createTestTable);
    await client.query(createSubscriptionPlanTable);
    await client.query(createSubFeatureTable);
    await client.query(createSysUserTable);

    await client.query('COMMIT') // commit transaction

    console.log('END DB MIGRATION');
  } catch (e) {
    await client.query('ROLLBACK') // rollback transaction

    console.log('DB migration failed', e);

    throw e
  } finally {
    client.release()
  }
}

export default runDbMigrations;