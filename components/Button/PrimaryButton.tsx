import {Pressable, StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/colors";

type ButtonProps = {
    children: React.ReactNode;
    onPress?: (props: any) => void;
}

const PrimaryButton = ({ children, onPress }: ButtonProps) => {
    return (
        <View style={styles.buttonOutterContainer}>
            <Pressable
                style={({pressed}) => pressed
                    ? [styles.buttonInnerContainer, styles.pressed]
                    : styles.buttonInnerContainer}
                android_ripple={{ color: Colors.primary["600"] }}
                onPress={onPress}
            >
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
            backgroundColor: Colors.primary["400"],

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
            fontSize: 18,
            textAlign: 'center',
            color: 'white',
    },
    pressed: {
        // Color
            opacity: 0.75,
    }
});

export default PrimaryButton;
