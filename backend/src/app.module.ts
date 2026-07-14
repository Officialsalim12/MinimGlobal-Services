import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';
import { TeamModule } from './team/team.module';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ExpenditureModule } from './expenditure/expenditure.module';
import { UploadModule } from './upload/upload.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    AuthModule,
    ServicesModule,
    TeamModule,
    BlogModule,
    ContactModule,
    PortfolioModule,
    ExpenditureModule,
    UploadModule,
    EmailModule,
  ],
})
export class AppModule {}
