import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { AppTextStyle, Typography } from './Typography';
import { COLORS } from '../theme/color';
import { formatNumber } from '../util/formatter';
import { Icons } from '../theme/icons';
import { mockTransactions } from '../data';

export const RecentTransactions = () => {
  const displayedTransactions = mockTransactions;

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Typography textstyle={AppTextStyle.heading7} color={COLORS.Slate800}>
          {'Recent Transactions'}
        </Typography>

        <TouchableOpacity activeOpacity={1} style={styles.seeAllButton}>
          <Typography
            textstyle={AppTextStyle.bodySmallBold}
            color={COLORS.Indigo500}
          >
            {'See All'}
          </Typography>
          <Icons.right />
        </TouchableOpacity>
      </View>

      <View style={styles.transactionCard}>
        {displayedTransactions.map(item => {
          const isCredit = item.type === 'credit';

          const statusConfig = {
            success: { bg: '#F0FDF4', text: COLORS.Green600 },
            pending: { bg: '#FFFBEB', text: '#D97706' },
            failed: { bg: '#FEF2F2', text: COLORS.Red600 },
          };

          const currentStatus =
            statusConfig[item.status] || statusConfig.success;

          return (
            <View key={item.id} style={styles.transactionRow}>
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: isCredit ? COLORS.Green50 : COLORS.Red50 },
                ]}
              >
                {isCredit ? <Icons.credit /> : <Icons.debit />}
              </View>

              <View style={styles.middleSection}>
                <Typography
                  textstyle={AppTextStyle.bodySmallBold}
                  color={COLORS.Slate800}
                >
                  {item.description}
                </Typography>

                <Typography
                  textstyle={AppTextStyle.bodyTiny}
                  color={COLORS.Gray400}
                  style={{ marginTop: 4 }}
                >
                  {item.date}
                </Typography>
              </View>

              <View style={styles.rightSection}>
                <Typography
                  textstyle={AppTextStyle.bodySmallBold}
                  color={isCredit ? COLORS.Green600 : COLORS.Slate800}
                >
                  {`${isCredit ? '+' : '-'}₦${formatNumber(item.amount)}`}
                </Typography>

                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: currentStatus.bg },
                  ]}
                >
                  <Typography
                    textstyle={AppTextStyle.bodyTiny}
                    color={currentStatus.text}
                  >
                    {item.status}
                  </Typography>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  transactionCard: {
    backgroundColor: COLORS.White,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.Gray100,
    padding: 16,
    gap: 12,
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingVertical: 6,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleSection: {
    flex: 1,
    marginLeft: 12,
  },
  rightSection: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  statusBadge: {
    marginTop: 4,
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 100,
    minWidth: 40,
    alignItems: 'center',
  },
});
