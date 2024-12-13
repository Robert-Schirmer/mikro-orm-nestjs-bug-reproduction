import { Migrator, TSMigrationGenerator } from '@mikro-orm/migrations';
import { defineConfig, Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SeedManager } from '@mikro-orm/seeder';
import * as dotenv from 'dotenv';
import { NodeEnv } from '../shared/enums/env.enum';

dotenv.config();

export default defineConfig({
    debug: process.env.NODE_ENV === NodeEnv.Development ? true : false,
    host: process.env.NODE_ENV === NodeEnv.Test ? process.env.DB_POSTGRES_TEST_HOST : process.env.DB_POSTGRES_HOST,
    port: process.env.NODE_ENV === NodeEnv.Test ? Number(process.env.DB_POSTGRES_TEST_PORT) : Number(process.env.DB_POSTGRES_PORT),
    user: process.env.DB_POSTGRES_USER,
    password: process.env.DB_POSTGRES_PASSWORD,
    dbName: process.env.NODE_ENV === NodeEnv.Test ? process.env.DB_POSTGRES_TEST_NAME : process.env.DB_POSTGRES_NAME,
    forceUtcTimezone: true,
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    migrations: {
        tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions
        path: './dist/database/migrations', // path to the folder with migrations
        pathTs: './src/database/migrations', // path to the folder with TS migrations (if used, we should put path to compiled files in `path`)
        glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
        transactional: true, // wrap each migration in a transaction
        disableForeignKeys: false, // wrap statements with `set foreign_key_checks = 0` or equivalent
        allOrNothing: true, // wrap all migrations in master transaction
        dropTables: true, // allow to disable table dropping
        safe: false, // allow to disable table and column dropping
        snapshot: true, // save snapshot when creating new migrations
        emit: 'ts', // migration generation mode
        generator: TSMigrationGenerator, // migration generator, e.g. to allow custom formatting
    },
    driver: PostgreSqlDriver,
    seeder: {
        path: 'dist/**/',
        pathTs: 'src/**/',
        glob: '*.seed.{js,ts}',
        defaultSeeder: 'TemplateSeeder',
    },
    metadataProvider: TsMorphMetadataProvider,
    extensions: [Migrator, SeedManager],
} as Options);
