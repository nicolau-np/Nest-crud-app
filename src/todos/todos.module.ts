import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { Todo } from './todo.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Todo])]
})
export class TodosModule{

}