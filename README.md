# Spotify Clone React Native
## Show Album Categories, Albums, Songs
*By Carlo Pelosi 

**Rebuilt API with GraphQL instead of using SpotifyAPI to have full access to use my songs and song names**

**Table of Contents**
* [Spotify App Overview](#Spotify-App-overview)
* [Demonstrations](#demonstrations)
* [App Description](#app-description)
* [Technologies](#technologies)


# Spotify-App overview
The application is built off a handmade API backend using GraphQL, AWS AppSync, and AWS Amplify, while the front end is maintained by React Native with Expo, TypeScript and React Navigation v5. Spotify-App is a basic application that can show Albums/Songs and play them. You can choose any albums and select any song to place. The backend will automatically pull the data with graphQL.

# Demonstrations

## Home Up Page: 
<img height="300" width="141" src="https://i.gyazo.com/97822b098ad9fc0cb1c432cdb6596ae7.png">

## Album Page:
<img height="300" width="141" src="https://i.gyazo.com/082d8f70ec7339a51a6afd5d82d692d3.png">

## Album Page Songs:
<img height="300" width="141" src="https://i.gyazo.com/5f9af8b8e277005fe3cb0cadb7bd5bbc.png">

## BottomTabNavigation & SongPlayerWidget:
<img height="150" width="225" src="https://i.gyazo.com/4f35c80ced7e68a031233976596c3502.png">

## Different Playlists/Podcasts/Shows:
<img height="300" width="141" src="https://i.gyazo.com/417b56b855313c9c57471af9652951d5.png">

# App Description
-   React Native application utilizing TypeScript & Context and a handmade custom graphQL API backend.  
-   Using expo-av Audio/Sound permissions to play songs while the app is open.  
-   Using context to keep state of current song playing.
-   Using bottomTabNavigator with React Navigation v5  

# Define Database Functionality
1.  GraphQL API using AppSync & AWS Amplify

# Tools
-   VS Code
-   GitHub
-   GraphQL API

# Technologies
-   Frontend UI engine: React Native / TypeScript / Context
-   Backend server: GraphQL / AppSync / AWS Amplify
-   RDBMS/ORM: DynamoDB
 

# Database Structure

## Tables

* AlbumCategory
    * id - ID
    * Title - String
    * Albums - @connection

* Album
    * id - ID
    * Name - String
    * By - String
    * numberOfLikes - String
    * imageUri - String
    * artistsHeadline - String
    * Songs - @connection
    
* Song
    * id - ID
    * imageUri - String
    * Uri - String
    * Title - String
    * Artist - String