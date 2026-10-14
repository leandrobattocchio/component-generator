# 🧩 Component Generator

AI-powered web component generator. Describe the component you need in plain language, pick a framework, and get production-ready code with a **live, editable preview**.

🔗 **Live demo:** [component-generator.vercel.app](https://component-generator.vercel.app)

## ✨ Features

- Generates components for **React, Vue, Svelte or vanilla JavaScript**
- Prompts in natural language, powered by the **OpenAI API**
- Live code preview and editor with **Sandpack**
- Serverless API route in Next.js that keeps the API key on the server
- Global state with **Zustand** and toast notifications with Sonner

## 🛠️ Tech stack

Next.js · React · OpenAI API · Tailwind CSS · Zustand · Sandpack · Headless UI

## 🚀 Run locally

```bash
git clone https://github.com/leandrobattocchio/component-generator.git
cd component-generator
npm install
```

Create a `.env.local` file:

```env
OPENAI_API_KEY=your_openai_api_key
```

```bash
npm run dev
```

Open http://localhost:3000.

---

Made by [Leandro Battocchio](https://leandrobattocchio.github.io) · [LinkedIn](https://www.linkedin.com/in/leandro-battocchio/)
