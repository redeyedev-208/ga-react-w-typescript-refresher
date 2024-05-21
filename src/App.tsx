import Header from './components/Header.tsx';
import CourseGoalList from './components/CourseGoalList.tsx';
import goalsImg from './assets/goals.jpg';
import { useState } from 'react';

// so the more streamlined approach is to define this once and use it where needed
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Relearn the cool stuff',
        description: 'Learn it with confidence',
      };
      return [...prevGoals, newGoal];
    });
  }

  // we want to be able to delete stuff so we need to create a new function to handle this for us
  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Daily Task Reminder</h1>
      </Header>
      <button onClick={handleAddGoal}>Add New Task</button>
      <CourseGoalList
        goals={goals}
        onDeleteGoal={handleDeleteGoal}
      />
    </main>
  );
}
