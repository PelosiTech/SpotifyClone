import React from 'react';
import { View, Image, Text} from "react-native";
import styles from "./styles";

export type AlbumProps = {
    album:{
        id: string;
        imageUri: string;
        artistsHeadLine: string;
    }
}

const AlbumCategory = (props) => {
    return (
        <View style={styles.container}>
            {/* Title of category */}
            {/* List of Albums */}
        </View>
    );
};

export default AlbumCategory;