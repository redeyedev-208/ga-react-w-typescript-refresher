import { type FC, type PropsWithChildren } from 'react';
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

// Note: it is good to know the options that we have and understand the patterns
// Note: this gives us more flexibility in how we work with Typescript in a project

// This is one way of typing that is used in creating components
// Caveat: We also have an alternative syntax to use
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{children}</p>
//         <button>Delete</button>
//       </div>
//     </article>
//   );
// };

// export default CourseGoal;

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
