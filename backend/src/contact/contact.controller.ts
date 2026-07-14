import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ContactService } from './contact.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { EmailService } from '../email/email.service';

@Controller('contact')
export class ContactController {
  constructor(
    private contactService: ContactService,
    private emailService: EmailService
  ) {}

  @Post()
  async create(@Body() body: any) {
    const contact = await this.contactService.create(body);
    // Send email notification
    await this.emailService.sendContactNotification(body);
    return contact;
  }

  @UseGuards(JwtAuthGuard)
  @Get('messages')
  findAll() {
    return this.contactService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('messages/:id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('messages/:id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.contactService.update(+id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('messages/:id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(+id);
  }
}
