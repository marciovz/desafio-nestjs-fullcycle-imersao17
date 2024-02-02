import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, PrimaryColumn, CreateDateColumn, OneToOne, ManyToOne } from "typeorm";

@Entity()
export class Asset {
  @PrimaryColumn()
  id: string;

  @Column()
  symbol: string;

  @CreateDateColumn()
  created_at: Date
}
