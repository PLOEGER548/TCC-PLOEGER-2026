import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    if (!nome || !email || !senha) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    // Exemplo de integração com o Backend em PHP
    try {
      /* 
      const response = await fetch('http://localhost/backend/api/cadastro.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, telefone, senha })
      });
      const data = await response.json();
      */

      alert('Conta criada com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      alert('Erro ao conectar com o servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta 💈</Text>
      <Text style={styles.subtitle}>Preencha seus dados para se cadastrar</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        placeholderTextColor="#888"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone / WhatsApp"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        value={telefone}
        onChangeText={setTelefone}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.backButtonText}>Já tem uma conta? Faça Login</Text>
      </TouchableOpacity>
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
  backButton: { marginTop: 20 },
  backButtonText: { color: '#E5BF43', fontSize: 14 }
});