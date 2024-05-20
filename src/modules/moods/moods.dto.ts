import { ApiProperty } from "@nestjs/swagger";

export class MoodsDTO{
    @ApiProperty({
        description: "ID do Mood em formato UUID.",
        example: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
        required: false
      })
    id: string;

    @ApiProperty({
        description: "ID do usuario relacionado ao Mood em formato UUID.",
        example: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
        required: false
      })
    id_user: string;

    @ApiProperty({
        description: "Valor Relacionado ao Mood em formato Inteiro. Sendo 1 o valor de menor satisfação e 5 o de maior satisfação",
        example: "5",
        required: true,
      })
    moods: number;

    @ApiProperty({
        description: "Data de Criação do Mood.",
        example: "2024-05-18T20:03:39.486Z",
        required: false
      })
    created_at ?: Date;
    @ApiProperty({
        description: "Data de Update do Feedup, caso necessário.",
        example: "2024-05-18T20:03:39.486Z",
        required: false
      })
    updated_at ?: Date;
}