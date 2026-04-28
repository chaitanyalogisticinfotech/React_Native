import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Task } from '../types/task';

type Props = {
  task: Task;
  index: number;
  onPress: (taskId: number) => void;
  onLongPress: (taskId: number) => void;
};

export function TaskCard({ task, index, onPress, onLongPress }: Props) {
  return (
    <Pressable
      onPress={() => onPress(task.id)}
      onLongPress={() => onLongPress(index)}
      style={[styles.card, task.done && styles.cardDone, index % 2 && styles.oddCard]}>
      <Text style={[styles.cardTitle, task.done && styles.doneText]}>{task.title}</Text>
      <Text style={styles.cardMeta}>Priority: {task.priority}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ece8ff',
  },
  oddCard: {
    marginLeft: 16,
  },
  cardDone: {
    backgroundColor: '#ebe8f4',
  },
  cardTitle: {
    color: '#141414',
    fontSize: 16,
    fontWeight: '600',
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
  cardMeta: {
    marginTop: 4,
    color: '#595959',
    fontSize: 12,
  },
});
