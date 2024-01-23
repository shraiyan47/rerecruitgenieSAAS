const createSubFeatureTable = `
    CREATE TABLE IF NOT EXISTS SubFeature (
        id SERIAL PRIMARY KEY,
        isActive VARCHAR(1) DEFAULT 't',
        createdate TIMESTAMP DEFAULT NULL,
        updatedate TIMESTAMP DEFAULT now(),
        archivedate TIMESTAMP DEFAULT NULL,
        entry_by VARCHAR(20) DEFAULT 'SYS_ADMIN',

        feature_name VARCHAR(50) NOT NULL,
        feature_details VARCHAR(255) DEFAULT NULL
    );
`;

export default createSubFeatureTable;