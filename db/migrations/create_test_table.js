const createTestTable = `
    CREATE TABLE IF NOT EXISTS test (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        status VARCHAR(255) NOT NULL
    );
`;

export default createTestTable;