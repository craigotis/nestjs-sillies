import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { ConfigService } from '@nestjs/config';
import { PizzaModule } from '../src/pizza/pizza.module';
import { PastaModule } from '../src/pasta/pasta.module';
import { PastaService } from '../src/pasta/pasta.service';
import { PizzaService } from '../src/pizza/pizza.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    const config = app.get(ConfigService);
    const pastaService = app.get(PastaService);
    const pizzaService = app.get(PizzaService);
    const pizzaConfig = app.select(PizzaModule).get(ConfigService);
    const pastaConfig = app.select(PastaModule).get(ConfigService);
    console.log('Config:', {
      nestChosen: config.get('favoriteFood'),
      pastaService: pastaService.getFavoriteFood(),
      pastaConfig: pastaConfig.get('favoriteFood'),
      pizzaService: pizzaService.getFavoriteFood(),
      pizzaConfig: pizzaConfig.get('favoriteFood'),
    });
  });

  it('should work', () => {});
});
