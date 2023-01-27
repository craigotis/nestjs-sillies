import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PizzaModule } from './pizza/pizza.module';
import { PastaModule } from './pasta/pasta.module';

@Module({
  imports: [PizzaModule, PastaModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
