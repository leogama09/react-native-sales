import { TextInputProps } from 'react-native/types';

import { ContainerInput } from './input_style';

type InputProps = TextInputProps;

const input = ({ ...props }: InputProps) => {
  return <ContainerInput {...props} />;
};

export default input;
