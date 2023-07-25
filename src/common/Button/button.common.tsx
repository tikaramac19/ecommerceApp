import {Pressable, View, Text} from 'react-native';

import {styles} from './button.style';

interface ButtonProps {
  title: string;
  type?: 'default' | 'primary' | 'warning' | 'success' | 'danger';
  prepend?: React.ReactNode;
  onPress?: () => void;
}

export const CustomButton = ({
  title,
  type = 'default',
  onPress,
  prepend,
}: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles?.buttonContainer}>
        {prepend && (
          <View>
            <Text>{prepend}</Text>
          </View>
        )}
        <Text>{title}</Text>
      </View>
    </Pressable>
  );
};
