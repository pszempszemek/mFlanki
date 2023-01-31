import { StyleSheet } from 'react-native';
import HeroSection from '../components/HeroSection/HeroSection';
import ScheduleList from '../components/ScheduleList/ScheduleList';
import { View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <HeroSection />
      <ScheduleList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
