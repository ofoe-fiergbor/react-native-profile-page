import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source = {require('./assets/saitama.jpg')} style={styles.image}/>
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
  image:{
    width:120,
    height:120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 50
  },
  details:{
    alignSelf: 'center',
    flex:1
  },
  label:{
    color: '#ABB2B9',
    fontSize: 10,
    marginBottom: 3,
  },
  detail:{
    marginBottom: 2
  },
  label2:{
    color: '#06F1E4',
    fontSize: 10,
    marginBottom: 3,
  },
  subDetail:{
    borderBottomColor: '#D5D8DC',
    borderBottomWidth: 1,
    marginTop: 10
  }
});
