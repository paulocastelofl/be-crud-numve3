import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Person } from '@prisma/client';

@Injectable()
export class PersonsService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    return await this.prisma.person.create({
      data: {
        phone: createPersonDto.phone,
        email: createPersonDto.email,
        username: createPersonDto.name,
        typeId: createPersonDto.typeId,
      },
    });
  }

  async findAll() {
    return await this.prisma.person.findMany({
      include: {
        fkType: {
          select: {
            id: true,
            description: true,
          }
        }
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.person.findUnique({
      where: { id },
    });
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    return this.prisma.person.update({
      data: {
        phone: updatePersonDto.phone,
        email: updatePersonDto.email,
        username: updatePersonDto.name,
        typeId: updatePersonDto.typeId,
      },
      where: { id },
    });
  }

  async remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
