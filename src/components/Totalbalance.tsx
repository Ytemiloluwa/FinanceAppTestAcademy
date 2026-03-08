import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { AppTextStyle, Typography } from './Typography';
import { mockAccount } from '../data'
import { COLORS } from '../theme/color';
import { formatNumber } from '../util/formatter';
import { Icons } from '../theme/icons';

export const Balancecard = () => {

    return (
      <View style={styles.background}>
        <View style={styles.rowcontainer}> 
           <Typography textstyle={AppTextStyle.bodySmall} color = {COLORS.White}>{'Totalbalance'}</Typography> 
           <Icons.Eye/>
        </View>
        <Typography textstyle={AppTextStyle.heading3}color = {COLORS.White}>{`₦${formatNumber(mockAccount.balance)}`}</Typography> 
      </View>
    );
};
    
const styles = StyleSheet.create({ 
background: {
    backgroundColor: COLORS.GlassFill,
    borderRadius: 16,  
    padding: 20,
    gap:12, 
    borderWidth: 1,
    borderColor: COLORS.GlassBorder,
},

rowcontainer: { 

    flexDirection: 'row',
    justifyContent: 'space-between',

}, 

fill: {

    flex: 1
    
}
});