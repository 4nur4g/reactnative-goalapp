import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const closeAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (goal) => {
    setGoals((prev) => [...prev, { goal, id: Math.random() }]);
    closeAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add Goal" color="#5e0acc" onPress={startAddGoalHandler} />
      {modalIsVisible && (
        <GoalInput
          onClose={closeAddGoalHandler}
          isVisible={modalIsVisible}
          onGoalAdd={addGoalHandler}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              onDelete={deleteGoalHandler}
              text={itemData.item.goal}
            />
          )}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 4,
  },
});
