import {TextInput, View, StyleSheet} from "react-native";
import PrimaryButton from "../Button/PrimaryButton";

const StartGameScreen = () => {
    return (
        <View style={styles.startGameScreen}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                           maxLength={2}
                           keyboardType="number-pad"
                           autoCapitalize='none'
                           autoCorrect={false} />
            </View>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
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
        backgroundColor: '#72063c',

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
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,

        // Font
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
    }
});

export default StartGameScreen;
