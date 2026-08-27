import React, { useState } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import AgendamentoScreen from './src/screens/AgendamentoScreen';
import MeusAgendamentosScreen from './src/screens/MeusAgendamentosScreen';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('login');

  const navigation = {
    navigate: (nomeTela) => {
      if (nomeTela === 'Agendamento') setTelaAtual('agendamento');
      if (nomeTela === 'MeusAgendamentos') setTelaAtual('meusAgendamentos');
      if (nomeTela === 'Login') setTelaAtual('login');
    }
  };

  if (telaAtual === 'agendamento') {
    return <AgendamentoScreen navigation={navigation} />;
  }

  if (telaAtual === 'meusAgendamentos') {
    return <MeusAgendamentosScreen navigation={navigation} />;
  }

  return <LoginScreen navigation={navigation} />;
}