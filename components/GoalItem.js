import React from 'react';
import {Text, View, StyleSheet, Pressable} from "react-native";

const GoalItem = (props) => {
    console.log(props.id)
    const deleteGoalHandler = () => {
        props.onDelete(props.id)
    }
    return (<Pressable onPress={deleteGoalHandler}><View style={styles.goalItem}><Text
            style={styles.goalTextItem}> {props.text}</Text></View></Pressable>);
};

const styles = StyleSheet.create({
    goalItem: {
        marginBottom: 18, padding: 10, backgroundColor: '#8CC0DE', borderRadius: 5,
    }, goalTextItem: {
        color: 'white'
    }
})

export default GoalItem;