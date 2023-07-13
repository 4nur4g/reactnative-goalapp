import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {

    const [enteredGoalText, setEnteredGoalText] = useState(null)
    const [goals, setGoals] = useState([])
    const goalInputHandler = (textInput) => {
        setEnteredGoalText(textInput)
    }
    const addGoalHandler = () => {
        setGoals((prev) =>
            [...prev, enteredGoalText]
        )
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={goalInputHandler} style={styles.textInput} placeholder="Your course goal"/>
                <Button onPress={addGoalHandler} title="Add Goal"/>
            </View>
            <View style={styles.goalsContainer}>
            <ScrollView >
                {
                    goals.map((item) => <View style={styles.goalItem} key={item}><Text
                        style={styles.goalTextItem}> {item}</Text></View>)
                }
            </ScrollView>
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
