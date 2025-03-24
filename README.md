![Cobertura de Testes](./coverage/badge.svg)

# 📱 ReactNativeUSPExample

Este repositório foi desenvolvido como material de apoio para a disciplina **Arquitetura Mobile com React Native**, ministrada no curso de MBA em Engenharia de Software da USP/Esalq.

O projeto tem como objetivo demonstrar, de forma prática e didática, como estruturar um aplicativo React Native moderno, utilizando boas práticas de arquitetura, componentes reutilizáveis, internacionalização e integração com APIs externas.

---

## 🧭 Sumário

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Tecnologias e Bibliotecas Utilizadas](#tecnologias-e-bibliotecas-utilizadas)
- [Funcionalidades Implementadas](#funcionalidades-implementadas)
- [Próximos Passos e Sugestões](#próximos-passos-e-sugestões)

---

## ✅ Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

- Node.js (versão recomendada: 18+)
- Yarn ou NPM
- Android Studio ou Xcode (para emuladores)
- React Native CLI
- CocoaPods (para iOS)

---

## 🚀 Instalação

```bash
# Clone o repositório
git clone https://github.com/adonaipinheiro/ReactNativeUSPExample.git

# Acesse a pasta do projeto
cd ReactNativeUSPExample

# Instale as dependências
yarn install

# (Apenas para iOS)
cd ios && pod install && cd ..
```

---

## 💻 Scripts Disponíveis

```bash
yarn android     # Executa no emulador Android
yarn ios         # Executa no simulador iOS
yarn lint        # Executa o ESLint
yarn format      # Formata o código com Prettier
yarn test        # Executa os testes com Jest
```

---

## 🧱 Estrutura de Pastas

```bash
src/
├── assets/        # Imagens e recursos visuais
├── components/    # Componentes reutilizáveis (Button, Input, Spacer)
├── locales/       # Internacionalização (pt/en)
├── routes/        # Sistema de navegação com React Navigation
├── screens/       # Telas principais (Profile, Search)
├── services/      # Camada de acesso a APIs externas (ex: GitHub)
└── index.tsx      # Entry point do app
```

---

## 🛠️ Tecnologias e Bibliotecas Utilizadas

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)
- [i18n-js](https://github.com/fnando/i18n-js) + [react-native-localize](https://github.com/zoontek/react-native-localize)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/) (pré-configurado)

---

## 📌 Funcionalidades Implementadas

- Estrutura modular com separação clara de responsabilidades
- Componentes otimizados e reaproveitáveis
- Suporte a múltiplos idiomas (Português/Inglês)
- Integração com a API pública do GitHub (busca de usuários e repositórios)
- Estilização desacoplada com base em props
- Uso de TypeScript com tipagem forte

---

## 👨‍🏫 Sobre o Autor

Este projeto foi desenvolvido por [Adonai Pinheiro](https://github.com/adonaipinheiro) para fins educacionais no MBA USP/Esalq.

Sinta-se à vontade para clonar, estudar e adaptar para seus próprios projetos!
