import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

const CustomMarker = () => (
  <View
    style={{
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: "#007bff",
      borderColor: "#eee",
      borderRadius: 5,
      elevation: 10
    }}
  >
    <Text style={{ color: "#fff" }}>SF</Text>
  </View>
);

const RESTAURANTS = [
  {
    key: 'Cafe Sydney',
    title: 'Cafe Sydney',
    description: 'Customs House, 31 Alfred St, Sydney NSW 2000',
    latLong: {
      latitude: -33.861924,
      longitude: 151.210891,
    },
  },
  {
    key: 'Four Frogs Creperie',
    title: 'Four Frogs Creperie',
    description: '1 Macquarie Pl, Sydney NSW 2000',
    latLong: {
      latitude: -33.861755,
      longitude: 151.209941,
    },
  },
  {
    key: 'Tapavino',
    title: 'Tapavino',
    description: '6 Bulletin Pl, Sydney NSW 2000',
    latLong: {
      latitude: -33.862512,
      longitude: 151.209490,
    },
  },
];

export default App = () => {
  const [region, setRegion] = React.useState({
    latitude: -33.861924,
    longitude: 151.210891,
    latitudeDelta: 0.0043, // hardcode zoom levels just for example
    longitudeDelta: 0.0034,
  });

  const [markers, setMarkers] = React.useState(RESTAURANTS)

  const _map = React.useRef(null);

  React.useEffect(() => {
    if (_map.current) {
      _map.current.animateCamera(
        {
          center: {
            latitude: 50.1109221,
            longitude: 8.6821267
          },
          zoom: 15
        },
        5000
      );
    }
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={_map}
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={region => setRegion(region)}
        showsUserLocation={true}
        followsUserLocation={true}
        onPress={(event) => (setMarkers([...markers, { latLong: event.nativeEvent.coordinate }]))}
      >
        {
          markers.map((marker, i) => (
            <Marker key={i} coordinate={marker.latLong} />
          ))
        }
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});