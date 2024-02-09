import {StyleSheet, View} from 'react-native';
import Carousal from './src/Carousal';

const App = () => {
  return (
    <View style={styles.container}>
      <Carousal />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
