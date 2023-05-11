import { Text, View, StyleSheet } from 'react-native';
import styled from "styled-components/native"

const TextNew = styled.Text`
    font-size: 24px;
    color: blue;
`

const App = () => {
  return (
    <View>
      <Text style={styles.container}>Testando</Text>
      <TextNew>Novo teste</TextNew>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        color: 'red'
    }
})

export default App;
