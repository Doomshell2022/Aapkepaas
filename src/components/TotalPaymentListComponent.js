import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

//Responsive Screen
import {
  widthPercentageToDP as wp,
  // heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Styles
import basicStyles from 'styles/BasicStyles';

const EarningList = props => {
  const {actualPayment, tds, amount, time, status} = props.item;

  return (
    <View style={styles.listContainer}>
      <View
        style={[
          basicStyles.directionRow,
          basicStyles.justifyBetween,
          styles.tileRow,
        ]}>
        <Text
          style={{
            fontSize: wp(3.6),
            fontWeight: '700',
            color: '#000',
          }}>
          Actual Payment
        </Text>
        <Text
          style={{
            fontSize: wp(3.6),
            fontWeight: '700',
            color: '#000',
          }}>
          ₹ {actualPayment}
        </Text>
      </View>
      <View
        style={[
          basicStyles.directionRow,
          basicStyles.justifyBetween,
          styles.tileRow,
        ]}>
        <Text style={{fontSize: wp(3.2), color: '#000'}}>TDS</Text>
        <Text style={{fontSize: wp(3.2), color: '#000'}}>₹ {tds}</Text>
      </View>

      <View
        style={[
          basicStyles.directionRow,
          basicStyles.justifyBetween,
          styles.tileRow,
        ]}>
        <Text style={{fontSize: wp(3.2), color: '#000'}}>Amount</Text>
        <Text style={{fontSize: wp(3.2), color: '#000'}}>₹ {amount}</Text>
      </View>

      <View
        style={[
          basicStyles.directionRow,
          basicStyles.justifyBetween,
          styles.tileRow,
        ]}>
        <Text style={{fontSize: wp(3.2), color: '#000'}}>Status</Text>
        <Text style={{fontSize: wp(3.2), color: '#000'}}>{status}</Text>
      </View>

      <View
        style={[
          basicStyles.directionRow,
          basicStyles.justifyBetween,
          styles.tileRow,
        ]}>
        <Text style={{fontSize: wp(3.2), color: '#000'}}>Time</Text>
        <Text style={{fontSize: wp(3.2), color: '#000'}}>{time}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#9edafd',
    padding: wp(2),
    borderRadius: 5,
  },
  tileRow: {
    paddingBottom: wp(1),
  },
});

export default EarningList;
