import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MeusAgendamentosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Agendamentos 📅</Text>

      <View style={styles.card}>
        <Text style={styles.servico}>Corte de Cabelo</Text>
        <Text style={styles.info}>Data: Hoje às 15:00</Text>
        <Text style={styles.status}>Status: Confirmado ✅</Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Agendamento')}>
        <Text style={styles.textoBotao}>Novo Agendamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#121212' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 20, textAlign: 'center' },
  card: { backgroundColor: '#1e1e1e', padding: 15, borderRadius: 8, borderWidth: 1, borderColor: '#d4af37', marginBottom: 20 },
  servico: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  info: { color: '#aaa', marginVertical: 5 },
  status: { color: '#4caf50', fontWeight: 'bold' },
  botao: { backgroundColor: '#d4af37', padding: 15, borderRadius: 8, alignItems: 'center' },
  textoBotao: { color: '#000', fontWeight: 'bold', fontSize: 16 }
});