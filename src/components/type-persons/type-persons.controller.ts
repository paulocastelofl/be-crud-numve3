import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypePersonsService } from './type-persons.service';
import { CreateTypePersonDto } from './dto/create-type-person.dto';
import { UpdateTypePersonDto } from './dto/update-type-person.dto';

@Controller('type-persons')
export class TypePersonsController {
  constructor(private readonly typePersonsService: TypePersonsService) {}

  @Post()
  create(@Body() createTypePersonDto: CreateTypePersonDto) {
    return this.typePersonsService.create(createTypePersonDto);
  }

  @Get()
  findAll() {
    return this.typePersonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typePersonsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypePersonDto: UpdateTypePersonDto) {
    return this.typePersonsService.update(+id, updateTypePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typePersonsService.remove(+id);
  }
}
