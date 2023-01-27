import { Module } from '@nestjs/common';
import { FoodModule } from '../food/food.module';
import { PastaService } from './pasta.service';

@Module({
  imports: [FoodModule.register({ favoriteFood: 'pasta' })],
  providers: [PastaService],
})
export class PastaModule {}
