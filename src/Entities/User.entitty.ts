import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { join } from "path";
import { Agency } from "./agency.entity";

export enum AgeBracket {
  _18_24 = "18_24",
  _25_34 = "25_34",
  _35_44 = "35_44",
  _45_54 = "45_54",
  _55_64 = "55_64",
  _OVER_65 = "over_65",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  contactNumber: number;

  @Column()
  address: string;

  @Column()
  postcode: string;

  @Column()
  benefit: boolean;

  @Column()
  consent: boolean;

  @Column()
  available: boolean;

  @Column()
  houseDemography: string;

  @Column()
  ethnicity: string;

  @Column({
    type: "enum",
    enum: AgeBracket,
    default: AgeBracket._18_24,
    nullable: false,
  })
  age: AgeBracket;

  @Column({ type: "text" })
  benefits: string;
  getRequired(): boolean {
    return this.benefit;
  }
  @Column({ type: "date" })
  timeOfCollection: Date;

  @ManyToOne(() => Agency, (agency) => agency.users, { cascade: true })
  agency: Agency;
}

