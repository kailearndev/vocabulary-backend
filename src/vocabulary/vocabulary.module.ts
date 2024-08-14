import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Vocabulary } from './entities/vocabulary.entity';
import { VocabularyService } from './vocabulary.service';
import { VocabularyEntity } from './entities/vocabulary.entity';

@Module({
    providers: [VocabularyService],
    imports: [TypeOrmModule.forFeature([VocabularyEntity])],
    exports: [VocabularyService]
})
export class VocabularyModule {

}
