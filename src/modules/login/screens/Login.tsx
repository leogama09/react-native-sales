import { Text, View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/input';
import { ContainerLogin } from '../styles/login_styles';
import { theme } from '../../../shared/themes/theme';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Text>Teste</Text>
        <Input />
        <Button 
          type={theme.buttons.buttonsTheme.secondary} 
          margin="16px" 
          title="ENTRAR" 
          onPress={handleOnPress} 
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
