import { DayEntity } from "src/day/entities/day.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('vocabulary')
export class VocabularyEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    word: string;
    @Column()
    meaning: string;
    @Column()
    pronunciation: string;
    @ManyToOne(() => DayEntity, vocabulary => vocabulary.vocabularies)
    day: DayEntity
}