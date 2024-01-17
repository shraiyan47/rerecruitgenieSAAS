// import pg from 'pg'

// const db = new pg.Pool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// export default db;

import db from './dbconf.js'

const query = async (text, params) => {
    const start = Date.now()

    const client = await db.connect()

    const res = await client.query(text, params);
    await client.query('COMMIT')
    const duration = Date.now() - start
    console.log('executed query', { text, duration, rows: res.rowCount })

    return res
}

export default query


export const getClient = async () => {
    const client = await db.connect()
    const query = client.query
    const release = client.release
    // set a timeout of 5 seconds, after which we will log this client's last query
    const timeout = setTimeout(() => {
      console.error('A client has been checked out for more than 5 seconds!')
      console.error(`The last executed query on this client was: ${client.lastQuery}`)
    }, 5000)
    // monkey patch the query method to keep track of the last query executed
    client.query = (...args) => {
      client.lastQuery = args
      return query.apply(client, args)
    }
    client.release = () => {
      // clear our timeout
      clearTimeout(timeout)
      // set the methods back to their old un-monkey-patched version
      client.query = query
      client.release = release
      return release.apply(client)
    }
    return client
  }

