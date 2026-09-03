import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function MeusAgendamentosScreen({ navigation }) {
  const agendamentos = [
    { id: '1', servico: 'Corte + Barba', data: '28/08/2026', hora: '14:00', status: 'Confirmado' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Agendamentos 📅</Text>

      <FlatList
        data={agendamentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.servico}>{item.servico}</Text>
            <Text style={styles.info}>Data: {item.data} às {item.hora}</Text>
            <Text style={styles.status}>Status: {item.status}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Agendamento')}>
        <Text style={styles.buttonText}>Novo Agendamento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.secButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#E5BF43', textAlign: 'center', marginVertical: 20 },
  card: { backgroundColor: '#222', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#333' },
  servico: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  info: { color: '#AAA', marginTop: 5 },
  status: { color: '#E5BF43', marginTop: 5, fontWeight: 'bold' },
  button: { backgroundColor: '#E5BF43', height: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#000', fontWeight: 'bold', fontSize: 16 },
  secButton: { marginTop: 15, alignItems: 'center' },
  secButtonText: { color: '#888', fontSize: 14 }
});