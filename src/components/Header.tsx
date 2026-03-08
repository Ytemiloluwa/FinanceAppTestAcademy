import { Icons } from '../theme/icons';
import { COLORS } from '../theme/color';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { CONSTANTS } from '../constants';
import { AppTextStyle, Typography } from './Typography';

export const Header = () => {
    return (
      <View style={styles.container}>
        <Icons.person />

        <View style={styles.textContainer}>
          <Typography
            textstyle={AppTextStyle.bodySmall}
            style={styles.welcomeText}
          >
            {'Welcome back,'}
          </Typography>
          <Typography textstyle={AppTextStyle.heading8} style={styles.nameText}>
            {'Kanma Chizea'}
          </Typography>
        </View>

        <View style={styles.actionContainer}><TouchableOpacity activeOpacity={0.7}>
            <Icons.search />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.notificationWrapper}>
            <Icons.notifications/>
          </TouchableOpacity>
        </View>

      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        marginLeft: 16,
    },
    welcomeText: {
      color: COLORS.White,  
      lineHeight: 16,
    },
    nameText: {
      color: COLORS.White, 
      paddingTop: 2,
    },
    actionContainer: {
        flexDirection: 'row',
    },
    notificationWrapper: {
        paddingLeft: 8,
    },
});