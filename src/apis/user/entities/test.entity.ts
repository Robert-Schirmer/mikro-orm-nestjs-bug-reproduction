import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/postgresql';
import { BaseEntity } from '../../../shared/crud/base.entity';

@Entity()
export class User2 extends BaseEntity {
    @PrimaryKey()
    id: number;

    @Property()
    @Unique()
    email!: string;
}
