import {ImageBackground, StyleSheet} from 'react-native';
import StartGameScreen from "./components/screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";

export default function App() {
  return (
      <LinearGradient colors={['#72063c', '#ddb52f']} style={styles.rootScreen}>
          <ImageBackground
              source={require('./assets/images/background.png')}
              style={styles.rootScreen}
              imageStyle={styles.backgroundImage}
              resizeMode="cover"
          >
              <StartGameScreen/>
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
