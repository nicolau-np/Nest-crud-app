import { Body, Controller, Post } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodoDto } from "./dtos/create-todo.dto";


@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) { }

    @Post()
    create(@Body() dto: CreateTodoDto) {
        return this.todosService.create(dto)
    }
}