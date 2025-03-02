import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ToastAndroid,
} from "react-native";
import { useTodo } from "@/context";
import { TodoItem } from "@/components";
import styles from "./styles";

type RenderTodoItemProps = {
  item: {
    id: string;
    text: string;
    completed: boolean;
  };
  index: number;
};

const HomeScreen: React.FC = () => {
  const { todos, addTodo, completedCount } = useTodo([]);
  const [taskText, setTaskText] = useState("");

  const handleAddTodo = () => {
    if (taskText.trim() === "") {
      ToastAndroid.show("Task name can't be empty", ToastAndroid.SHORT);
      return;
    }

    addTodo(taskText.trim());
    setTaskText("");
  };

  const renderTodoItem = ({ item, index }: RenderTodoItemProps) => (
    <TodoItem
      todo={item}
      isFirst={index === 0}
      isLast={index === todos.length - 1}
    />
  );

  const renderEmptyListMessage = () => {
    return (
      <Text style={styles.emptyMessageText}>You don't have anything todo!</Text>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ToDo List App</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task name"
          value={taskText}
          onChangeText={setTaskText}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {todos.length > 0 && (
        <Text style={styles.counterText}>Done: {completedCount}</Text>
      )}

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={renderTodoItem}
        ListEmptyComponent={renderEmptyListMessage}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
