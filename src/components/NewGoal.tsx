import { type FormEvent, useRef } from 'react';

export default function NewGoal() {
  // initially these are undefined so we need to always set the ref to "null"
  // so we have no connection on a specific value but we will get the value eventually
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // listen here Typescript it will never be null "you must be certain though"
    // the app will crash if you are wrong on an assumption
    // with the HTMLInputELement we get all the availabl options by removing value and seeing the wonderful intellisense we are given
    const enteredGoal = goal.current!.value;
    const enteredSummary = goal.current!.value;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor=''>Your task</label>
        <input
          id='goal'
          type='text'
          ref={goal}
        />
        <label htmlFor='summary'>Task info</label>
        <input
          id='summary'
          type='text'
          ref={summary}
        />
      </p>
      <p>
        <button>Add task</button>
      </p>
    </form>
  );
}
