import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FooterProps {
  timeLastUpdate: string
  color: string;

}

const Footer: React.FC<FooterProps> = ({timeLastUpdate, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>
        Thời gian cập nhật thông tin: {timeLastUpdate}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center'
  },
});

export default Footer;
