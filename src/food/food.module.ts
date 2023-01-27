import { DynamicModule, Module } from '@nestjs/common';

export const FOOD_SERVICE = Symbol('FOOD_SERVICE');

export class FoodService {
  constructor(public readonly favorite: string) {}
}

@Module({})
export class FoodModule {
  static register({ favoriteFood }: { favoriteFood: string }): DynamicModule {
    return {
      module: FoodModule,
      providers: [
        {
          provide: FOOD_SERVICE,
          useFactory: () => new FoodService(favoriteFood),
        },
      ],
      exports: [FOOD_SERVICE],
    };
  }
}
