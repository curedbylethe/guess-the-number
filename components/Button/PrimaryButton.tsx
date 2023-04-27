import {Pressable, StyleSheet, Text, View} from "react-native";

type ButtonProps = {
    children: React.ReactNode;
}
const PrimaryButton = ({ children }: ButtonProps) => {
    return (
        <View style={styles.buttonOutterContainer}>
            <Pressable
                style={({pressed}) => pressed
                    ? [styles.buttonInnerContainer, styles.pressed]
                    : styles.buttonInnerContainer}
                android_ripple={{ color: '#842735' }}>
                <Text style={styles.buttonText}>{ children }</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    buttonOutterContainer: {
        // Layout
            margin: 4,
            overflow: 'hidden',

        // Border
            borderRadius: 25,
    },
    buttonInnerContainer: {
        // Layout
            paddingVertical: 8,
            paddingHorizontal: 16,

        // Color
            backgroundColor: '#EB455F',

        // Shadow
            // Android
            elevation: 5,

            // iOS
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 6,
            shadowOpacity: 0.26,
    },
    buttonText: {
        // Font
            textAlign: 'center',
            color: 'white',
    },
    pressed: {
        // Color
            opacity: 0.75,
    }
});

export default PrimaryButton;
