import { StyleSheet, FlatList, Text, View } from 'react-native';
import React from 'react';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import SafeViewAndroid from '../../Utils/SafeViewAndroid';

interface ScheduleItemType {
  id: number;
  date: string;
  time: string;
  location: string;
  participants: number;
}
interface ScheduleItemsType extends Array<ScheduleItemType> {}

const ScheduleList = () => {
  const temporaryData: ScheduleItemsType = [
    { id: 1, date: '31/01/2023', time: '18:00', location: 'HeliKptER', participants: 24 },
    { id: 2, date: '06/02/2023', time: '19:00', location: 'Park Chrobrego', participants: 13 },
    { id: 3, date: '16/02/2023', time: '20:00', location: 'HeliKptER', participants: 29 },
    { id: 4, date: '24/03/2023', time: '21:00', location: 'Fontanna', participants: 8 },
  ];
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={temporaryData}
          renderItem={({ item }) => (
            <ScheduleItem
              id={item.id}
              date={item.date}
              time={item.time}
              location={item.location}
              participants={item.participants}
            ></ScheduleItem>
          )}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default ScheduleList;

const styles = StyleSheet.create({
  container: { backgroundColor: 'red' },
  list: { backgroundColor: 'blue' },
});
