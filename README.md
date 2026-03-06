# 💪 Monta Treinos - Landing Page

Landing page profissional para venda de planilhas de treino de CrossFit com dois planos: **RX** (menos tempo, preço acessível) e **Elite** (mais tempo, preço premium).

## 📋 Características

- ✅ Design moderno e responsivo
- ✅ Dois planos de preço claramente diferenciados (RX e Elite)
- ✅ Seção de comparação detalhada
- ✅ Otimização para conversão
- ✅ Integração com WhatsApp para vendas
- ✅ Formulário de contato
- ✅ Performance otimizada
- ✅ SEO friendly

## 🚀 Como Usar

### 1. Visualizar a Landing Page

Abra o arquivo `index.html` no seu navegador:

```bash
# No VS Code, clique com direito em index.html e selecione "Open with Live Server"
# Ou simplesmente abra index.html diretamente no navegador
```

### 2. Personalizar as Informações

Edite o arquivo `index.html` e substitua:

- **Seu número WhatsApp**: Procure por `5511999999999` e substitua pelo seu número
- **Seu email**: Procure por `contato@montatreinos.com`
- **Sua localização**: Procure por `São Paulo, SP - Brasil`

### 3. Estrutura dos Arquivos

```
monta_treinos/
├── index.html       # Página principal HTML
├── styles.css       # Estilos CSS
├── script.js        # Lógica JavaScript
└── README.md        # Este arquivo
```

## 📱 Planos Oferecidos

### RX - R$ 97/mês

- 3 treinos por semana
- 30-45 minutos por sessão
- Suporte por email
- Ajustes mensais

### Elite - R$ 197/mês ⭐

- 5-6 treinos por semana
- 60-90 minutos por sessão
- Suporte por email + WhatsApp
- Ajustes semanais
- Consultoria personalizada mensal

## 🎨 Personalizações

### Cores

Para mudar as cores principais, edite o arquivo `styles.css` no início:

```css
:root {
  --primary-color: #ff6b35; /* Laranja - botões e destaque */
  --secondary-color: #004e89; /* Azul - títulos e header */
  --accent-color: #ffc300; /* Amarelo - acentos */
}
```

### Preços

Edite os valores nos cards de plano no `index.html`:

```html
<span class="amount">97</span>
<!-- RX -->
<span class="amount">197</span>
<!-- Elite -->
```

## 📊 Seções da Página

1. **Navegação** - Menu fixo com links rápidos
2. **Hero** - Grande chamada de ação com imagem
3. **Sobre** - 4 principais benefícios
4. **Planos** - Cards comparativos + tabela detalhada
5. **CTA** - Chamada de ação secundária
6. **Contato** - Informações e formulário
7. **Footer** - Links e copyright

## 🔗 Integração com WhatsApp

Quando o usuário clica em "Escolher Plano", aparece um modal com um botão para iniciar conversa no WhatsApp. O link está configurado para:

- Abrir o WhatsApp ou enviar mensagem
- Pré-preenchido com a informação do plano selecionado

## 📈 Dicas de Conversão

- ✅ O plano Elite está destacado como "Mais Popular"
- ✅ Botões de CTA em tons de laranja (alta atenção)
- ✅ Comparação clara entre os planos
- ✅ Múltiplos pontos de contato (WhatsApp, email, formulário)
- ✅ Processo simples: seleciona plano → modal → WhatsApp

## 🛠️ Deploy

Para publicar a landing page, você pode usar:

- **Vercel**: Arraste os arquivos no [vercel.com](https://vercel.com)
- **Netlify**: Arraste os arquivos no [netlify.com](https://netlify.com)
- **GitHub Pages**: Suba para um repositório GitHub e ative Pages
- **Seu servidor**: Faça upload dos arquivos para seu hosting

## 📝 Próximos Passos

- [ ] Integrar com EmailJS ou Formspree para o formulário de contato
- [ ] Adicionar pixel de rastreamento (Facebook, Google Analytics)
- [ ] Criar página de CMS para gerenciar conteúdo
- [ ] Adicionar carrossel de depoimentos de clientes
- [ ] Criar blog post sobre treinos

## 📧 Suporte

Para dúvidas ou personalizações adicionais, edite qualquer arquivo conforme necessário.

---

**Bem-vindo ao Monta Treinos! 💪**
