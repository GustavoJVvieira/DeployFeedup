import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CommentsTable1715955839468 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Criando a extensão 'uuid-ossp'
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

        // Criando a tabela 'comments'
        await queryRunner.createTable(new Table({
            name: 'comments',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'id_feedup',
                    type: 'uuid',
                },
                {
                    name: 'id_usercommented',
                    type: 'uuid',
                },
                {
                    name: 'message',
                    type: 'varchar',
                },
                {
                    name: 'like',
                    type: 'int',
                    default: 0,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP ',
                },
            ],
        }), true);

        // Adicionando as chaves estrangeiras 'id_feedup' e 'id_usercommented'
        await queryRunner.createForeignKeys('comments', [
            new TableForeignKey({
                columnNames: ['id_feedup'],
                referencedColumnNames: ['id'],
                referencedTableName: 'feedbacks',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['id_usercommented'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         // Desfazendo a criação da tabela e das chaves estrangeiras
         await queryRunner.dropTable('comments');
    }

}
