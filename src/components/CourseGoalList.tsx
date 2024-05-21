import CourseGoal from './CourseGoal';
// using an alias is a great way to resolve name space collisions
import { type CourseGoal as CGoal } from '../App.tsx';

// when using Typescript this is super cool as we can export types
export type CourseGoalListProps = {
  // we make sure that this is type of an array
  goals: CGoal[];
};

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
