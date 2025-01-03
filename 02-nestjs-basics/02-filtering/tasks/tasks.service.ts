import { Injectable } from "@nestjs/common";
import { Task, TaskStatus, SortableKeys } from './task.model';
import { getTasksByStatus, getPagination, getSorted } from './utils';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: "1",
      title: "Task 1",
      description: "First task",
      status: TaskStatus.PENDING,
    },
    {
      id: "2",
      title: "Task 2",
      description: "Second task",
      status: TaskStatus.IN_PROGRESS,
    },
    {
      id: "3",
      title: "Task 3",
      description: "Third task",
      status: TaskStatus.COMPLETED,
    },
    {
      id: "4",
      title: "Task 4",
      description: "Fourth task",
      status: TaskStatus.PENDING,
    },
    {
      id: "5",
      title: "Task 5",
      description: "Fifth task",
      status: TaskStatus.IN_PROGRESS,
    },
  ];

  getFilteredTasks(
    status?: TaskStatus,
    page?: number,
    limit?: number,
    sortBy?: SortableKeys,
  ): Task[] {
    const filteredTasks = getTasksByStatus(this.tasks, status);
    const paginatedTasks = getPagination(filteredTasks, page, limit);
    
    return getSorted(paginatedTasks, sortBy);
  }
}
