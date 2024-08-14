import { Controller, Get } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';

@Controller('api/vocabulary')
export class VocabularyController {
    constructor(private readonly vocabularyService: VocabularyService) { }
    @Get()
    async getAllVocabulary() {
        return await this.vocabularyService.findAll();
    }
}
