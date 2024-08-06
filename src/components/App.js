import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

import { CATEGORIES, TASKS } from '../data';

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Handle adding a new task
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // Handle deleting a task
  function handleDeleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  // Handle category change
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  // Filter tasks based on the selected category
  const filteredTasks = selectedCategory === 'All'
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange} 
      />
      <NewTaskForm 
        categories={CATEGORIES.slice(1)} // Exclude "All" from category options
        onTaskFormSubmit={handleAddTask} 
      />
      <TaskList 
        tasks={filteredTasks} 
        onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
}

export default App;
