import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'server/entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll() {
    return this.todosRepository.find();
  }

  //my createTodo function
  createTodo(todo: Todo): Promise<Todo> {
    return this.todosRepository.save(todo);
  }

  //my updateTodo function
  updateTodo(todo: Todo) {
    return this.todosRepository.update(todo.id, todo);
  }

  //find todo by id?
  findTodoById(id: number) {
    return this.todosRepository.findOne(id);
  }
}
