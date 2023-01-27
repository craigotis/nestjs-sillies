import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { PizzaModule } from '../src/pizza/pizza.module';
import { PastaModule } from '../src/pasta/pasta.module';
import { PastaService } from '../src/pasta/pasta.service';
import { PizzaService } from '../src/pizza/pizza.service';
import { FoodModule, FOOD_SERVICE } from '../src/food/food.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    const config = app.get(FOOD_SERVICE);
    const pastaService = app.get(PastaService);
    const pizzaService = app.get(PizzaService);
    // const pizzaConfig = app
    //   .select(PizzaModule)
    //   .select(FoodModule)
    //   .get(FOOD_SERVICE, { strict: true });
    // const pastaConfig = app
    //   .select(PastaModule)
    //   .select(FoodModule)
    //   .get(FOOD_SERVICE, { strict: true });
    console.log('Config:', {
      nestChosen: config.favorite,
      pastaService: pastaService.getFavoriteFood(),
      // pastaConfig: pastaConfig.favorite,
      pizzaService: pizzaService.getFavoriteFood(),
      // pizzaConfig: pizzaConfig.favorite,
    });
  });

  it('should work', () => {});
});
