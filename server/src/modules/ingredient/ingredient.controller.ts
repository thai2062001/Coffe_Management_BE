import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { ApiTags } from '@nestjs/swagger';
import { FormDataInterceptor } from 'src/third-parties/interceptors/transform.interceptor';

@ApiTags('ingredient')
@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  // @Post()
  // create(@Body() createIngredientDto: CreateIngredientDto) {
  //   return this.ingredientService.create(createIngredientDto);
  // }

  @Get()
  findAll() {
    return this.ingredientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FormDataInterceptor)
  update(@Param('id') id: string, @Body() updateIngredientDto: UpdateIngredientDto) {
    return this.ingredientService.update(+id, updateIngredientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientService.remove(+id);
  }
}
