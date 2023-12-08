import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import {getDatabase, ref, set } from 'firebase/database';
import { db } from '../components/firebaseconfig';

interface FormularioProps {}

const Formulario: React.FC<FormularioProps> = () => {
  const [id, setId] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');

  function enviar(id: string, monto:string, categoria:string, descripcion:string){
   // const db = getDatabase();
    set(ref(db, 'usuarios' + id),{
      monto: monto,
      categoria: categoria,
      descripcion: descripcion

    });

  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="ID"
        value={id}
        onChangeText={(text) => setId(text)}
      />
      <Input
        placeholder="Monto"
        value={monto}
        onChangeText={(text) => setMonto(text)}
        keyboardType="numeric"
      />
      <Input
        placeholder="Categoría"
        value={categoria}
        onChangeText={(text) => setCategoria(text)}
      />
      <Input
        placeholder="Descripción"
        value={descripcion}
        onChangeText={(text) => setDescripcion(text)}
      />
      <Button title="Enviar" onPress={()=>enviar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Formulario;
