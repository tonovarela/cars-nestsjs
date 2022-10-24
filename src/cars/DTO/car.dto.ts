import { IsOptional, IsString, IsUUID } from "class-validator";

export class CarDTO {
    @IsOptional()
    @IsUUID()            
    readonly id?:string;

    @IsString({message:"El modelo debe ser un string"})
    readonly brand: string;

    @IsString()    
    readonly model: string;
    
}