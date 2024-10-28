
# **2. Estrutura Básica de um Documento HTML**

A criação de um documento HTML começa com uma estrutura básica. Este modelo padrão é fundamental para que o navegador reconheça e interprete corretamente o conteúdo da página.

## **2.1 Estrutura Mínima de um Documento HTML**

Abaixo está um exemplo de uma estrutura básica HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Minha Primeira Página HTML</title>
</head>
<body>
    <h1>Bem-vindo ao HTML!</h1>
    <p>Este é um exemplo de uma página HTML básica.</p>
</body>
</html>
```

Cada linha desempenha um papel essencial na construção do documento:

- **Linha 1 - `<!DOCTYPE html>`**: Declara o tipo de documento e informa ao navegador que ele está lidando com um arquivo HTML5.
- **Linha 2 - `<html lang="pt-br">`**: A tag `<html>` indica o início do documento HTML, e o atributo `lang="pt-br"` especifica o idioma, importante para SEO e acessibilidade.
- **Linhas 3 a 5 - `<head>`**: A tag `<head>` contém metadados do documento, que não são exibidos diretamente na página. O `<meta charset="UTF-8">` define a codificação de caracteres para suportar caracteres especiais.
- **Linha 6 - `<title>`**: O `<title>` define o título da página que aparecerá na aba do navegador e também é utilizado pelos mecanismos de busca.
- **Linha 8 - `<body>`**: A tag `<body>` contém todo o conteúdo visível da página, como textos, imagens, links e outros elementos.

## **2.2 Tags Essenciais do HTML**

### **`<!DOCTYPE html>`**

O elemento `<!DOCTYPE html>` é uma instrução obrigatória para que o navegador interprete o documento como HTML5. Sem essa declaração, o navegador pode entrar em modo de **compatibilidade**, tentando ajustar o documento a versões anteriores de HTML, o que pode comprometer a exibição correta da página.

### **`<html>`**

A tag `<html>` é o elemento raiz de uma página HTML, englobando todo o conteúdo da página. Dentro dela, devem estar as tags `<head>` e `<body>`, que estruturam os metadados e o conteúdo visível, respectivamente.

### **`<head>` e Metadados**

A tag `<head>` não exibe nada diretamente na página, mas contém informações importantes sobre o documento. Aqui estão alguns dos elementos mais comuns dentro do `<head>`:

1. **`<meta charset="UTF-8">`**: Define a codificação de caracteres. UTF-8 é amplamente recomendado, pois cobre todos os caracteres necessários para várias línguas.

2. **`<title>`**: Como mencionado, o `<title>` é essencial para o título da aba do navegador.
3. **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Este elemento é vital para o design responsivo, permitindo que o site se ajuste a diferentes tamanhos de tela.
4. **`<link rel="stylesheet" href="styles.css">`**: Usado para conectar a página a um arquivo CSS externo, facilitando a manutenção e o controle do estilo da página.

### **`<body>`**

A tag `<body>` é onde todo o conteúdo que o usuário vê é colocado. Aqui, você define cabeçalhos, parágrafos, imagens, links, tabelas e formulários, construindo a interface visível da página. O `<body>` pode conter inúmeros tipos de elementos HTML para organizar e apresentar a informação.
