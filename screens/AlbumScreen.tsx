import  React, {useEffect} from 'react';
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native';
import SongListItem from "../components/SongListItem";

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
            imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
            title: 'High on you',
            artist: 'Carlo',
        },
        {
            id: '3',
            imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
            title: 'High on you',
            artist: 'Carlo',
        },
        {
            id: '4',
            imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
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
            imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
            title: 'High on you',
            artist: 'Carlo',
        },
        {
            id: '7',
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

    return <View>
        <Text style={{color: 'white'}}>
            Album Screen
            <SongListItem song={data.songs[0]}/>
        </Text>
    </View>
}

export default AlbumScreen;