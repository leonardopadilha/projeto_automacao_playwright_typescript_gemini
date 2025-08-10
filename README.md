# Projeto Playwright MCP - Automação de Testes com IA

Este projeto demonstra como integrar o Playwright com a API do Google Gemini para gerar automaticamente testes de automação web usando TypeScript.

## 🚀 Funcionalidades

- **Automação Web**: Testes automatizados usando Playwright
- **Integração com IA**: Geração automática de código de teste usando Google Gemini
- **TypeScript**: Desenvolvido em TypeScript para melhor tipagem e manutenibilidade
- **Configuração Flexível**: Suporte a múltiplos navegadores e configurações

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Chave de API do Google Gemini

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd projeto_playwright_mcp
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione sua chave da API Gemini:
```env
GEMINI_API_KEY=sua_chave_api_aqui
```

4. Instale os navegadores do Playwright:
```bash
npx playwright install
```

## 🏃‍♂️ Como Usar

### Executar Testes Existentes

```bash
npm test
```

### Gerar Testes com IA

O projeto inclui um sistema que usa o Google Gemini para gerar automaticamente código de teste Playwright:

1. **Teste de Geração**: Execute o teste que gera código automaticamente:
```bash
npm run test ai-test.ts
```

2. **Executar Teste Gerado**: Após a geração, execute o teste criado:
```bash
npm run test generated-test.spec.ts
```

## 📁 Estrutura do Projeto

```
projeto_playwright_mcp/
├── tests/
│   ├── ai-test.ts              # Teste que gera código usando Gemini
│   ├── gemini-helper.ts        # Helper para integração com Gemini API
│   └── generated-test.spec.ts  # Teste gerado automaticamente
├── playwright.config.ts        # Configuração do Playwright
├── package.json               # Dependências e scripts
├── tsconfig.json             # Configuração TypeScript
└── .env                      # Variáveis de ambiente (criar)
```

## 🔧 Configuração

### Playwright Config

O projeto está configurado para:
- Executar testes em modo não-headless (visível)
- Usar o navegador Chromium por padrão
- Gerar relatórios HTML

### Gemini Helper

O `gemini-helper.ts` contém:
- Função para gerar código Playwright a partir de descrições em linguagem natural
- Integração com a API do Google Gemini
- Configuração de variáveis de ambiente

## 📝 Exemplo de Uso

### Gerando um Teste

```typescript
import { generatePlaywrightSteps } from './gemini-helper';

const task = `
1. Etapas desejadas para o teste
`;

const code = await generatePlaywrightSteps(task);
// O código gerado será salvo em generated-test.spec.ts
```

### Teste Gerado

```typescript
import { test, expect } from '@playwright/test';

test('automated test', async ({ page }) => {
  // Criação do código conforme solicitação anterior
});
```

## 🎯 Casos de Uso

Este projeto é ideal para:
- **Prototipagem Rápida**: Gerar testes rapidamente para novos recursos
- **Documentação Viva**: Converter documentação de casos de teste em código executável
- **Aprendizado**: Entender como estruturar testes Playwright
- **Automação de Regressão**: Criar suites de teste automatizadas

## 🔍 Relatórios

Após executar os testes, você pode visualizar os relatórios:

```bash
npx playwright show-report
```

## 🛡️ Boas Práticas

1. **Variáveis de Ambiente**: Nunca commite sua chave da API Gemini
2. **Seletores**: Use seletores robustos e específicos
3. **Assertions**: Sempre inclua verificações nos testes gerados
4. **Timeouts**: Configure timeouts apropriados para elementos dinâmicos

## 🐛 Troubleshooting

### Erro de API Key
```
Error: Invalid API key
```
- Verifique se o arquivo `.env` existe
- Confirme se a chave da API Gemini está correta

### Testes Falhando
- Verifique se os seletores ainda são válidos
- Confirme se a página não mudou
- Ajuste timeouts se necessário

## 📚 Recursos Adicionais

- [Documentação do Playwright](https://playwright.dev/)
- [API do Google Gemini](https://ai.google.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `package.json` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido como parte do curso de automação com Playwright e TypeScript.

---

**Nota**: Este projeto é uma demonstração educacional da integração entre Playwright e IA para automação de testes.
