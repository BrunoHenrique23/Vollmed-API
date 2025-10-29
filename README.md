# 🏥 VollMed API - Sistema de Gestão de Consultas Médicas

API RESTful desenvolvida para gerenciamento de consultas médicas, pacientes e especialistas.

## 📋 Sobre o Projeto

O VollMed é um sistema completo para gestão de clínicas médicas, permitindo o cadastro de pacientes, especialistas e agendamento de consultas. Desenvolvido com Node.js, TypeScript e TypeORM.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **TypeScript** - Superset JavaScript com tipagem estática
- **Express** - Framework web para Node.js
- **TypeORM** - ORM para TypeScript e JavaScript
- **SQLite** - Banco de dados relacional
- **Bcrypt** - Criptografia de senhas
- **Jest** - Framework de testes

## 📁 Estrutura do Projeto

```
vollmed-api-swiftui-main/
├── src/
│   ├── auth/              # Autenticação
│   ├── consultas/         # Módulo de consultas
│   ├── database/          # Configuração do banco de dados
│   ├── error/             # Tratamento de erros
│   ├── especialistas/     # Módulo de especialistas
│   ├── pacientes/         # Módulo de pacientes
│   ├── test/              # Testes
│   ├── utils/             # Utilitários
│   ├── data-source.ts     # Configuração TypeORM
│   └── server.ts          # Servidor principal
├── docker-compose.yaml    # Configuração Docker
├── package.json
└── tsconfig.json
```

## 🔧 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Docker (opcional)

## ⚙️ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/BrunoHenrique23/Vollmed-API.git
cd vollmed-api-swiftui-main
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

O banco de dados SQLite será criado automaticamente na primeira execução.

### 4. Execute as migrations (se necessário)

```bash
npm run typeorm migration:run
```

### 5. Inicie o servidor

```bash
# Desenvolvimento
npm run dev

# Produção
npm start
```

O servidor estará rodando em `http://localhost:3000`

## 🐳 Usando Docker

```bash
# Construir e iniciar os containers
docker-compose up -d

# Parar os containers
docker-compose down
```


## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Gerar relatório de cobertura
npm run test:coverage
```

## 🗄️ Banco de Dados

### Estrutura das Tabelas

- **paciente**: Armazena dados dos pacientes
- **especialista**: Armazena dados dos médicos
- **consulta**: Armazena informações das consultas

### Popular o banco com dados de teste

```bash
cd src/database
sqlite3 database.sqlite < insert_especialistas.sql
```

## 🔐 Segurança

- Senhas são criptografadas usando bcrypt
- Autenticação baseada em tokens
- Validação de dados de entrada
- Proteção contra SQL injection através do TypeORM

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 👥 Autores

- **Alura**

## 📞 Contato

- Email: bhferrassilva@gmail.com
- LinkedIn: [brunosilva20](https://www.linkedin.com/in/brunosilva20/)

## 🙏 Agradecimentos

- Alura - Formação em desenvolvimento
- Comunidade Node.js
- Contribuidores do projeto

---
