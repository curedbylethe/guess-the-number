import {TextInput, View, StyleSheet} from "react-native";
import PrimaryButton from "../Button/PrimaryButton";
import {useState} from "react";
import Colors from "../../constants/colors";
import DoubleButtons from "../Button/DoubleButtons";

type StartGameScreenProps = {
    starter: (props: any) => void;
}

const StartGameScreen = ({ starter }: StartGameScreenProps) => {
    const [enteredValue, setEnteredValue] = useState<string>('');

    /* This function is called when the user types in the input field.
        * It validates the input to be numbers and sets the enteredValue state to the
        * input value.
     */
    const handleInput = (inputText: string) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const handleResetInput = () => { // This function is called when the user presses the "Reset" button.
        setEnteredValue('');
    };

    const handleStart = () => { // This function is called when the user presses the "Confirm" button.
        starter(enteredValue);
        handleResetInput();
    }

    return (
        <View style={styles.startGameScreen}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                           maxLength={2}
                           keyboardType="number-pad"
                           autoCapitalize='none'
                           autoCorrect={false}
                           onChangeText={handleInput}
                           value={enteredValue}
                           placeholder={"00"}
                           placeholderTextColor={Colors.accent.darkYellow}
                />
            </View>
            <DoubleButtons
                leftChildren={"Reset"}
                rightChildren={"Confirm"}
                leftOnPress={handleResetInput}
                rightOnPress={handleStart}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    startGameScreen: {
        // Layout
            marginTop: 80,
            marginHorizontal: 20,
            padding: 16,

        // Border
            borderWidth: 1,
            borderRadius: 8,

        // Color
            backgroundColor: Colors.primary["500"],

        // Shadow
            // iOS
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 6,
            shadowOpacity: 0.26,

            // Android
            elevation: 5,
    },
    inputContainer: { // The container that will center the input field
        // Flexbox
            justifyContent: 'space-between',
            alignItems: 'center',
    },
    input: {
        // Layout
            width: 50,
            height: 50,
            marginVertical: 8,

        // Border
            borderBottomColor: Colors.accent.yellow,
            borderBottomWidth: 2,

        // Font
            fontSize: 32,
            fontWeight: 'bold',
            color: Colors.accent.yellow,
            textAlign: 'center',
    },
});

export default StartGameScreen;
