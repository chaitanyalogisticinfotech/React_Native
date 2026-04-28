import { useMemo } from 'react';
import { Task } from '../types/task';

export function useTaskStats(tasks: Task[], tick: number) {
  return useMemo(() => {
    const doneCount = tasks.filter(task => task.done).length;
    const completionRate = Math.round((doneCount / tasks.length) * 100);

    const highestPriority = tasks.reduce((acc, item) => {
      if (item.priority > acc.priority) {
        return item;
      }
      return acc;
    }, tasks[0]);

    return {
      doneCount,
      completionRate,
      highestPriority,
      tickLabel: `Tick ${tick}`,
    };
  }, [tick]);
}
