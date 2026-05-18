import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PostStatus } from './enums/postStatus.enum';
import { Tag } from 'src/tags/tag.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  title!: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    unique: true,
  })
  slug!: string;

  @Column({
    type: 'enum',
    enum: PostStatus,
    default: PostStatus.DRAFT,
  })
  status!: PostStatus;

  @Column({
    type: 'text',
    nullable: false,
  })
  content!: string;

  @Column({
    type: 'varchar',
    length: 2048,
    nullable: true,
  })
  featuredImgUrl?: string;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  publishedOn?: Date;

  @Column({
    type: 'text',
    array: true,
    nullable: true,
  })
  tags?: Tag[];
}
