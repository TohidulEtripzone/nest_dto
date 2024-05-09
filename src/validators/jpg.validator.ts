// src/validators/is-jpg.validator.ts

import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'isJpg', async: false })
export class IsJpgConstraint implements ValidatorConstraintInterface {
  validate(image: any, args: ValidationArguments) {
    if (!image) {
      return true; // If no image is provided, validation passes
    }
    return image.mimetype === 'image/jpeg' || image.mimetype === 'image/jpg';
  }

  defaultMessage(args: ValidationArguments) {
    return 'File must be in JPG format';
  }
}
