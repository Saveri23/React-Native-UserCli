import { View, Text, StyleSheet } from 'react-native';

export default function UserDetailScreen({ route }: any) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.text}>📧 {user.email}</Text>
      <Text style={styles.text}>📞 {user.phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 16 },
  text: { fontSize: 16, marginVertical: 4 },
});