# 🌊 TaskFlow - Gerenciador de Tarefas Inteligente

<p align="center">
  <img src="./src/assets/taskflow-logo.png" alt="TaskFlow Logo" width="200"/>
</p>

<p align="center">
  <strong>Organize seu dia com fluidez e simplicidade</strong>
</p>

<p align="center">
  <a href="#-sobre">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-demonstração">Demonstração</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-como-usar">Como Usar</a> •
  <a href="#-estrutura-do-projeto">Estrutura</a> •
  <a href="#-contribuições">Contribuições</a> •
  <a href="#-licença">Licença</a>
</p>

## 📋 Sobre

**TaskFlow** transforma a maneira como você gerencia suas tarefas diárias. Inspirado na metodologia de fluxo contínuo, este aplicativo React proporciona uma experiência intuitiva para criar, organizar e acompanhar suas tarefas com eficiência.

Desenvolvido como parte de um desafio técnico, o TaskFlow demonstra boas práticas de desenvolvimento React com foco em uma arquitetura limpa e interface amigável.

## ✨ Funcionalidades

- **Criação Intuitiva**: Adicione novas tarefas facilmente através de uma interface amigável
- **Gerenciamento Completo**: Marque tarefas como concluídas ou remova-as quando necessário
- **Filtragem Inteligente**: Visualize todas as tarefas, apenas as concluídas ou as pendentes
- **Contador de Progresso**: Acompanhe seu avanço com o contador de tarefas concluídas/pendentes
- **Design Responsivo**: Interface adaptável a diferentes dispositivos
- **Persistência Local**: Suas tarefas são salvas localmente, mantendo sua lista intacta entre sessões

## 🎯 Demonstração

<p align="center">
  <img src="./src/assets/taskflow-demo.gif" alt="TaskFlow Demo" width="600"/>
</p>

## 🚀 Tecnologias

TaskFlow foi desenvolvido utilizando um conjunto moderno de tecnologias web:

- **React JS**: Biblioteca JavaScript para construção de interfaces
- **JavaScript ES6+**: Linguagem de programação principal
- **CSS Modules**: Estilização modular e escopo local de estilos
- **LocalStorage API**: Persistência de dados no navegador
- **UUID**: Geração de IDs únicos para cada tarefa
- **React Icons**: Biblioteca de ícones para interface amigável

## 🔧 Como Usar

### Pré-requisitos

- Node.js (versão 14.x ou superior)
- npm ou yarn

### Instalação

1. Clone este repositório
```bash
git clone https://github.com/DeboraLara1/taskflow.git
cd taskflow
```

2. Instale as dependências
```bash
npm install
```

3. Execute o projeto localmente
```bash
npm run dev
```

4. Acesse o aplicativo
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
src/
├── components/            # Componentes React reutilizáveis
│   ├── Header/            # Cabeçalho da aplicação
│   ├── TaskForm/          # Formulário para criação de tarefas
│   ├── TaskItem/          # Item individual de tarefa
│   ├── TaskList/          # Lista completa de tarefas
│   └── TaskStats/         # Componente de estatísticas
├── contexts/              # Context API para gerenciamento de estado
├── hooks/                 # Hooks personalizados
├── styles/                # Estilos globais e variáveis
├── utils/                 # Funções utilitárias
├── App.js                 # Componente principal
└── index.js               # Ponto de entrada da aplicação
```

## 👥 Contribuições

Contribuições são sempre bem-vindas! Se você tem uma sugestão para melhorar este aplicativo:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/incrivel`)
3. Commit suas mudanças (`git commit -m 'Adiciona feature incrível'`)
4. Push para a branch (`git push origin feature/incrivel`)
5. Abra um Pull Request

## 🌟 Recursos Futuros

- [ ] Temas claro/escuro
- [ ] Categorização de tarefas
- [ ] Notificações e lembretes
- [ ] Sincronização em nuvem
- [ ] Versão mobile com React Native

---

<p align="center">
  Desenvolvido com ❤️ por <a href="https://github.com/DeboraLara1">Débora Lara</a>
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/deboralara/">LinkedIn</a> 
</p>
