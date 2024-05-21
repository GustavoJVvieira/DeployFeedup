import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class MoodsTable1715955848297 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(new Table({
            name: 'user_moods',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'id_user',
                    type: 'uuid',
                },
                {
                    name: 'moods',
                    type: 'int',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'NOW()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
            ],
        }), true);

        // Adicionando a chave estrangeira 'id_user' referenciando 'users.id'
        await queryRunner.createForeignKey('user_moods', new TableForeignKey({
            columnNames: ['id_user'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Desfazendo a criação da tabela e da chave estrangeira
        await queryRunner.dropTable('user_moods');
    }

}
