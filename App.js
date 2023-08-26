import { StyleSheet, Text, View } from 'react-native';
import UserForm from './Component/UserForm';

export default function App() {
  return (
    <View style={styles.container}>
      <UserForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
