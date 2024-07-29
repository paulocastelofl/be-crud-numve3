import { Injectable } from '@nestjs/common';
import { CreateTypePersonDto } from './dto/create-type-person.dto';
import { UpdateTypePersonDto } from './dto/update-type-person.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TypePersonsService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createTypePersonDto: CreateTypePersonDto) {
    return await this.prisma.typePerson.create({
      data: createTypePersonDto,
    });
  }

  async findAll() {
    return await this.prisma.typePerson.findMany();
  }

  findOne(id: number) {
    return this.prisma.typePerson.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTypePersonDto: UpdateTypePersonDto) {
    return this.prisma.typePerson.update({
      where: { id },
      data: updateTypePersonDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} typePerson`;
  }
}
