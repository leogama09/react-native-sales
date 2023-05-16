import React from 'react'
import { ButtonContainer } from './button_style'
import { Text, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
}

const Button = ({title, margin, ...props} : ButtonProps) => {
  return (
    <ButtonContainer margin={margin} {...props}>
        <Text>{title}</Text>
    </ButtonContainer>
  )
}

export default Button