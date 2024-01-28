import pg from 'pg'

const db = new pg.Pool({
    host: (process.env.DB_HOST_TYPE === "prod")?process.env.DB_HOST:process.env.DB_LOCALHOST,
    port: '5432',
    user: 'postgres',
    password: 'psql@123',
    database: 'rgdb',
});

export default db;
