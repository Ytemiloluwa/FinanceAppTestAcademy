import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppTextStyle, Typography } from './Typography';
import { COLORS } from '../theme/color';
import { formatNumber } from '../util/formatter';
import { mockSpendingByCategory } from '../data';

export const SpendingByCategory = () => {
  const maxAmount = Math.max(...mockSpendingByCategory.map(item => item.amount));

  return (
    <View style={styles.sectionContainer}>
      
      <Typography textstyle={AppTextStyle.heading7} color={COLORS.Slate800} style={styles.title}>
        {'Spending by Category'}
      </Typography>
      
      <View style={styles.cardContainer}>
        {mockSpendingByCategory.map((item, index) => {
          
          const progressWidth = (item.amount / maxAmount) * 100;

          return (
            <View 
              key={item.id} 
              style={[
                styles.itemWrapper, 
                index !== mockSpendingByCategory.length - 1 && { marginBottom: 28 }
              ]}
            >
              <View style={styles.row}>
                <Typography textstyle={AppTextStyle.bodyMedium} color={COLORS.Slate800}>
                  {item.label}
                </Typography>
                <Typography textstyle={AppTextStyle.bodyMediumBold} color={COLORS.Slate800}>
                  {`₦${formatNumber(item.amount)}`}
                </Typography>
              </View>

              <View style={styles.progressTrack}>
                <View 
                  style={[
                    styles.progressFill, 
                    { width: `${progressWidth}%` }
                  ]} 
                />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 38, 
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 24, 
  },
  cardContainer: {
    backgroundColor: COLORS.White,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.Gray100,
    paddingVertical: 24,  
    paddingHorizontal: 20,
  },
  itemWrapper: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8, 
  },
  progressTrack: {
    height: 8,        
    backgroundColor: COLORS.Gray100,
    borderRadius: 4,     
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.Slate800,
    borderRadius: 4,
  },
});