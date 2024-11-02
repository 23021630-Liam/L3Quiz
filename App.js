import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Image, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

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
        <View>
            <ScrollView>
                <Text></Text>
                <InputBox label="User Name:" onChangeText={(text) => setName(text)} />
                <Text></Text>

                <Text>What animal is this?</Text>
                <Image source={require('./img/hummingbird.jpg')} style={{ width: 425, height: 400 }} />
                <RNPickerSelect
                    onValueChange={(value) => setQ1(value)}
                    items={[
                        { label: 'Hummingbird', value: 'Hummingbird' },
                        { label: 'Pigeon', value: 'Pigeon' },
                        { label: 'Kingfisher', value: 'Kingfisher' }
                    ]}
                />

                <Text></Text>
                <Text>What animal is this?</Text>
                <Image source={require('./img/penguin.jpg')} style={{ width: 425, height: 400 }} />
                <RNPickerSelect
                    onValueChange={(value) => setQ2(value)}
                    items={[
                        { label: 'Peacock', value: 'Peacock' },
                        { label: 'Squirrel', value: 'Squirrel' },
                        { label: 'Penguin', value: 'Penguin' }
                    ]}
                />

                <Text></Text>
                <Text>What animal is this?</Text>
                <Image source={require('./img/rabbit.jpg')} style={{ width: 425, height: 400 }} />
                <RNPickerSelect
                    onValueChange={(value) => setQ3(value)}
                    items={[
                        { label: 'Turtle', value: 'Turtle' },
                        { label: 'Rabbit', value: 'Rabbit' },
                        { label: 'Owl', value: 'Owl' }
                    ]}
                />

                <Button title="Submit Answers" color="green" onPress={handleSubmit} />
            </ScrollView>
        </View>
    );
};

export default QuizApp;


