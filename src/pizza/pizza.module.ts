import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PizzaService } from './pizza.service';

@Module({
  imports: [
    ConfigModule.forFeature(() => ({
      favoriteFood: 'pizza',
    })),
  ],
  providers: [PizzaService],
})
export class PizzaModule {}
