import React, { useState, useEffect } from 'react'
import {ListItem, Avatar} from 'react-native-elements'
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import firebaseApp from '../Credenciales'
import {getFirestore, getDocs, doc, collection} from 'firebase/firestore'
const db = getFirestore(firebaseApp)

const Carbos = () => {
    const [lista, setLista] = useState([])

    // logica para llamara la lista de documentos de la coleccion proteinas
    useEffect(() => {
        const getLista = async()=>{
            try {
                const querySnapshot = await getDocs(collection(db, 'carbohidratos'))
                const docs = []
                querySnapshot.forEach((doc)=>{
                    const {nombre, descripcion, url} = doc.data()
                    docs.push({
                        id:doc.id,
                        nombre,
                        descripcion,
                        url
                    })
                })
                setLista(docs);
            } catch (error) {
                console.log(error);
            }
        }
        getLista()
    }, [])

    return (
        <ScrollView>
        <View style={styles.padre}>
          <ImageBackground
            style={styles.imagen}
            source={{
              uri: "https://estaticos.miarevista.es/media/cache/1000x590_thumb/uploads/images/gallery/59c8ea555bafe82418bbec7e/alimentosproteinas-int.jpg",
            }}
          >
            <Text style={styles.textoImagen}>CARBOHIDRATOS</Text>
          </ImageBackground>
        </View>
        {/* fin del encabezado */}
        <Text style={styles.title}>Por 100gr. de alimento se obtiene un (N°) de carbohidratos en gramos</Text>

        {/* aqui el contenido de la lista */}
        
        {lista.map((comida)=>(
          <ListItem bottomDivider key={comida.id}>
          <ListItem.Chevron />
          <Avatar style={styles.avatar} source={{ uri: comida.url }} />
          <ListItem.Content>
            <ListItem.Title style={styles.titulo}>
              {comida.nombre}
            </ListItem.Title>
            <ListItem.Subtitle>{comida.descripcion}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        ))}

      </ScrollView>
    )
}

export default Carbos

const styles = StyleSheet.create({
    padre:{
        height:100
    },
    contenedor:{
        flex:1,
        flexDirection:'column'
    },
    imagen:{
        flex:1,
        resizeMode:'cover'
    },
    textoImagen:{
        textAlign:'center',
        fontSize:32,
        fontWeight:'bold',
        color:'white',
        marginTop:25
    },
    title:{
        textAlign:'center',
        marginTop:20,
        marginBottom:20,
        fontWeight:'bold'
    },
    avatar:{
      height:80,
      width:100
    },
    titulo:{
      fontWeight:'bold'
    }
})
