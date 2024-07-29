import { Module } from '@nestjs/common';
import { TypePersonsService } from './type-persons.service';
import { TypePersonsController } from './type-persons.controller';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TypePersonsController],
  providers: [TypePersonsService],
})
export class TypePersonsModule {}
