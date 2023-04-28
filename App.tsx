import {Alert, ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartGameScreen from "./components/screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./components/screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
    const [userNumber, setUserNumber] = useState<number>(0);

    /* This function is passed to StartGameScreen.tsx as a prop
        * and is called when the user presses the "Confirm" button.
        * It validates the user input and sets the userNumber state
        * to the input value.
        * In the StartGameScreen.tsx component, the starter prop is
        * called when the user presses the "Confirm" button.
        * and it will reset the input field if the input is invalid.
     */
    const confirmUserInput = (input: string) => {
        const chosenNumber = parseInt(input);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{text: 'Okay', style: 'destructive'}],
            );
            return;
        }
        setUserNumber(chosenNumber);
    }
    const handleRestart = () => {
        setUserNumber(0);
    }
    return (
        <LinearGradient colors={[Colors.primary["500"], Colors.accent.yellow]} style={styles.rootScreen}>
            <ImageBackground
                source={require('./assets/images/background.png')}
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
                resizeMode="cover"
            >
                <SafeAreaView style={styles.rootScreen}>
                    {
                        userNumber
                        ? <GameScreen chosenNumber={userNumber} startOver={handleRestart}/>
                        : <StartGameScreen starter={confirmUserInput} />
                    }
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
  );
}

const styles = StyleSheet.create({
    rootScreen: {
      // Flexbox
        flex: 1,
    },
    backgroundImage: {
        // Color
            opacity: 0.2,
    }

});
