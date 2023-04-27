import {Text, View} from "react-native";

type ButtonProps = {
    children: React.ReactNode;
}
const PrimaryButton = ({ children }: ButtonProps) => {
    return (
        <View>
            <Text>{ children }</Text>
        </View>
    )
};

export default PrimaryButton;
