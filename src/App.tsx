import Header from './components/Header.tsx';
import CourseGoalList from './components/CourseGoalList.tsx';
import goalsImg from './assets/goals.jpg';
import { useState } from 'react';

type CourseGoal = {
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

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Daily Task Reminder</h1>
      </Header>
      <button onClick={handleAddGoal}>Add New Task</button>
      <CourseGoalList goals={goals} />
    </main>
  );
}
