import { NextRequest, NextResponse } from "next/server";

const todos = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Build a Todo App", completed: false },
  { id: 3, title: "Write Unit Tests", completed: false },
  { id: 4, title: "Refactor Code", completed: false },
  { id: 5, title: "Deploy Application", completed: false },
];

// Get All Data
// export function GET() {
//   return NextResponse.json(todos);
// }

// Get single data
export function GET(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get("id") || "0");
  const todo = todos.find((todo) => todo.id === id);
  return NextResponse.json(todo);
}

export async function POST(request: NextRequest) {
  const { title, completed } = await request.json();
  try {
    if (!title || !completed) {
      return NextResponse.json("All Fields and mandatory", { status: 400 });
    }

    const id = todos.length + 1;
    const newTodo = { id, title, completed };
    todos.push(newTodo);

    return NextResponse.json(todos, { status: 201 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
