import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@/theme';
import { SafeScreen, Button } from '@/components';
import { StopwatchProvider, useSettings, useStopwatch } from '@/hooks';
import Settings from './components/Settings/Settings';
import styleGenerator from './styles';

function Home() {
    const { isActive, count, minutes, seconds, toggle, restart } = useStopwatch();
    const { close: closeSettings } = useSettings();
    const { fonts } = useTheme();
    const styles = styleGenerator(useTheme());
    const { t } = useTranslation(['home']);

    return (
        <SafeScreen>
            <View style={styles.page}>

                <View style={styles.timerSection}>
                    <Text style={styles.timerText}>{minutes}</Text>
                    <Text style={styles.timerText}>:</Text>
                    <Text style={styles.timerText}>{seconds}</Text>
                </View>

                <View style={styles.controls}>
                    <Button onPress={() => { toggle(); closeSettings(); }}>
                        {isActive ? <Icon name="pause" size={32} color={fonts.gray800.color} /> : <Icon name="play-arrow" size={32} color={fonts.gray800.color} />}
                    </Button>

                    <Button onPress={() => { restart(); closeSettings(); }}>
                        <Icon name="refresh" size={32} color={fonts.gray800.color} />
                    </Button>
                </View>

                {count === 0 && <LottieView
                    loop
                    autoPlay
                    style={styles.animation}
                    source={require("../../assets/success-animation.json")}
                />}
                {count !== 0 && <Text style={styles.animationText}>
                    {t('home:animation')}
                </Text>}

                <Settings />
            </View>
        </SafeScreen>
    );
}

export default () => (
    <StopwatchProvider>
        <Home />
    </StopwatchProvider>
);
