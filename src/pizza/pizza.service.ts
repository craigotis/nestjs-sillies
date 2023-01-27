import { Inject, Injectable } from '@nestjs/common';
import { FoodService, FOOD_SERVICE } from '../food/food.module';

@Injectable()
export class PizzaService {
  constructor(@Inject(FOOD_SERVICE) private readonly food: FoodService) {}

  getFavoriteFood(): string {
    return this.food.favorite;
  }
}
