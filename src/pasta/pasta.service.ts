import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PastaService {
  constructor(private readonly configService: ConfigService) {}

  getFavoriteFood(): string {
    return this.configService.get('favoriteFood');
  }
}
