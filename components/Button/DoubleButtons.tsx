import {View, StyleSheet} from "react-native";
import PrimaryButton from "./PrimaryButton";

type DoubleButtonsProps = {
    leftChildren: React.ReactNode;
    rightChildren: React.ReactNode;
    leftOnPress: (props : any) => void;
    rightOnPress: (props : any) => void;
}

const DoubleButtons = ({ leftChildren, rightChildren, leftOnPress, rightOnPress }: DoubleButtonsProps) => {
    return (
        <View style={styles.buttonsContainer}>
            <View style={styles.button}>
                <PrimaryButton
                    onPress={leftOnPress}
                >
                    {leftChildren}
                </PrimaryButton>
            </View>
            <View style={styles.button}>
                <PrimaryButton
                    onPress={rightOnPress}
                >
                    {rightChildren}
                </PrimaryButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        // Flexbox
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        // Flexbox
        flex: 1,
    }
});

export default DoubleButtons;
