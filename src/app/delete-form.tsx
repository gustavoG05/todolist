"use client";

import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { deleteTodo } from "@/app/actions";

const initialState = {
  message: "",
};

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="text-red-500 hover:text-red-700" aria-disabled={pending}>
      Delete
    </button>
  );
}

export function DeleteForm({ id, todo }: { id: number; todo: string }) {
  const [state, formAction] = useFormState(deleteTodo, initialState);

  return (
    <form action={formAction} className="flex items-center">
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="todo" value={todo} />
      <DeleteButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
