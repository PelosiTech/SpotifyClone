import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AlbumComponent from '../components/Album'
import AlbumCategory from "../components/AlbumCategory";
import albumDetails from "../data/albumDetails";

const AlbumCategoryData = albumDetails;

const dataAlbum = {
  id: '1',
  imageUri: 'https://i.scdn.co/image/ab67616d0000b273e14f11f796cef9f9a82691a7',
  artistsHeadline: 'Taylor Swift, Cardi Objective C, Avicii'
}



export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <AlbumCategory title={AlbumCategoryData[0].title} albums={AlbumCategoryData[0].albums} />
      {/*<AlbumComponent album={dataAlbum} />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
