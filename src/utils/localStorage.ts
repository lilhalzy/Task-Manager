export function saveTasks(key: string, value: unknown) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }
  
  export function loadTasks(key: string) {
    try {
      const tasks = window.localStorage.getItem(key);
      return tasks ? JSON.parse(tasks) : null;
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return null;
    }
  }