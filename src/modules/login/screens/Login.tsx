import { Text, TextInput, View } from 'react-native';

import Input from '../../../shared/components/input/input';
import { ContainerLogin } from '../styles/login_styles';

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Text>Teste</Text>
        <Input />
      </ContainerLogin>
    </View>
  );
};

export default Login;
