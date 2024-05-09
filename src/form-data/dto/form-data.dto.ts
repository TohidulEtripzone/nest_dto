// src/dto/form-data.dto.ts

import { IsString, IsNotEmpty, IsNumber, IsInt, IsOptional } from 'class-validator';
import { IsJpgConstraint } from 'src/validators/jpg.validator';



export class FormDataDto {
  @IsNotEmpty()
  @IsString()
  readonly text: string;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  readonly number: number;

  @IsOptional()
  @IsJpgConstraint()
  readonly image: any;
}
