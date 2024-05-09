import { Injectable } from '@nestjs/common';
import { CreateFormDatumDto } from './dto/form-data.dto';
import { UpdateFormDatumDto } from './dto/update-form-datum.dto';

@Injectable()
export class FormDataService {
  create(createFormDatumDto: CreateFormDatumDto) {
    return 'This action adds a new formDatum';
  }

  findAll() {
    return `This action returns all formData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} formDatum`;
  }

  update(id: number, updateFormDatumDto: UpdateFormDatumDto) {
    return `This action updates a #${id} formDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} formDatum`;
  }
}
