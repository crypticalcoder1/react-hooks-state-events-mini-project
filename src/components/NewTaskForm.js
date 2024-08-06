import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState(categories[0] || '');

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({
      id: Date.now(), // Generates a unique id; consider using uuid in production
      text: taskText,
      category: taskCategory,
    });
    setTaskText('');
    setTaskCategory(categories[0] || '');
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          value={taskText} 
          onChange={(e) => setTaskText(e.target.value)} 
        />
      </label>
      <label>
        Category
        <select 
          value={taskCategory} 
          onChange={(e) => setTaskCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
