import {
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { AppTextStyle, Typography } from './Typography';
import { mockAccounts } from '../data';
import { COLORS } from '../theme/color';
import { formatNumber } from '../util/formatter';

export const MyAccounts = () => {
  const { width: screenWidth } = useWindowDimensions();
  const CARD_WIDTH = screenWidth - 60;

  return (
    <View style={styles.accountContainer}>
      <Typography
        textstyle={AppTextStyle.heading7}
        color={COLORS.Slate800}
        style={styles.headerText}
      >
        {'My Accounts'}
      </Typography>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 22}
        decelerationRate="fast"
        contentContainerStyle={styles.scrollContent}
      >
        {mockAccounts.map(account => (
          <LinearGradient
            key={account.id}
            colors={['#374151', '#1F2937']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={[styles.accountcard, { width: CARD_WIDTH }]}
          >
            <View style={styles.topRow}>
              <Typography
                textstyle={AppTextStyle.bodySmall}
                color={COLORS.White}
              >
                {`${
                  account.type.charAt(0).toUpperCase() + account.type.slice(1)
                } Account`}
              </Typography>
              {account.isDefault && (
                <View style={styles.defaultBadge}>
                  <Typography
                    textstyle={AppTextStyle.bodyTiny}
                    color={COLORS.White}
                  >
                    {'Default'}
                  </Typography>
                </View>
              )}
            </View>

            <Typography
              textstyle={AppTextStyle.bodyMedium}
              color={COLORS.White}
              style={{ marginTop: 8 }}
            >
              {account.accountNumber}
            </Typography>

            <View style={{ marginTop: 20 }}>
              <Typography
                textstyle={AppTextStyle.bodyTiny}
                color={COLORS.BalanceAmountColor}
              >
                {'Balance'}
              </Typography>

              <Typography
                textstyle={AppTextStyle.heading5}
                color={COLORS.White}
                style={{ marginTop: 4 }}
              >
                {`₦${formatNumber(account.balance)}`}
              </Typography>
            </View>
          </LinearGradient>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  accountContainer: {
    paddingVertical: 24,
  },
  headerText: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  scrollContent: {
    paddingHorizontal: 20,
    gap: 22,
  },
  accountcard: {
    borderRadius: 16,
    height: 160,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  defaultBadge: {
    backgroundColor: COLORS.Gray500,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 100,
  },
  CircleOverlay: {
    width: 96,
    height: 96,
    flexDirection: 'row',
    position: 'absolute',
  },
});
