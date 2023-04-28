import {StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

type TitleProps = {
    children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
};

const styles = StyleSheet.create({
    title: {
        // Layout
        paddingVertical: 16,
        width: '100%',

        // Font
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent.orange,
        textAlign: 'center',

        // Border
        borderWidth: 1,
        borderColor: Colors.accent.orange,
    }
});

export default Title;
