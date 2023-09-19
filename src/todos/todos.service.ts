import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto } from './dtos/create-todo.dto';

@Injectable()
export class TodosService {
    constructor(
        @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
    ) { }

    async create(dto: CreateTodoDto) {
        const todo = this.todoRepository.create(dto);
        return await this.todoRepository.save(todo);
    }


}