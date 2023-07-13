import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {

    const [enteredGoalText, setEnteredGoalText] = useState(null)
    const [goals, setGoals] = useState([])
    const goalInputHandler = (textInput) => {
        setEnteredGoalText(textInput)
    }
    const addGoalHandler = () => {
        setGoals((prev) =>
            [...prev, {enteredGoalText,id:Math.random()}]
        )
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={goalInputHandler} style={styles.textInput} placeholder="Your course goal"/>
                <Button onPress={addGoalHandler} title="Add Goal"/>
            </View>
            <View style={styles.goalsContainer}>
                <FlatList data={goals} keyExtractor={(item)=> item.id } renderItem={(itemData) => (<View style={styles.goalItem}><Text
                    style={styles.goalTextItem}> {itemData.item.enteredGoalText}</Text></View>)}>
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
    inputContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flex: 1
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    goalsContainer: {
        flex: 4
    },
    goalItem: {
        marginBottom: 18,
        padding: 10,
        backgroundColor: 'pink',
        borderRadius: 5,
    },
    goalTextItem: {
        color: 'white'
    }
});
