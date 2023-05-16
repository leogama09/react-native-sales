import { Text, View } from 'react-native';

import Input from '../../../shared/components/input/input';
import { ContainerLogin } from '../styles/login_styles';
import Button from '../../../shared/components/button/Button';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou')
  }
  return (
    <View>
      <ContainerLogin>
        <Text>Teste</Text>
        <Input />
        <Button margin="16px" title='ENTRAR' onPress={handleOnPress} />
      </ContainerLogin>
    </View>
  );
};

export default Login;
