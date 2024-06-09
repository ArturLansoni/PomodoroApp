import { Pressable } from 'react-native';
import { useTheme } from '@/theme';
import { ButtonProps } from './types';

function Button({ children, onPress }: ButtonProps) {
	const { backgrounds } = useTheme();
	return <Pressable
		style={{
			...backgrounds.purple100,
			borderRadius: 12,
			height: 64,
			width: 64,
			justifyContent: 'center',
			alignItems: 'center',
		}}
		onPress={onPress}
	>
		{children}
	</Pressable>;
}

export default Button;
