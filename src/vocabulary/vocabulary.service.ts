import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VocabularyEntity } from './entities/vocabulary.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VocabularyService {
    constructor(
        @InjectRepository(VocabularyEntity)
        private vocabularyRepository: Repository<VocabularyEntity>

    ) {

    }
    async findAll(): Promise<VocabularyEntity[]> {
        return await this.vocabularyRepository.find();
    }
}
