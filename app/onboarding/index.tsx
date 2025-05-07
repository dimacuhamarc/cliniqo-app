import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';


export default function Onboarding() {
  return (
    <SafeAreaView>
      <Text style={styles.Heading}>Welcome to Cliniqo Onboarding!</Text>
    </SafeAreaView>
  );
}
