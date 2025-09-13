# ACF Rangel Pestana - Site Oficial

Site institucional da **ACF Rangel Pestana**, agência credenciada dos Correios localizada em Santos-SP, atendendo toda a região da Baixada Santista desde 1992.

## 📋 Sobre o Projeto

Este é um site estático desenvolvido para apresentar os serviços da agência, facilitar o contato com clientes e fornecer acesso rápido aos principais serviços dos Correios. O site foi desenvolvido com foco em acessibilidade, responsividade e experiência do usuário.

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização responsiva e moderna
- **JavaScript** - Interatividade e validações
- **Google Maps API** - Integração de localização
- **Fontes Web** - Segoe UI e fallbacks

## 📁 Estrutura do Projeto

```
acf-rangel-pestana/
│
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── README.md           # Documentação do projeto
└── assets/             # Pasta para imagens (se necessário)
```

## 🔧 Instalação e Uso

### Pré-requisitos
- Navegador web moderno
- Editor de código (VS Code, Sublime, etc.) para edições
- Servidor web local para desenvolvimento (opcional)

### Como usar

1. **Clone ou baixe o repositório:**
```bash
git clone [URL_DO_REPOSITORIO]
cd acf-rangel-pestana
```

2. **Abra o projeto:**
   - Abra o arquivo `index.html` diretamente no navegador, ou
   - Use um servidor local (recomendado para desenvolvimento)

3. **Servidor local (opcional):**
```bash
# Com Python
python -m http.server 8000

# Com Node.js (live-server)
npx live-server

# Com PHP
php -S localhost:8000
```

## 🎨 Customização

### Cores do Site
As cores principais estão definidas no início do arquivo `styles.css`:
- **Azul escuro:** `#003366` (header, títulos)
- **Azul médio:** `#0066cc` (navegação, botões)
- **Dourado:** `#ffd700` (destaques, botão PostalNet)

### Conteúdo
- **Texto:** Edite diretamente no arquivo `index.html`
- **Informações de contato:** Seção `.contact-sidebar`
- **Serviços:** Lista `.services-list`

### Funcionalidades JavaScript
- **Login PostalNet:** Função `loginPostalNet()` em `script.js`
- **Navegação suave:** Implementada automaticamente
- **Validações:** Funções de validação de formulário

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** até 767px

## 🔗 Links Importantes a Configurar

### URLs que precisam ser atualizadas:

1. **PostalNet (CRÍTICO):**
   - Arquivo: `script.js`, linha ~45
   - Substitua: `https://postalnet.correios.com.br/login`
   - Por: URL real do sistema PostalNet

2. **WhatsApp:**
   - Verificar se o número está correto: `5513322211001`

3. **Google Maps:**
   - Iframe configurado para o endereço atual
   - Verificar se as coordenadas estão corretas

## 📊 Funcionalidades

### Principais Seções:
- **Header** - Branding e acesso PostalNet
- **Navegação** - Menu principal com scroll suave
- **Hero** - Apresentação da empresa
- **Serviços** - Lista completa de serviços oferecidos
- **Sobre** - História e valores da empresa
- **Avaliações** - Reviews do Google (4.3 estrelas)
- **Localização** - Mapa integrado
- **FAQ** - Perguntas frequentes com links úteis
- **Contato** - Informações completas de contato

### Recursos Especiais:
- **PostalNet Login** - Formulário de acesso direto
- **Pet Friendly** - Indicação de ambiente que aceita pets
- **Acessibilidade** - Design inclusivo
- **WhatsApp Integration** - Links diretos para contato
- **Canal de Avisos** - Link para canal WhatsApp

## 🧪 Testes e Validação

### Antes de publicar, verifique:
- [ ] Todos os links funcionam corretamente
- [ ] Formulário PostalNet redireciona adequadamente  
- [ ] Site carrega em diferentes dispositivos
- [ ] Navegação suave funciona
- [ ] Informações de contato estão corretas
- [ ] Mapa carrega corretamente

### Ferramentas de teste recomendadas:
- **Lighthouse** (Performance, SEO, Acessibilidade)
- **Responsive Design Mode** (Firefox/Chrome)
- **W3C Validator** (Validação HTML/CSS)

## 🚀 Deploy

### Opções de hospedagem gratuita:
1. **GitHub Pages**
   ```bash
   # Push para branch gh-pages ou main
   ```

2. **Netlify**
   - Arraste a pasta do projeto para netlify.com
   - Configure domínio personalizado se necessário

3. **Vercel**
   ```bash
   npx vercel
   ```

4. **Hospedagem tradicional**
   - Upload via FTP para servidor
   - Certificar que `index.html` está na raiz

## 🔧 Manutenção

### Atualizações regulares necessárias:
- **Horários de funcionamento** (feriados, mudanças)
- **Informações de contato** (telefone, endereço)
- **Preços e serviços** (conforme atualizações dos Correios)
- **Links externos** (verificar se ainda funcionam)

### Arquivos principais para edição:
- **index.html** - Conteúdo e estrutura
- **styles.css** - Aparência e layout  
- **script.js** - Funcionalidades

## 📞 Informações de Contato

**ACF Rangel Pestana**
- **Endereço:** R. Julio de Mesquita, 192 - Vila Matias, Santos-SP
- **CEP:** 11075-220
- **Telefone:** (13) 3222-1101
- **Horário:** Seg-Sex: 09h-17h | Sáb: 08h-12h

## 📄 Licença

Este projeto foi desenvolvido para uso exclusivo da ACF Rangel Pestana. Todos os direitos reservados.

## 🤝 Contribuição

Para alterações no site:

1. Faça backup dos arquivos atuais
2. Teste todas as mudanças localmente
3. Valide o código HTML/CSS
4. Teste em diferentes dispositivos
5. Deploy apenas após confirmação

## 📝 Changelog

### Versão 1.0.0 (2025)
- ✅ Estrutura inicial do site
- ✅ Design responsivo implementado  
- ✅ Integração com Google Maps
- ✅ Sistema de FAQ interativo
- ✅ Formulário PostalNet
- ✅ Otimização para SEO

## ⚠️ Notas Importantes

1. **PostalNet:** A URL atual é um placeholder. Substituir pela URL real antes do deploy.
2. **SSL:** Certificar que o site será servido via HTTPS para segurança.
3. **Performance:** Todas as imagens devem ser otimizadas antes de adicionar.
4. **Backup:** Manter backup regular dos arquivos.

---

**Desenvolvido com foco na experiência do usuário e acessibilidade.**