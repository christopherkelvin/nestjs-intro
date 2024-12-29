import { Optional } from '@nestjs/common';
import {
  IsDate,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  title: string;

  @IsString()
  postType: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(300)
  @IsString()
  slug: string;

  @Optional()
  @IsString()
  content?: string;

  @Optional()
  @IsString()
  schema?: string;

  @Optional()
  @IsString()
  featuredImage?: string;

  @IsDate()
  publishDate: Date;

  @IsString()
  tags: string[];

  metaOptions: [{ key: 4 }];
}
