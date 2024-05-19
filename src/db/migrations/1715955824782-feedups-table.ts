import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class FeedupsTable1715955824782 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         // Criando a extensão 'uuid-ossp'
         await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
          
         // Criando a tabela 'feedbacks'
        await queryRunner.createTable(new Table({
            name: 'feedbacks',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'id_usersend',
                    type: 'uuid',
                },
                {
                    name: 'id_userreceived',
                    type: 'uuid',
                },
                {
                    name: "username_userreceived",
                    type: "varchar"
                },
                {
                    name: 'value',
                    type: 'varchar',
                },
                {
                    name: 'message',
                    type: 'varchar',
                },
                {
                    name: 'isanonymous',
                    type: 'boolean',
                },
                {
                    name: 'isconstructive',
                    type: 'boolean',
                },
                {
                    name: 'likes',
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

        // Adicionando as chaves estrangeiras 'id_usersend' e 'id_userreceived' referenciando 'users.id'
        await queryRunner.createForeignKeys('feedbacks', [
            new TableForeignKey({
                columnNames: ['id_usersend'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['id_userreceived'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
            }),
            
            new TableForeignKey({
                columnNames: ['username_userreceived'],
                referencedColumnNames: ['username'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
          // Desfazendo a criação da tabela e das chaves estrangeiras
          await queryRunner.dropTable('feedbacks');
    }

}
