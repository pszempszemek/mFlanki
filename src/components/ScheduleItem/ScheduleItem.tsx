import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import SafeViewAndroid from '../../Utils/SafeViewAndroid';

interface ScheduleItemType {
  id: number;
  date: string;
  time: string;
  location: string;
  participants: number;
}

const ScheduleItem = ({ id, date, time, location, participants }: ScheduleItemType) => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.participants}>{participants}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ScheduleItem;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    //    backgroundColor: Colors.theme.primary,
    backgroundColor: 'red',
    height: '100%',
  },
  time: {},
  date: {},
  location: {},
  participants: {},
});
