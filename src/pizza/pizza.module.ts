import { Module } from '@nestjs/common';
import { FoodModule } from '../food/food.module';
import { PizzaService } from './pizza.service';

@Module({
  imports: [FoodModule.register({ favoriteFood: 'pizza' })],
  providers: [PizzaService],
})
export class PizzaModule {}
