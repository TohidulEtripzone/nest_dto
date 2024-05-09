import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormDataModule } from './form-data/form-data.module';

@Module({
  imports: [FormDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
