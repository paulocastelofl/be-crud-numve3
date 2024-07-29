import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTypePersonDto {
    @ApiProperty({
        maxLength: 80,
        description: '',
        example: '',
        type: String,
        minimum: 1,
        maximum: 80,
    })
    @IsString()
    description: string;
}
