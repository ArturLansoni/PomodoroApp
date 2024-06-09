import { useTranslation } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@/theme';
import { SettingsProvider } from '@/hooks';
import { Home, Actions } from '@/screens';
import type { RootStackParamList } from '@/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
	const { t } = useTranslation(['home']);
	const { variant, navigationTheme } = useTheme();

	return (
		<SafeAreaProvider>
			<SettingsProvider>
				<NavigationContainer theme={navigationTheme}>
					<Stack.Navigator key={variant} >
						<Stack.Screen name="Home" component={Home} options={{
							title: t('home:title'),
							headerRight: () => <Actions />,
						}} />
					</Stack.Navigator>
				</NavigationContainer>
			</SettingsProvider>
		</SafeAreaProvider>
	);
}

export default ApplicationNavigator;
