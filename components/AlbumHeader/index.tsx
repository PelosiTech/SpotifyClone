import React from 'react';
import {Text, View, Image, TouchableOpacity} from "react-native";
import {Album} from "../../types";
import styles from "./styles";

export type AlbumHeaderProps = {
    album: Album
}

const AlbumHeader = (props: AlbumHeaderProps) => {
    const {album} = props;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: album.imageUri }} />
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>
                    By {album.by}
                </Text>
                <Text style={styles.likes}>{album.numberOfLikes}</Text>
            </View>
            <TouchableOpacity >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Play</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default AlbumHeader;