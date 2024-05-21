import { type PropsWithChildren } from 'react';

// Main takeaway is to know how to get at the children when needed
// This is a generic type that works with a specific props type
type CourseGoalProps = PropsWithChildren<{ title: string }>;

// This is anoter way of typing that is used in creating components
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
