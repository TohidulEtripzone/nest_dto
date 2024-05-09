// src/controllers/form.controller.ts

import { Controller, Post, UploadedFile, UseInterceptors, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FormDataDto } from './dto/form-data.dto';


@Controller('form')
export class FormController {
  @Post('submit')
  @UseInterceptors(FileInterceptor('image'))
  async submitForm(@UploadedFile() image, @Body() formData: FormDataDto) {
    // Handle form submission here
    console.log(formData);
    return 'Form submitted successfully';
  }
}
