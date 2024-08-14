import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { VocabularyService } from './vocabulary/vocabulary.service';
import { VocabularyController } from './vocabulary/vocabulary.controller';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { DayController } from './day/day.controller';
import { DayModule } from './day/day.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME'),
        entities: [
          "dist/**/entities/*.entity.{ts,js}"
        ],

        synchronize: true,

      }),
      inject: [ConfigService],
    }),
    VocabularyModule,
    DayModule
  ],
  controllers: [AppController, VocabularyController, DayController],
  providers: [AppService],
})
export class AppModule { }
