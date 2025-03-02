import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useTodo } from "@/context/TodoContext";
import styles from "./styles";

type TodoItemProps = {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
  isFirst: boolean;
  isLast: boolean;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, isFirst, isLast }) => {
  const { toggleTodo, removeTodo, moveUp, moveDown } = useTodo([]);

  const handleDeleteTask = (todoId: string) => {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => removeTodo(todoId),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.moveButtons}>
        <TouchableOpacity
          style={[styles.moveButton, isFirst && styles.disabledButton]}
          onPress={() => !isFirst && moveUp(todo.id)}
          disabled={isFirst}
        >
          <Text
            style={[
              styles.moveButtonText,
              isFirst && styles.disabledButtonText,
            ]}
          >
            ▲ Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.moveButton, isLast && styles.disabledButton]}
          onPress={() => !isLast && moveDown(todo.id)}
          disabled={isLast}
        >
          <Text
            style={[styles.moveButtonText, isLast && styles.disabledButtonText]}
          >
            ▼ Down
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#FFF",
          padding: 16,
          borderWidth: 1,
          borderColor: "#2c3e50",
        }}
      >
        <View style={styles.todoContent}>
          <TouchableOpacity
            style={[styles.checkbox, todo.completed && styles.checkboxChecked]}
            onPress={() => toggleTodo(todo.id)}
          >
            {todo.completed && <Text style={styles.checkmark}>√</Text>}
          </TouchableOpacity>
          <Text
            style={[
              styles.todoText,
              todo.completed && styles.todoTextCompleted,
            ]}
          >
            {todo.text.length > 15
              ? todo.text.substring(0, 15) + "..."
              : todo.text}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteTask(todo.id)}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;
