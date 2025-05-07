import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <SafeAreaView>
      <Text style={styles.Heading}>Welcome to Cliniqo!</Text>
      <Link href="/onboarding" style={{ textAlign: 'center', fontSize: 18, marginVertical: 20 }}>
        Go to Onboarding
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  }
});