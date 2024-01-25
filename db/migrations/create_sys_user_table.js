const createSysUserTable = `
    CREATE TABLE IF NOT EXISTS SysUser (
        id SERIAL PRIMARY KEY,
        isActive VARCHAR(1) DEFAULT 't',
        createdate TIMESTAMP DEFAULT NULL,
        updatedate TIMESTAMP DEFAULT now(),
        archivedate TIMESTAMP DEFAULT NULL,
        entry_by VARCHAR(20) DEFAULT 'SYS_ADMIN',

        profile_id VARCHAR(10) DEFAULT NULL,
        full_name VARCHAR(70) DEFAULT NULL,
        email VARCHAR(70) NOT NULL UNIQUE,
        username VARCHAR(250) DEFAULT NULL UNIQUE,
        password VARCHAR(250) DEFAULT 'asdf1234',
        usre_role_id INTEGER DEFAULT 1
    );
`;

export default createSysUserTable;
