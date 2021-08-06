import React from 'react';
import {Button, Right, Text, Left, Header, Item} from 'native-base';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import CardComponent from '../../component/ListKost/CardComponent';
import {LineChart} from 'react-native-chart-kit';
import {List} from 'react-native-paper';
// import { Icon } from 'react-native-vector-icons/Icon';

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const DetailFinancialKost = props => {
  return (
    <View style={styles.container}>
      <Header style={styles.header} androidStatusBarColor="#66a5ad">
        <Text style={{color: '#ffffff', fontSize: 20, marginTop: 15}}>
          Laporan Keuangan Kost Mawar
        </Text>
      </Header>
      <LineChart
        data={{
          labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 50} // from react-native
        height={220}
        yAxisLabel={'Rp'}
        chartConfig={{
          backgroundColor: 'red',
          backgroundGradientFrom: 'red',
          backgroundGradientTo: 'red',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `white`,
          labelColor: (opacity = 1) => `white`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          marginLeft: 25,
          borderRadius: 16,
        }}
      />
      <View>
        <TouchableOpacity>
          <List.Item
            title="Generate PDF"
            description="Laporan Keuangan Kost Mawar bulan juni 2017"
            left={props => <List.Icon {...props} icon="archive" />}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <List.Item
            title="Generate PDF"
            description="Laporan Keuangan Kost Mawar bulan juni 2017"
            left={props => <List.Icon {...props} icon="archive" />}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <List.Item
            title="Generate PDF"
            description="Laporan Keuangan Kost Mawar bulan juni 2017"
            left={props => <List.Icon {...props} icon="archive" />}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DetailFinancialKost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#66a5ad',
  },
});
