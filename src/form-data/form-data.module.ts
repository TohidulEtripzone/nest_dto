import { Module } from '@nestjs/common';
import { FormDataService } from './form-data.service';
import { FormController } from './form-data.controller';

@Module({
  controllers: [FormController],
  providers: [FormDataService],
})
export class FormDataModule {}
