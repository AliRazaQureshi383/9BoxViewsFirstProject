import React from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const DATA = [
  {
    id: 'a',
    title: 'Glasmark',
    name: ' 4 units ',
    image:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg',
    value: '19,854',
    value2: '2.35%',
    revenue: '8.256',
    revenue2: '5.45%',
    color: 'red',
    arrow:
      'https://upload.wikimedia.org/wikipedia/commons/b/b0/Down_red_arrow.png',
  },
  {
    id: 'b',
    title: 'Threemesh',
    name: '2 units ',
    image:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg',
    value: '4,5622',
    value2: '2.36%',
    revenue: '1,654',
    revenue2: '1.25%',
    color: 'red',
    arrow:
      'https://upload.wikimedia.org/wikipedia/commons/b/b0/Down_red_arrow.png',
  },
  {
    id: 'c',
    title: 'Carecalla',
    name: '1 units',
    image:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg',
    value: '6,655',
    value2: '6.52%',
    revenue: '7,552',
    revenue2: '1.25%',
    color: 'green',
    arrow:
      'https://upload.wikimedia.org/wikipedia/commons/3/36/Up_green_arrow.png',
  },
  {
    id: 'd',
    title: 'Youku Fans',
    name: '1 units ',
    image:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg',
    value: '9,544',
    value2: '10.58%',
    revenue: '2,854',
    revenue2: '5.58%',
    color: 'green',
    arrow:
      'https://upload.wikimedia.org/wikipedia/commons/3/36/Up_green_arrow.png',
  },
  {
    id: 'ali',
    title: 'Cardino',
    name: '3 units',
    image:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg',
    value: '3,564',
    value2: '6.02%',
    revenue: '6,645',
    revenue2: '6.58%',
    color: 'red',
    arrow:
      'https://upload.wikimedia.org/wikipedia/commons/b/b0/Down_red_arrow.png',
  },

  {
    id: 'f',
    title: 'Glasmark',
    name: ' 4 units ',
    image:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg',
    value: '19,854',
    value2: '2.35%',
    revenue: '8.256',
    revenue2: '5.45%',
    color: 'red',
    arrow:
      'https://upload.wikimedia.org/wikipedia/commons/b/b0/Down_red_arrow.png',
  },
  {
    id: 'g',
    title: 'Threemesh',
    name: '2 units ',
    image:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg',
    value: '4,5622',
    value2: '2.36%',
    revenue: '1,654',
    revenue2: '1.25%',
    color: 'red',
    arrow:
      'https://upload.wikimedia.org/wikipedia/commons/b/b0/Down_red_arrow.png',
  },
  {
    id: 'h',
    title: 'Carecalla',
    name: '1 units',
    image:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg',
    value: '6,655',
    value2: '6.52%',
    revenue: '7,552',
    revenue2: '1.25%',
    color: 'green',
    arrow:
      'https://upload.wikimedia.org/wikipedia/commons/3/36/Up_green_arrow.png',
  },
  {
    id: 'i',
    title: 'Youku Fans',
    name: '1 units ',
    image:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg',
    value: '9,544',
    value2: '10.58%',
    revenue: '2,854',
    revenue2: '5.58%',
    color: 'green',
    arrow:
      'https://upload.wikimedia.org/wikipedia/commons/3/36/Up_green_arrow.png',
  },
  {
    id: 'j',
    title: 'Cardino',
    name: '3 units',
    image:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg',
    value: '3,564',
    value2: '6.02%',
    revenue: '6,645',
    revenue2: '6.58%',
    color: 'red',
    arrow:
      'https://upload.wikimedia.org/wikipedia/commons/b/b0/Down_red_arrow.png',
  },
];

const Graphics = () => {
  return (
    <View>
      <View>
        <LineChart
          data={{
            labels: ['1D', '1W', '1M', '3M', '1Y', 'YTD', 'All'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
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
          width={Dimensions.get('window').width} // from react-native
          height={170}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: 'white',
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            scrollableInfoTextStyle: {
              fontSize: 300,
              color: '#C4C4C4',
              marginHorizontal: 2,
              flex: 1,
              textAlign: 'center',
            },

    
          
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
};

const Graphs = (props) => {
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          marginLeft: wp(5),
          fontSize: wp(5),
          fontWeight: 'bold',
          marginVertical: hp(1),
        }}>
        Portfolio
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: wp(5),
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>Assets Value</Text>
          <Text style={{fontSize: wp(4), fontWeight: 'bold'}}>$10,535.92</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Up_green_arrow.png',
              }}
              style={{height: wp(5), width: wp(5)}}></Image>
            <Text style={{color: 'green', fontWeight: '700', fontSize: wp(3)}}>
              
              $42.93(14.15%)
              <Text
                style={{color: 'black', fontWeight: '800', fontSize: wp(3)}}>Today </Text>
            </Text>
          </View>
        </View>
        <View>
          <Text style={{alignSelf: 'flex-end'}}>Revenue </Text>
          <Text
            style={{
              fontSize: wp(4),
              fontWeight: 'bold',
              alignSelf: 'flex-end',
            }}>
            $10,535.92 
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Up_green_arrow.png',
              }}
              style={{height: wp(5), width: wp(5)}}></Image>
            <Text
              style={{
                color: 'green',
                fontWeight: '700',
                alignSelf: 'flex-end',
                fontSize: wp(3),
              }}>
            
              $42.93(14.15%)
              <Text
                style={{color: 'black', fontWeight: '800', fontSize: wp(3)}}>
                Today 
              </Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={{marginHorizontal: wp(5), marginVertical: hp(1)}}>
        <Text>Price Chart</Text>
      </View>
      <Graphics />
      <View
        style={{
          marginHorizontal: wp(5),
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: hp(3)}}>POUs </Text>
        <TouchableOpacity onPress={()=> props.navigation.navigate('AllGraphs')}>
        <View
          style={{
            backgroundColor: 'grey',
            padding: wp(1),
            borderRadius: wp(5),
          }}>
            
          <Text
            style={{
              marginHorizontal: wp(2),
              color: 'black',
              fontWeight: 'bold',
            }}>
            Market ^ 
          </Text>
         
        </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginLeft: wp(45),
          marginVertical: wp(2),
        }}>
        <Text style={{fontWeight: 'bold'}}>Valuee</Text>
        <Text style={{marginLeft: wp(22), fontWeight: 'bold'}}>Revenue </Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: wp(5),
                marginVertical: hp(1),
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', width: wp(20)}}>
                <Image
                  source={{uri: item.image}}
                  style={{height: hp(5), width: hp(5), borderRadius: wp(10)}}
                />
                <View style={{marginLeft: wp(2)}}>
                  <Text style={{fontWeight: 'bold'}}>{item.title} </Text>
                  <Text>{item.name}</Text>
                </View>
              </View>
              <View style={{width: wp(15)}}>
                <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>
                  {item.value}{' '}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{uri: item.arrow}}
                    style={{height: wp(5), width: wp(5)}}></Image>
                  <Text style={{alignSelf: 'flex-end', color: item.color}}>
                    {item.value2}{' '}
                  </Text>
                </View>
              </View>
              <View style={{width: wp(15)}}>
                <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>
                  {item.revenue}{' '}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{uri: item.arrow}}
                    style={{height: wp(5), width: wp(5)}}></Image>
                  <Text style={{alignSelf: 'flex-end', color: item.color}}>
                    {item.revenue2}{' '}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              {item.id == 'ali' ? (
                <View>
                  <Text
                    style={{
                      fontSize: hp(4),
                      fontWeight: 'bold',
                      marginLeft: wp(5),
                      marginVertical: hp(2),
                    }}>
                    Watchlist{' '}
                  </Text>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Graphs;
