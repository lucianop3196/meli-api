import { IsString } from 'class-validator';

export class SearchQueryDTO {
  @IsString()
  q: string;
}
