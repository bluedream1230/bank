import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  ManyToOne
} from "typeorm";
import { User } from "./user.entity";
import { Currency } from "./currency.entity";

@Entity("bills")
@Unique(["accountBill"])
export class Bill {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, user => user.id, { nullable: false })
  user: number; // todo: change User

  @Column({ length: 26 })
  accountBill: string;

  @Column("double", { default: 0 })
  availableFunds: number;

  @ManyToOne(type => Currency, currency => currency.id, { nullable: false })
  currency: Currency;
}
