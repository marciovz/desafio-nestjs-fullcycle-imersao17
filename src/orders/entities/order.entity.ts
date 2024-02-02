import { Asset } from "src/assets/entities/asset.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

enum OrderStatus {
  OPEN = 'open', 
  PENDING = 'pending', 
  CLOSED = 'closed'
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  asset_id: string;
  
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
  
  @Column()
  status: OrderStatus = OrderStatus.PENDING;

  @CreateDateColumn()
  created_at: Date

  @OneToOne(type => Asset, { cascade: ['insert'], eager: true })
  @JoinColumn({ name: 'asset_id' })
  asset: Asset[];
}
