import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Skip } from 'server/decorators/skip.decorator';
import { Todo } from 'server/entities/todo.entity';
import { AuthGuard } from 'server/providers/guards/auth.guard';
import { TodosService } from 'server/providers/services/todos.service';

// @Entity()
// export class Todo {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   content: string;

//   @Column()
//   isComplete: boolean;
// }

class TodoPostBody {
  content: string;
  isComplete: boolean;
}


@Controller()
@Skip(AuthGuard)
export class Question5Controller {
  constructor(private todosService: TodosService) {}

  @Get('/todos')
  public async index() {
    const todos = await this.todosService.findAll();
    return { todos };
  }

  //my endpoint to create new todo item
  @Post('/todos')
  public async create(@Body() body: TodoPostBody) {
    let todo = new Todo();
    todo.content = body.content;
    todo = await this.todosService.createTodo(todo);
    return { todo };
  }

  //my endpoint to update todo item
  @Put('/todos/:id')
  public async update(@Param('id') id: string) {
    const todo = await this.todosService.findTodoById(parseInt(id, 10))

    if(todo.isComplete == false) {
      todo.isComplete = true;
    }
    else {
      todo.isComplete = false;
    }

    return await this.todosService.updateTodo(todo);

  }
}
