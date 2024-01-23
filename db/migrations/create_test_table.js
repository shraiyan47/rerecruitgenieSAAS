const createTestTable = `
    CREATE TABLE IF NOT EXISTS test (
        id SERIAL PRIMARY KEY,
        isActive VARCHAR(1) DEFAULT 't',
        createdate TIMESTAMP DEFAULT NULL,
        updatedate TIMESTAMP DEFAULT now(),
        archivedate TIMESTAMP DEFAULT NULL,
        entry_by VARCHAR(20) DEFAULT 'SYS_ADMIN',
        updated_by VARCHAR(20) DEFAULT NULL,
        
        title VARCHAR(255) NOT NULL,
        status VARCHAR(255) NOT NULL
        
    );
`;

export default createTestTable;