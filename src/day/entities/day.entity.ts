import { VocabularyEntity } from "src/vocabulary/entities/vocabulary.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('day')
export class DayEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    day: string;
    @Column()
    isStudied: number;
    @OneToMany(() => VocabularyEntity, (vocabulary) => vocabulary.day)
    vocabularies: VocabularyEntity[]
}