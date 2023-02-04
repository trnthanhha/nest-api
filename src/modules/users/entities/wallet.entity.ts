import { EntityHelper } from 'src/utils/entity-helper';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Wallet extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'double precision', nullable: true })
  usds: number;
}
