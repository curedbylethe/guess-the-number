import {StyleSheet, Text} from "react-native";

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
        color: '#FF6D60',
        textAlign: 'center',

        // Border
        borderWidth: 1,
        borderColor: '#FF6D60',
    }
});

export default Title;
