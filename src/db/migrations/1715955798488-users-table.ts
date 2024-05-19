import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UsersTable1715955798488 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                // Criando a extensão 'uuid-ossp'
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
               // Criando a tabela 'users'
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
                {
                    name: 'username',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'role',
                    type: 'varchar',
                },
                {
                    name: 'coin',
                    type: 'int',
                },
                {
                    name: 'leader',
                    type: 'boolean',
                },
                {
                    name: 'people',
                    type: 'boolean',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
                // Desfazendo a criação da tabela
                await queryRunner.dropTable('users');

    }

}
