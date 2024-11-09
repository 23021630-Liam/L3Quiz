import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Image, Alert, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    parent: {
        flex:1,
        backgroundColor: 'whitesmoke',
        marginTop: 30,

        // alignItems: 'center',
        // textAlign: 'center',
        // textAlignVertical: 'center',
        // textAlignHorizontal: 'center',
        // justifyContent: 'center',
        // justifyContent: 'space-around',
    },
    child: {
        flex:1,
        // width: 80,
        // height: 80,
        textAlign: 'center',
        backgroundColor: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        fontStyle: 'italic',
        borderWidth: 3,
        borderStyle: 'dotted',
        borderCurve: "circular",
        borderColor: 'skyblue',
    },
});


const InputBox = ({ label, onChangeText }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{ borderWidth: 1 }} onChangeText={onChangeText} />
        </View>
    );
};

const QuizApp = () => {
    const [name, setName] = useState('');
    const [Q1, setQ1] = useState('');
    const [Q2, setQ2] = useState('');
    const [Q3, setQ3] = useState('');

    const correctAnswers = {
        Q1: "Hummingbird",
        Q2: "Penguin",
        Q3: "Rabbit"
    };

    const handleSubmit = () => {
        let score = 0;
        if (Q1 === correctAnswers.Q1) score++;
        if (Q2 === correctAnswers.Q2) score++;
        if (Q3 === correctAnswers.Q3) score++;

        Alert.alert("Quiz Result", `You got ${score} out of 3 correct!`);
    };

    return (
        <View style={[styles.parent]}>
        <View>
            <ScrollView>
                <Text></Text>
                <InputBox label="User Name:" onChangeText={(text) => setName(text)} />
                <Text></Text>

                <Text style={[styles.child, {color: 'lightblue'}]}>
                    What animal is this?</Text>
                <Image source={require('./img/hummingbird.jpg')} style={{ width: 425, height: 400 }} />
                <RNPickerSelect
                    onValueChange={(value) => setQ1(value)}
                    items={[
                        { label: 'Hummingbird', value: 'Hummingbird', color:"lightblue"},
                        { label: 'Pigeon', value: 'Pigeon', color:"red"},
                        { label: 'Kingfisher', value: 'Kingfisher', color:"brown"}
                    ]}
                />

                <Text></Text>
                <Text style={[styles.child, {color: 'magenta'}]}>
                    What animal is this?</Text>
                <Image source={require('./img/penguin.jpg')} style={{ width: 425, height: 400 }} />
                <RNPickerSelect
                    onValueChange={(value) => setQ2(value)}
                    items={[
                        { label: 'Peacock', value: 'Peacock', color:"orange" },
                        { label: 'Squirrel', value: 'Squirrel', color:"magenta" },
                        { label: 'Penguin', value: 'Penguin', color:"purple" }
                    ]}
                />

                <Text></Text>
                <Text style={[styles.child, {color: 'turquoise'}]}>
                    What animal is this?</Text>
                <Image source={require('./img/rabbit.jpg')} style={{ width: 425, height: 400 }} />
                <RNPickerSelect
                    onValueChange={(value) => setQ3(value)}
                    items={[
                        { label: 'Turtle', value: 'Turtle', color:"blue" },
                        { label: 'Rabbit', color:"turquoise", value: 'Rabbit' },
                        { label: 'Owl', value: 'Owl', color:"green" }
                    ]}
                />

                <Button title="Submit Answers" color="blue" onPress={handleSubmit} />
            </ScrollView>
        </View>
        </View>
    );
};

export default QuizApp;


