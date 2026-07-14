import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ExpenditureService } from './expenditure.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('expenditure')
export class ExpenditureController {
  constructor(private expenditureService: ExpenditureService) {}

  @Get()
  findAll() {
    return this.expenditureService.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.expenditureService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.expenditureService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expenditureService.remove(+id);
  }
}
