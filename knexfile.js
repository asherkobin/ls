module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "ec2-54-210-128-153.compute-1.amazonaws.com",
      user: "xhatiscazjxtfv",
      password:
        "cbcef9fb90ecef4842d491830fdd926e639c392f9cf41134629a4955edc4e561",
      database: "d5jatl52oho48m",
      ssl: {
        rejectUnauthorized: false
      }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    }
  },
  testing: {
    client: "pg",
    connection: {
      host: "ec2-54-210-128-153.compute-1.amazonaws.com",
      user: "xhatiscazjxtfv",
      password:
        "cbcef9fb90ecef4842d491830fdd926e639c392f9cf41134629a4955edc4e561",
      database: "d5jatl52oho48m",
      ssl: {
        rejectUnauthorized: false
      }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    }
  }
};
