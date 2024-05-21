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
      {/* we are using basic semantics here which is always a great practice when not using third party libraries like MUI, Tailwind or whatever else the cool kids are using */}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
