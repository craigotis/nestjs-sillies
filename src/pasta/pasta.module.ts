import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PastaService } from './pasta.service';

@Module({
  imports: [
    ConfigModule.forFeature(() => ({
      favoriteFood: 'pasta',
    })),
  ],
  providers: [PastaService],
})
export class PastaModule {}
