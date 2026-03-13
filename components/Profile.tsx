
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/foto.jpeg')}
        style={styles.image}
      />
      <Text style={styles.name}>Vinicius</Text>
      <Text style={styles.bio}>
        Estudante de tecnologia apaixonado por desenvolvimento de software.
        Gosto de criar aplicações web e mobile usando JavaScript e React.
        Sempre buscando aprender novas ferramentas e melhorar minhas habilidades.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    width: '100%',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  bio: {
    textAlign: 'center',
    fontSize: 14,
  },
});
