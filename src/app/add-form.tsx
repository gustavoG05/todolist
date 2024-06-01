"use client";

import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { createTodo } from "./actions";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" aria-disabled={pending}>
      Add
    </button>
  );
}

export function AddForm() {
  const [state, formAction] = useFormState(createTodo, initialState);

  return (
    <form action={formAction} className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
      <label htmlFor="todo" className="block text-gray-400 mb-2">Enter Task</label>
      <input className="w-full p-2 mb-4 text-black rounded" type="text" id="todo" name="todo" required />
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
