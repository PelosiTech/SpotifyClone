import  React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native'
import { useRoute } from '@react-navigation/native';
import SongListItem from "../components/SongListItem";
import AlbumHeader from "../components/AlbumHeader";
import albumDetails from "../data/albumDetails";

const data = {
    id: '11',
    name: 'Good Vibes',
    by: 'Spotify',
    numberOfLikes: 38,
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii',
    songs: [
        {
        id: '1',
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'High on you',
        artist: 'Carlo',
        },
        {
            id: '2',
            imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
            title: 'High on you',
            artist: 'Carlo',
        },
        {
            id: '3',
            imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
            title: 'High on you',
            artist: 'Carlo',
        },
        {
            id: '4',
            imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
            title: 'High on you',
            artist: 'Carlo',
        },
        {
            id: '5',
            imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
            title: 'High on you',
            artist: 'Carlo',
        },
        {
            id: '6',
            imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
            title: 'High on you',
            artist: 'Carlo',
        },
        {
            id: '7',
            imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
            title: 'High on you',
            artist: 'Carlo',
        },
        {
            id: '8',
            imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
            title: 'High on you',
            artist: 'Carlo',
        },
        {
            id: '9',
            imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
            title: 'High on you',
            artist: 'Carlo',
        },        {
            id: '10',
            imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
            title: 'High on you',
            artist: 'Carlo',
        }
    ]
}

const AlbumScreen = () => {
    const route = useRoute();

    useEffect(() => {
        console.log(route)
    }, [])

    return (
        <View>
            <FlatList
                data={data.songs}
                renderItem={({item}) => <SongListItem song={item} /> }
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <AlbumHeader album={data} />}
            />
        </View>
    )
}

export default AlbumScreen;