import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function AgendamentoScreen({ navigation }) {
  const [servicoSelecionado, setServicoSelecionado] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);

  const servicos = [
    { id: 1, nome: 'Corte Cabelo', preco: 'R$ 35,00' },
    { id: 2, nome: 'Barba Completa', preco: 'R$ 25,00' },
    { id: 3, name: 'Corte + Barba', preco: 'R$ 55,00' },
  ];

  const horarios = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  const confirmar = () => {
    if (!servicoSelecionado || !horarioSelecionado) {
      alert('Selecione um serviço e um horário!');
      return;
    }
    alert('Agendamento realizado!');
    navigation.navigate('MeusAgendamentos');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Barbearia - Agendamento 💈</Text>

      <Text style={styles.sectionTitle}>1. Escolha o Serviço:</Text>
      <View style={styles.servicosContainer}>
        {servicos.map((s) => (
          <TouchableOpacity
            key={s.id}
            style={[styles.servicoCard, servicoSelecionado === s.id && styles.selectedCard]}
            onPress={() => setServicoSelecionado(s.id)}
          >
            <Text style={styles.servicoNome}>{s.nome || s.name}</Text>
            <Text style={styles.servicoPreco}>{s.preco}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>2. Escolha o Horário:</Text>
      <View style={styles.horariosGrid}>
        {horarios.map((h) => (
          <TouchableOpacity
            key={h}
            style={[styles.horarioBtn, horarioSelecionado === h && styles.selectedHorario]}
            onPress={() => setHorarioSelecionado(h)}
          >
            <Text style={styles.horarioText}>{h}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={confirmar}>
        <Text style={styles.buttonText}>Confirmar Agendamento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secButton} onPress={() => navigation.navigate('MeusAgendamentos')}>
        <Text style={styles.secButtonText}>Ver Meus Agendamentos</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#FFF', textAlign: 'center', marginVertical: 15 },
  sectionTitle: { color: '#E5BF43', fontSize: 16, marginTop: 15, marginBottom: 10 },
  servicosContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  servicoCard: { flex: 1, backgroundColor: '#222', padding: 15, borderRadius: 8, marginHorizontal: 4, alignItems: 'center', borderWidth: 1, borderColor: '#333' },
  selectedCard: { borderColor: '#E5BF43', backgroundColor: '#332b10' },
  servicoNome: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  servicoPreco: { color: '#AAA', marginTop: 5, fontSize: 12 },
  horariosGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  horarioBtn: { width: '23%', backgroundColor: '#222', paddingVertical: 12, borderRadius: 6, alignItems: 'center', marginBottom: 10, borderWidth: 1, borderColor: '#333' },
  selectedHorario: { backgroundColor: '#E5BF43' },
  horarioText: { color: '#FFF', fontWeight: 'bold' },
  button: { backgroundColor: '#E5BF43', height: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#000', fontWeight: 'bold', fontSize: 16 },
  secButton: { marginTop: 12, padding: 12, alignItems: 'center', marginBottom: 30 },
  secButtonText: { color: '#E5BF43', fontSize: 14 }
});