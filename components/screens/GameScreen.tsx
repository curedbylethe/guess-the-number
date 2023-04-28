import {Alert, StyleSheet, View} from "react-native";
import Title from "../Headers/Title";
import {useEffect, useState} from "react";
import GuessContainer from "../Containers/GuessContainer";
import DoubleButtons from "../Button/DoubleButtons";
import PrimaryButton from "../Button/PrimaryButton";


let min = 1;
let max = 100;

const generateRandomBetween = () : number => {
    return Math.floor(Math.random() * (max - min)) + min;
};

type GameScreenProps = {
    chosenNumber: number;
    startOver: () => void;
}

let counter = 0;

const GameScreen = ({ chosenNumber, startOver }: GameScreenProps) => {
    const initialGuess = generateRandomBetween();
    const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

    useEffect(() => {
        if (currentGuess === chosenNumber) {
            Alert.alert(
                'Game Over',
                `You lost after ${counter} tries!`,
                [{text: 'OK', style: 'cancel', onPress: startOver}]
            );
            min = 1;
            max = 100;
            counter = 1;
        }
    }, [currentGuess, chosenNumber, startOver]);

    const nextGuessHandler = (direction: 'lower' | 'higher') : void => {
        if ((direction === 'lower' && currentGuess < chosenNumber) || (direction === 'higher' && currentGuess > chosenNumber)) {
            Alert.alert(
                'Don\'t lie!',
                'You know that this is wrong...',
                [{text: 'Sorry!', style: 'cancel'}]
            );
            return;
        }
        if (direction === 'lower') {
            max = currentGuess;
        } else {
            min = currentGuess + 1;
        }
        counter++;
        const nextGuess = generateRandomBetween();
        setCurrentGuess(nextGuess);
    };

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <GuessContainer>{currentGuess}</GuessContainer>
            <View>
                <Title>Higher or Lower?</Title>
                <DoubleButtons
                    leftChildren={"−"}
                    rightChildren={"＋"}
                    leftOnPress={nextGuessHandler.bind(this, 'lower')}
                    rightOnPress={nextGuessHandler.bind(this, 'higher')}
                />
            </View>
        <PrimaryButton onPress={startOver}>Start Over</PrimaryButton>
        </View>
);
};

const styles = StyleSheet.create({
    screen: {
        // Flexbox
            justifyContent: 'center',

        // Layout
            padding: 24,
    },
});

export default GameScreen;
