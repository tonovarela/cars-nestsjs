import { IsString } from "class-validator";

export class CreateCarDTO {
    @IsString({message:"El modelo debe ser un string"})
    readonly brand: string;
    @IsString()
    readonly model: string;
}