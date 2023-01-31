import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SafeViewAndroid from '../../Utils/SafeViewAndroid';
import Colors from '../../constants/Colors';

const HeroSection = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Nadchodzące Flanki:</Text>
      </View>
    </SafeAreaView>
  );
};

export default HeroSection;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    // backgroundColor: Colors.theme.primary,
    backgroundColor: 'skyblue',
    height: '10%',
  },
  header: {
    color: Colors.theme.font,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700',
  },
});
