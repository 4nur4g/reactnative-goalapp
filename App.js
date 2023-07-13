import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {


    const [goals, setGoals] = useState([])

    const addGoalHandler = (goal) => {
        setGoals((prev) =>
            [...prev, {goal, id: Math.random()}]
        )
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onGoalAdd = {addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList data={goals} keyExtractor={(item) => item.id}
                          renderItem={(itemData) => (<GoalItem text={itemData.item.goal}/>)}>
                </FlatList>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1
    },

    goalsContainer: {
        flex: 4
    }
});
