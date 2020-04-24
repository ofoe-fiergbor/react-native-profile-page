import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
      <Image source={require('./assets/saitama.jpg')} style={styles.image} />
      <Feather name='camera' style={styles.icon}/>
      </View>
      <View style={styles.details}>
        <View>
          <Text style={styles.label}>School</Text>
          <Text style={styles.detail}>CodeTrain Acadamy</Text>
        </View>
        <View>
          <Text style={styles.label}>Email Address</Text>
          <Text style={styles.detail}>saitama@heroesAcademy.org</Text>
        </View>
        <View style={styles.subDetail}>
          <Text style={styles.label2}>Name</Text>
          <Text style={styles.detail}>Saitama (a.k.a Caped Baldie)</Text>
        </View>
        <View style={styles.subDetail}>
          <Text style={styles.label2}>Nick Name</Text>
          <Text style={styles.detail}>One Punch Man</Text>
        </View>
        <View style={styles.subDetail}>
          <Text style={styles.label2}>Emergency Contact</Text>
          <Text style={styles.detail}>+44 876 998909</Text>
          <AntDesign style={styles.contactIcon} name='contacts' />
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.btn}>UPDATE PROFILE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100
  },
  contactIcon:{
    position:'absolute',
    left: 170,
    top: 20,
    fontSize: 18,
    color: '#D5D8DC'
  },
  btn:{
    backgroundColor: 'orange',
    marginTop: 30,
    textAlign: 'center',
    height: 30,
    paddingTop: 5,
    borderRadius: 20
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 30,
  },
  icon:{
    backgroundColor: '#06F1E4',
    color:'white',
    width:25,
    height: 25,
    position:'absolute',
    left:205,
    top:90,
    paddingTop:5,
    paddingLeft:6,
    borderRadius:12.5
  },
  details: {
    alignSelf: 'center',
    flex: 1
  },
  label: {
    color: '#ABB2B9',
    fontSize: 10,
    marginBottom: 3,
    marginTop: 4
  },
  detail: {
    marginBottom: 2
  },
  label2: {
    color: '#06F1E4',
    fontSize: 10,
    marginBottom: 3,
  },
  subDetail: {
    borderBottomColor: '#D5D8DC',
    borderBottomWidth: 1,
    marginTop: 10
  }
});
