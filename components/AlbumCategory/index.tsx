import React from 'react';
import { View, Image, Text, FlatList} from "react-native";
import styles from "./styles";
import {Album} from "../../types";
import AlbumComponent from "../Album";

export type AlbumCategoryProps = {
    title: string;
    albums: Array<Album>;
}

const AlbumCategory = (props: AlbumCategoryProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
            <FlatList
                data={props.albums}
                renderItem={({item}) => <AlbumComponent album={item} />}
                keyExtractor={( item ) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            {/* Title of category */}
            {/* List of Albums */}
        </View>
    );
};

export default AlbumCategory;