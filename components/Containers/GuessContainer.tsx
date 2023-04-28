import {StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/colors";

type GuessContainerProps = {
    children: React.ReactNode;
}

const GuessContainer = ({ children }: GuessContainerProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // Flexbox
            alignItems: 'center',
            justifyContent: 'center',

        // Layout
            padding: 24,
            margin: 24,

        // Border
            borderWidth: 4,
            borderColor: Colors.accent.yellow,
            borderRadius: 8,
    },
    numberText: {
        // Font
            fontSize: 32,
            fontWeight: 'bold',
            color: Colors.accent.yellow,
    }
});

export default GuessContainer;
