const createSubscriptionPlanTable = `
    CREATE TABLE IF NOT EXISTS SubscriptionPlan (
        id SERIAL PRIMARY KEY,
        isActive VARCHAR(1) DEFAULT 't',
        createdate TIMESTAMP DEFAULT NULL,
        updatedate TIMESTAMP DEFAULT now(),
        archivedate TIMESTAMP DEFAULT NULL,
        entry_by VARCHAR(20) DEFAULT 'SYS_ADMIN',
        updated_by VARCHAR(20) DEFAULT NULL,

        plan_name VARCHAR(255) NOT NULL,
        plan_description VARCHAR(255),
        plan_price DECIMAL(10,2) NOT NULL,
        total_active_job INTEGER,
        total_candidate_view INTEGER,
        sub_features_id VARCHAR(255)

    );
`;

export default createSubscriptionPlanTable;