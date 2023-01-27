import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PizzaService {
  constructor(private readonly configService: ConfigService) {}

  getFavoriteFood(): string {
    return this.configService.get('favoriteFood');
  }
}
