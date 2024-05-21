import { type PropsWithChildren } from 'react';
// Creating our custom type for our props
// Not looking to extend this so we are ok for now with this custom type
// This is how we can outsource out type
// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// };

// This is another approach aside from the Generic type used in the type that follows
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode
// }

// Main takeaway is to know how to get at the children when needed
// This is a generic type that works with a specific props type
type CourseGoalProps = PropsWithChildren<{ title: string }>;

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
