// For Documenation refer url: https://docs.nestjs.com/openapi/types-and-parameters
import { postStatus } from '../enums/post-status.enum';
import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MinLength,
} from 'class-validator';
import { PostType } from '../enums/post-type.enum';

export class CreatePostDto {
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string;

  @IsEnum(PostType)
  @IsNotEmpty()
  postType: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  slug: string;

  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;

  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsJSON()
  schema: string;

  @IsOptional()
  @IsUrl()
  featuredImageUrl: string;

  @IsISO8601()
  @IsOptional()
  publishOn: Date;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags: string[];

  metaOptions: [{ key: 'sidebarEnabled'; value: false }];
}
