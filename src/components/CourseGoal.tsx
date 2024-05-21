import { type ReactNode } from 'react';
// Creating our custom type for our props
// Not looking to extend this so we are ok for now with this custom type
// This is how we can outsource out type
type CourseGoalProps = {
  title: string;
  children: ReactNode;
};

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
        <button>Delete</button>
      </div>
    </article>
  );
}
