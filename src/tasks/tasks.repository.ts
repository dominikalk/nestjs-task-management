import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-tast.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';

export class TasksRepository extends Repository<Task> {
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.save(task);
    return task;
  }
}
