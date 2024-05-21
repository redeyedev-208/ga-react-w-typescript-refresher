import { type FormEvent } from 'react';

type Props = {};

export default function NewGoal({}: Props) {
  // this is available due to the tsconfig.json file the "lib" setting which is pretty sweet
  // this makes Typescript know which base types should be available to us
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // let's prevent the browser default
    event.preventDefault();

    // this is built into the browser
    new FormData(event.currentTarget);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor=''>Your task</label>
        <input
          id='goal'
          type='text'
          name='goal'
        />
        <label htmlFor='summary'>Task info</label>
        <input
          id='summary'
          type='text'
        />
      </p>
      <p>
        <button>Add task</button>
      </p>
    </form>
  );
}
