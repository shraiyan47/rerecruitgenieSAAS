import pg from 'pg'

const db = new pg.Pool({
    host: '115.127.82.154',
    port: '5432',
    user: 'postgres',
    password: 'psql@123',
    database: 'rgdb',
});

export default db;
