import { Entity } from 'typeorm';

@Entity({ name: 'todos' })
export class Todo {

    id: number;

    title: string;

}