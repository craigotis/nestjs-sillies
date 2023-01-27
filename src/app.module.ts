import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PizzaModule } from './pizza/pizza.module';
import { PastaModule } from './pasta/pasta.module';

@Module({
  imports: [PastaModule, PizzaModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
