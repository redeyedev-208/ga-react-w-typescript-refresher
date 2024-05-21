import CourseGoal from './components/CourseGoal.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';
import { useState } from 'react';

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  // Note: you can also use the generic type with state but being a bit verbose might be a more practical approach
  // Note: this is ultimately up to you as the developer or if a pattern is established across a code base
  // Note: however if there are deprecated approaches that must need refactoring avoid using generics unless there is no other option
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals(goals);
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>React & TSX Refresher</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoal title='React + TS Refresher'>
        <p>Learning the cool stuff</p>
      </CourseGoal>
    </main>
  );
}
