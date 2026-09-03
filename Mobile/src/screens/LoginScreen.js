import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    navigation.navigate('Agendamento');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Barbearia 💈</Text>
      <Text style={styles.subtitle}>Faça login para agendar seu horário</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.linkText}>Criar Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Em breve: Esqueci a Senha')}>
          <Text style={styles.linkText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#E5BF43', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#AAA', marginBottom: 25 },
  input: { width: '100%', height: 50, backgroundColor: '#222', borderRadius: 8, paddingHorizontal: 15, color: '#FFF', marginBottom: 15, borderWidth: 1, borderColor: '#333' },
  button: { width: '100%', height: 50, backgroundColor: '#E5BF43', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#000', fontWeight: 'bold', fontSize: 16 },
  linksContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20 },
  linkText: { color: '#E5BF43', fontSize: 14 }
});