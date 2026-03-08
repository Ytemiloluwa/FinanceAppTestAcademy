import react from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Typography, AppTextStyle} from './Typography';
import { COLORS } from '../theme/color';
import { Icons } from '../theme/icons';

const ACTIONS = [
  { id: '1', label: 'Transfer', icon: <Icons.send/> },
  { id: '2', label: 'Airtime', icon: <Icons.device /> },
  { id: '3', label: 'Data', icon: <Icons.wifi /> },
  { id: '4', label: 'Bills', icon: <Icons.creditcard/> },
  { id: '5', label: 'Loans', icon: <Icons.building /> },
  { id: '6', label: 'Cards', icon: <Icons.creditcard /> },
  { id: '7', label: 'QR Pay', icon: <Icons.qrcode /> },
  
];

export const QuickActions = () => { 
    return (
        <View style = { styles.gridcontainer}>
            {ACTIONS.map((action) => (
               <TouchableOpacity key = {action.id} style = {styles.actionItem}>
                <View style={styles.iconContainer}>
                    {action.icon}
                </View>
                <Typography textstyle={AppTextStyle.bodySmall} color={COLORS.Slate800}>
                    {action.label}
                </Typography>
               </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({

gridcontainer: { 

    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 12,
    rowGap: 12,
    paddingHorizontal: 20,
    justifyContent: 'flex-start'
}, 

actionItem : {

    width: '22%', 
    backgroundColor: COLORS.White,
    borderRadius: 12, 
    paddingVertical: 30,
    alignItems: 'center', 
    justifyContent: 'center',
    //borderWidth: 1,
    borderColor: COLORS.Gray100,
    boxShadow: [
      {
        offsetX: 0,
        offsetY: 1,
        blurRadius: 3,
        color: '#0000001A',
      },
    ],
}, 

iconContainer: {

    marginBottom: 11
}

});