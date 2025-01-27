# **Documentação do Frontend**

Bem-vindo à documentação oficial do projeto **Jornada na Educação Financeira Infantil**. 
Este documento fornece informações sobre a arquitetura do projeto, dependências, comandos de execução e boas práticas.

---

## **1. Visão Geral**
- **Linguagem**: Typescript
- **Framework**: Next.js *(v14.2.8)*
- **UI**: TailwindCSS + Radix UI (Shadcn/UI)
- **Gerenciamento de Estado**: React Query
- **Validação de Formulário**: React Hook Form + Zod
- **Autenticação**: NextAuth

---

## **2. Estrutura do Projeto**
A estrutura do frontend segue um modelo modular:
```
└── 📁client
	└── 📁public
		└── 📁img
		└── 📁svg
	└── 📁src
		└── 📁action
		└── 📁app
			└── 📁(home)
				└── 📁[userId]
					└── 📁app
						└── layout.tsx
						└── page.tsx
						└── 📁settings
							└── page.tsx
						└── 📁tasks
							└── page.tsx
					└── 📁dashboard
						└── 📁childs
							└── 📁[childId]
								└── page.tsx
							└── page.tsx
						└── 📁goals
							└── 📁[goalId]
								└── page.tsx
							└── page.tsx
						└── layout.tsx
						└── page.tsx
						└── 📁products
							└── page.tsx
						└── 📁task-types
							└── 📁[taskTypeId]
								└── page.tsx
							└── page.tsx
						└── 📁tasks
							└── 📁[taskId]
								└── page.tsx
							└── page.tsx
				└── 📁auth
					└── 📁signin
						└── page.tsx
					└── 📁signup
						└── page.tsx
				└── layout.tsx
				└── page.tsx
			└── 📁api
				└── 📁auth
					└── 📁[...nextauth]
						└── route.ts
			└── globals.css
			└── layout.tsx
		└── 📁components
			└── 📁app
			└── 📁auth
			└── 📁dashboard
			└── 📁ui
		└── 📁hooks
			└── 📁data
			└── 📁home
			└── use-toast.ts
		└── 📁lib
			└── constants.ts
			└── utils.ts
		└── 📁schemas
			└── 📁auth
			└── 📁dashboard
		└── 📁types
	└── .env
	└── middleware.ts
	└── next-env.d.ts
	└── next.config.mjs
	└── package.json
	└── postcss.config.mjs
	└── README.md
	└── tailwind.config.ts
	└── tsconfig.json
```

---


## **3. Configuração do Ambiente**

### **3.1 Pré-requisitos**
- Node.js v18 ou superior

### **3.2 Variáveis de Ambiente**
Crie um arquivo `.env` na raiz do projeto seguindo o formato do .env.example

### **3.3 Executando o Projeto**
1. Clone o projeto:
	```bash
			git clone https://github.com/Projeto-Integrador-Univesp-2024/frontend.git
		```
2. Entre na raiz do projeto:
	```bash
		cd frontend
	```
3. Instale as dependências:
	```bash
		npm install
	```
4. Execute o servidor
	```bash
		npm run dev
	```

### **3.4 Rodar em Produção**
1. Instalar dependências
	```bash
		npm install
	```
2. Gerar Build
	```bash
		npm run build
	```
1. Rodar a Aplicação em Produção
	```bash
		npm run start
	```

---

## **4. Boas Práticas**
- Utilize mensagens de commit padronizadas
- Execute npm run lint antes de criar um pull request.
- Crie o commit com o comando `npm run commit`

---

© 2025 Jornada na Educação Financeira Infantil. Todos os direitos reservados.