-- PostgreSQL schema for Living Culture Health South Africa.
CREATE TABLE IF NOT EXISTS schema_migrations (
  version VARCHAR(100) PRIMARY KEY,
  applied_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS app_records (
  table_name VARCHAR(64) NOT NULL,
  record_id VARCHAR(64) NOT NULL,
  data_json JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (table_name, record_id)
);

CREATE INDEX IF NOT EXISTS idx_app_records_table_updated
  ON app_records (table_name, updated_at);

INSERT INTO schema_migrations (version) VALUES ('0001_postgres_records')
ON CONFLICT (version) DO NOTHING;
