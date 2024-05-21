import { IsString, IsInt, Min, validateSync } from 'class-validator';


export class AuthResponseDTO {
    @IsString()
    token: string;

    @IsInt()
    @Min(0)
    expiresIn: number;

    constructor(token: string, expiresIn: number) {
        this.token = token;
        this.expiresIn = expiresIn;
    }

    static create(token: string, expiresIn: number): AuthResponseDTO {
        const dto = new AuthResponseDTO(token, expiresIn);
        const errors = validateSync(dto);
        if (errors.length > 0) {
            const errorMessage = errors.map(error => Object.values(error.constraints).join(', ')).join(', ');
            throw new Error(`Validation error in AuthResponseDTO: ${errorMessage}`);
        }
        return dto;
    }
}