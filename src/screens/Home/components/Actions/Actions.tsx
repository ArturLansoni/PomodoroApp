import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSettings } from '@/hooks';
import { useTheme } from '@/theme';

function Actions() {
    const { layout, fonts, variant, gutters, changeTheme } = useTheme();
    const { toggle } = useSettings();

    const isDark = variant === 'dark';
    return (<View style={[layout.row]}>
        <Pressable onPress={toggle} style={[gutters.marginRight_12]}>
            <Icon name="settings" size={32} color={fonts.gray800.color} />
        </Pressable>
        <Pressable onPress={() => changeTheme(isDark ? 'default' : 'dark')} style={[gutters.marginRight_12]}>
            <Icon name={isDark ? 'light-mode' : 'dark-mode'} size={32} color={fonts.gray800.color} />
        </Pressable>
    </View >);
}

export default Actions;