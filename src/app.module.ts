import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './components/persons/persons.module';
import { TypePersonsModule } from './components/type-persons/type-persons.module';

@Module({
  imports: [PersonsModule, TypePersonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
