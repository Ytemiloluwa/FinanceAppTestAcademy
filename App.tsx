/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/theme/color';
import { Header } from './src/components/Header';
import { Balancecard } from './src/components/Totalbalance';
import { QuickActions } from './src/components/QuickActions';
import { MyAccounts } from './src/components/MyAccounts';
import { RecentTransactions } from './src/components/Transactions';
import { SpendingByCategory } from './src/components/spendingbyCategory';

function AppContent() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content"/>

      <ScrollView showsVerticalScrollIndicator={false}> 

        <View style={styles.backgroundColor}>
          <Header />
          <Balancecard/>
        </View>

        <View style={styles.overlapWrapper}>
          <QuickActions/>
        </View>

        <MyAccounts/>

        <RecentTransactions/>

        <SpendingByCategory/>
        
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  backgroundColor: {
    backgroundColor: COLORS.Slate800,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    gap: 32,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 96, 
  },
  overlapWrapper: {
    marginTop: -48, 
    width: '100%',
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}