import { Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import Registro from './Registro';


type HomeScreenNavigationProp = StackNavigationProp<{}>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  

  return (
    <View>
      <Text>Bienvenido</Text>
      <Button
        title="Ir al Formulario"
        onPress={() => navigation.navigate(Registro)}
      />
    </View>
  );
};

export default Home;
