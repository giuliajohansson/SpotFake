import React from "react";
import { Text, View, StyleSheet, Image, FlatList, Pressable, ScrollView } from "react-native";
import { Link } from "@react-navigation/native";

const playlists = [
  { id: 0.1, title: "1990", imageUrl: "https://i.pinimg.com/736x/d7/4b/5b/d74b5be6457c9ccd01eaf616d5a3e4ed.jpg" },
  { id: 0.2, title: "00s", imageUrl: "https://i.pinimg.com/236x/5e/5d/3d/5e5d3d29bcdf98d8fe858b744e4c1a4e.jpg" },
  { id: 0.3, title: "(๑°o°๑) 🍏", imageUrl: "https://i.pinimg.com/736x/fa/0e/c4/fa0ec4b451f228118016c641985cb7af.jpg" },
  { id: 0.4, title: "raspberry", imageUrl: "https://i.pinimg.com/736x/ff/a5/29/ffa529895226d4ea5838e762f048a605.jpg" },
  { id: 0.5, title: "petals'", imageUrl: "https://i.pinimg.com/736x/eb/6b/d1/eb6bd18b9c9d24ae6102e15b70173175.jpg" },
];

const Artistas = [
  { id: 1.1, title: "Red Velvet", imageUrl: "https://i.scdn.co/image/ab67616d00001e027344014579bc17a2c4730ece" },
  { id: 1.2, title: "Aespa", imageUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da841cfa9df2a887e865cef7798a" },
  { id: 1.3, title: "Loossemble", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5afa968e8ed9ca1b46f8cf7f" },
  { id: 1.4, title: "LOOΠΔ", imageUrl: "https://i.scdn.co/image/ab67616d0000b273f48bd32f28f45719017a5afb" },
  { id: 1.5, title: "Yves", imageUrl: "https://i.scdn.co/image/ab67616d0000b273e314d509ed6c58acb7b65561" },
  { id: 1.6, title: "Chuu", imageUrl: "https://i.scdn.co/image/ab6761610000e5ebf340bfbdf8d7c4197d9d66af" },
  { id: 1.7, title: "Nayeon", imageUrl: "https://i.scdn.co/image/ab6761610000e5ebfbdd3f060e1cbe9e8eeaecac" },
  { id: 1.8, title: "KISS OF LIFE", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb33a8ccf7ddd38cea1a0eac0d" },
  { id: 1.9, title: "ARTMS", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0576f9b8cd1e8c68afe0e3e6" },
  { id: 1.11, title: "ILLIT", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5884b5e3bdc71d42b62bfcfd" },
];

const Álbuns = [
  { id: 2.1, title: "Dream Wish", imageUrl: "https://i.scdn.co/image/ab67616d0000b273b20ecefaf07997a7aaf737e4" },
  { id: 2.2, title: "SUPERNOVA", imageUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da847876a1f9f38f997a9e3929e0" },
  { id: 2.3, title: "Pit-a-Pat", imageUrl: "https://i.scdn.co/image/ab67616d0000b2734119e198ca7e3bbc2a7b5685" },
  { id: 2.4, title: "nrv", imageUrl: "https://i.scdn.co/image/ab67616d0000b273d6662b1f215bfc71356432e5" },
  { id: 2.5, title: "I", imageUrl: "https://i.scdn.co/image/ab67616d0000b27358afcbf545a0c569d6164af2" },
  { id: 2.6, title: "NEMONEMO", imageUrl: "https://i.scdn.co/image/ab67616d0000b27376bc371b60413094c51f41ae" },
  { id: 2.7, title: "Prequel", imageUrl: "https://i.scdn.co/image/ab67616d0000b27333819882ed1e3d4197cae860" },
  { id: 2.8, title: "Like Psycho", imageUrl: "https://i.scdn.co/image/ab67616d0000b2738ea8949cb55fca8eb915ec48" },
  { id: 2.9, title: "Very Berry", imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/17/38/f5/1738f5ba-e589-eb6f-7681-9d7ccebeaabc/8809764915412.jpg/1200x1200bf-60.jpg" },
  { id: 2.11, title: "Flip That", imageUrl: "https://i.scdn.co/image/ab67616d0000b2735fe0013ebb4022adc0f042be" },
];

const Músicas = [
  { id: 3.1, title: "love4eva", imageUrl: "https://i.scdn.co/image/ab67616d0000b27319f29ba212fa38eb88cf3643" },
  { id: 3.2, title: "Russian Roulette", imageUrl: "https://i.scdn.co/image/ab67616d0000b2733f30a062dafcdbc1a8fad842" },
  { id: 3.3, title: "Forever", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerymDVMN5E_gpg6InM0G-ZZJWAlRuvnN7vQ&s" },
  { id: 3.4, title: "LOOP", imageUrl: "https://i.scdn.co/image/ab67616d0000b273b278c6fdc2dd765edc654ff1" },
  { id: 3.5, title: "ABCD", imageUrl: "https://i.scdn.co/image/ab67616d0000b2735c202994e981619ccf69784e" },
  { id: 3.6, title: "FavOriTe", imageUrl: "https://akamai.sscdn.co/uploadfile/letras/fotos/1/4/0/b/140bfcca76325e621e62fa6156d96796.jpg" },
  { id: 3.7, title: "Midas Touch", imageUrl: "https://acdn.mitiendanube.com/stores/003/868/591/products/ab67616d0000b27307568782625b85282541394b-9dcc87355864eec6e017244474018874-640-0.jpg" },
  { id: 3.8, title: "Hi High", imageUrl: "https://akamai.sscdn.co/uploadfile/letras/albuns/0/a/5/a/1168911634142043.jpg" },
  { id: 3.9, title: "Howl", imageUrl: "https://i.scdn.co/image/ab67616d0000b27373ac78b51d85f57bb40f8251" },
  { id: 3.11, title: "Girls' Night", imageUrl: "https://akamai.sscdn.co/uploadfile/letras/albuns/1/e/3/7/2191041713289627.jpg" },
];

const TelaHome = () => {
  const renderPlaylist = (data, isArtist = false) => (
    <FlatList
      data={data}
      horizontal
      contentContainerStyle={{ alignItems: "flex-start" }}
      renderItem={({ item }) => (
        <Pressable style={styles.itemCard}>
          <Image
            style={[styles.itemImage, isArtist && styles.artistImage]}
            source={{ uri: item.imageUrl }}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>{item.title}</Text>
        </Pressable>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Bem-vindo ao Spotfake (ㅅ´ ˘ `)♡</Text>
        <Link to="/telaPerfil" style={styles.profileLink}>
          <Text style={styles.profileText}>Meu Perfil</Text>
          <Image source={require('../../assets/images/userIcon.png')} style={styles.profileImage} />
        </Link>
      </View>

      <Text style={styles.sectionTitle}>Músicas</Text>
      {renderPlaylist(Músicas)}

      <Text style={styles.sectionTitle}>Artistas</Text>
      {renderPlaylist(Artistas, true)}

      <Text style={styles.sectionTitle}>Álbuns</Text>
      {renderPlaylist(Álbuns)}

      <Text style={styles.sectionTitle}>Playlists</Text>
      {renderPlaylist(playlists)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fae0e4",
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FBB1BD",
    width: 400,
    textAlign: 'center'
  },
  profileLink: {
    backgroundColor: "#FBB1BD",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: 150,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  profileText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "regular",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FBB1BD",
    marginBottom: 10,
  },
  itemCard: {
    marginRight: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    width: 120,
  },
  itemImage: {
    width: "90%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 5,
  },
  artistImage: {
    borderRadius: 60,
  },
  itemText: {
    color: "#ff85a1",
    marginTop: 5,
    textAlign: "center",
    marginBottom: 10,
  },
  logo: {
    width: 70,
    height: 70,
  },
  profileImage: {
    width: 20,
    height: 20
  }
});

export default TelaHome;