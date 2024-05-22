import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Likes1716097782521 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(new Table({
            name: 'likes',
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
                    name: 'id_feedup',
                    type: 'uuid',
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
        await queryRunner.createForeignKeys('likes',[

        new TableForeignKey({columnNames: ['id_user'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE', }),

        new TableForeignKey({columnNames: ['id_feedup'],
        referencedColumnNames: ['id'],
        referencedTableName: 'feedbacks',
        onDelete: 'CASCADE', })
    
        ]);
    

}
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('likes');
    }

}
