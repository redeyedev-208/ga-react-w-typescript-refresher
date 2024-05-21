import CourseGoal from './components/CourseGoal.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>React & TSX Refresher</h1>
      </Header>
      <CourseGoal title='React + TS Refresher'>
        <p>Learning the cool stuff</p>
      </CourseGoal>
    </main>
  );
}
