import React from 'react';
import {Text, View, StyleSheet} from "react-native";

const GoalItem = (props) => {
    return (
        <View style={styles.goalItem}><Text
            style={styles.goalTextItem}> {props.text}</Text></View>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        marginBottom: 18,
        padding: 10,
        backgroundColor: 'pink',
        borderRadius: 5,
    },
    goalTextItem: {
        color: 'white'
    }
})

export default GoalItem;