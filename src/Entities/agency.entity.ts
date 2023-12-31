import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { User } from "./User.entitty";

@Entity({ name: "Agency" })
export class Agency {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: true })
    organisation: string;

    @Column({ default: false })
    email: string;

    @Column({ nullable: true })
    contact: boolean;

    @OneToMany(() => User, (user) => user.agency, { cascade: true })
    user: User[]

}





