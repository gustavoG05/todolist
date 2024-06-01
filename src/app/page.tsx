import { sql } from '@vercel/postgres'
import { AddForm } from "./add-form";
import { DeleteForm } from "./delete-form";

export default async function Home() {
  let data = await sql`SELECT * FROM todos`; //guarda no cache
  const { rows: todos} = data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">To-do List</h1>
      <AddForm />
      <ul className="w-full max-w-md mt-8">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center bg-gray-800 p-4 mb-2 rounded-lg">
            <span>{todo.text}</span>
            <DeleteForm id={todo.id} todo={todo.text} />
          </li>
        ))}
      </ul>
    </main>
  );
}
 