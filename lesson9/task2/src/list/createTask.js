import { renderTasks } from './renderer';
import { setItem } from './storage';
import { createTasks, getTasksList } from './tasksGateway';

export const onCreateTask = () => {
  const taskTitleInputElement = document.querySelector('.task-input');
  const text = taskTitleInputElement.value.trim();
  if (!text) {
    return;
  }
  taskTitleInputElement.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };
  createTasks(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
