import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { Todo } from './todo.entity';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { Category } from './category.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Todo, Category])],
    controllers:[TodosController],
    providers:[TodosService],
})
export class TodosModule{

}