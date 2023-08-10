import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Roles } from '../../enums/roles.enum'

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', length: 20 })
  firstName: string

  @Column({ type: 'varchar', length: 20 })
  lastName: string

  @Column({ type: 'enum', enum: Roles })
  role: Roles
}
