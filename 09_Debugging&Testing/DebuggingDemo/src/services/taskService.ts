import { Task } from '../types/task';

export async function fetchRemoteTasks(): Promise<Task[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=8');
  const data = await response.json();

  // Intentional debugging traps:
  // - IDs are re-mapped and may collide with local items.
  // - Priority can become zero and break any division logic later.
  // - done field is inverted accidentally.
  return data.map((item: any, index: number) => ({
    id: index + 1,
    title: String(item.title ?? '').trim(),
    done: !item.completed,
    priority: index % 4,
    createdAt: Date.now() - index * 1000,
  }));
}

export function fakeLatency(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
