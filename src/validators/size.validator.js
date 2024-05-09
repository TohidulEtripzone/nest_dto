import {IsJpgConstraint , ValidatorConstraint, ValidationArguments } from 'class-validator';


@ValidatorConstraint({ name: 'isLessThanMaxSize', async: false })
export class IsLessThanMaxSizeConstraint {
  validate(image: Express.Multer.File, args: ValidationArguments): string {
    if (!image || typeof image.size !== 'number') {
      return true; 
    }

    const [maxFileSize] = args; 
    return image.size <= maxFileSize; 
  }

  defaultMessage(args: ValidationArguments): string {
    const [maxFileSize] = args; 
    const formattedMaxSize = (maxFileSize / (1024 * 1024)).toFixed(2) + 'MB'; 
    return `File size must be less than ${formattedMaxSize}`; 
  }
}
