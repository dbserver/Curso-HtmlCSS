# **3. Tags de Formatação de Texto**

As tags de formatação de texto no HTML são usadas para definir a aparência, o tamanho, a hierarquia e o estilo dos textos dentro de uma página. Isso inclui a criação de parágrafos, títulos, listas e ênfases no conteúdo, além de facilitar a leitura e o entendimento do conteúdo.

## **3.1 Parágrafos - `<p>`**

A tag `<p>` é usada para delimitar parágrafos no HTML. Cada parágrafo é exibido como um bloco separado e normalmente tem um espaçamento vertical padrão. O uso de `<p>` facilita a leitura e organiza o texto em seções visuais distintas.

Exemplo:

```html
<p>Este é o primeiro parágrafo de um exemplo de página HTML.</p>
<p>Este é o segundo parágrafo. O navegador aplica automaticamente um espaço entre parágrafos.</p>
```

No exemplo acima, cada parágrafo será exibido um abaixo do outro com um espaçamento automático entre eles, tornando o texto mais fácil de ler.

### **Boas práticas para `<p>`:**
- Utilize a tag `<p>` para qualquer bloco de texto que precise de espaçamento próprio.
- Evite o uso de `<br>` dentro de parágrafos para forçar espaçamento; prefira usar CSS para isso.

## **3.2 Cabeçalhos - `<h1>` a `<h6>`**

Os cabeçalhos `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, e `<h6>` são usados para hierarquizar o conteúdo. O `<h1>` representa o título mais importante da página, enquanto o `<h6>` é o menos importante. A escolha da tag de cabeçalho adequada ajuda a organizar o conteúdo e a torná-lo acessível.

Exemplo:

```html
<h1>Título Principal</h1>
<h2>Subtítulo Secundário</h2>
<h3>Subseção do Subtítulo</h3>
```

Os mecanismos de busca utilizam essas tags para entender a estrutura da página, por isso é essencial usar `<h1>` uma única vez por página (para o título principal), e `<h2>` a `<h6>` conforme necessário para subtítulos.

### **Boas práticas para cabeçalhos:**
- Use apenas um `<h1>` por página.
- Utilize cabeçalhos de maneira hierárquica para facilitar a leitura.
- Evite usar cabeçalhos apenas para estilizar texto; prefira CSS para isso.

## **3.3 Ênfase e Fortificação de Texto - `<em>` e `<strong>`**

As tags `<em>` (ênfase) e `<strong>` (forte) são usadas para destacar partes do texto. `<em>` geralmente é exibido em itálico, enquanto `<strong>` é exibido em negrito. Essas tags também carregam semântica, indicando a importância relativa do conteúdo, o que melhora a acessibilidade.

Exemplo:

```html
<p>Esta é uma frase com <em>ênfase</em> no texto.</p>
<p>Este é um texto <strong>importante</strong> para o usuário.</p>
```

### **Diferença Semântica:**
- `<em>` indica que uma parte do texto tem um destaque leve, útil para enfatizar partes de uma frase.
- `<strong>` é usado para destacar informações importantes, que têm mais peso no contexto.

## **3.4 Quebras de Linha e Espaços - `<br>` e `&nbsp;`**

Para forçar uma quebra de linha dentro de um parágrafo ou outro bloco de texto, usamos a tag `<br>`. Já para adicionar espaços em branco extras, usamos o caractere de espaço não separável `&nbsp;`.

Exemplo:

```html
<p>Este é um exemplo de texto com uma<br>quebra de linha forçada.</p>
<p>Texto com espaços extras: HTML&nbsp;&nbsp;permite&nbsp;&nbsp;espaços adicionais usando `&nbsp;`.</p>
```

### **Boas práticas para `<br>` e `&nbsp;`:**
- Use `<br>` apenas quando uma nova linha for essencial dentro de um bloco de texto.
- Prefira CSS para controlar o espaçamento em vez de `&nbsp;`.

## **3.5 Citações - `<blockquote>` e `<q>`**

Para citar trechos de conteúdo, o HTML fornece as tags `<blockquote>` e `<q>`. A tag `<blockquote>` é usada para citações mais longas e geralmente é exibida com uma margem adicional. Já a tag `<q>` é usada para citações curtas, integradas ao texto.

Exemplo:

```html
<blockquote>Este é um trecho de uma citação longa, que é apresentado em um bloco separado do restante do texto.</blockquote>
<p>Ele disse: <q>A prática leva à perfeição.</q></p>
```

### **Diferença Semântica:**
- `<blockquote>` é usado para citações de parágrafo ou trechos longos.
- `<q>` é ideal para citações curtas, dentro do fluxo de texto.

## **3.6 Marcação de Código - `<code>`, `<pre>` e `<kbd>`**

Para exibir código em uma página HTML, utilizamos as tags `<code>`, `<pre>`, e `<kbd>`. A tag `<code>` é usada para pequenos trechos de código, enquanto `<pre>` preserva a formatação e os espaços. A tag `<kbd>` é usada para indicar entradas de teclado.

Exemplo:

```html
<p>Veja o código HTML abaixo:</p>
<pre><code>
<html>
    <head>
        <title>Exemplo</title>
    </head>
    <body>
        <h1>Olá Mundo</h1>
    </body>
</html>
</code></pre>
<p>Pressione <kbd>Ctrl</kbd> + <kbd>C</kbd> para copiar o texto.</p>
```

### **Boas práticas para `<code>`, `<pre>` e `<kbd>`:**
- Use `<pre>` quando precisar que a formatação original seja mantida.
- `<kbd>` é útil para tutoriais e instruções que envolvem teclas específicas.

## **3.7 Listas - `<ul>`, `<ol>`, e `<li>`**

As listas são utilizadas para agrupar itens relacionados. O HTML oferece dois tipos de listas: não ordenadas (`<ul>`) e ordenadas (`<ol>`). Em ambas, cada item é representado por `<li>`.

Exemplo de lista não ordenada:

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

Exemplo de lista ordenada:

```html
<ol>
    <li>Configurar ambiente de desenvolvimento</li>
    <li>Aprender HTML</li>
    <li>Estudar CSS e JavaScript</li>
</ol>
```

### **Boas práticas para listas:**
- Use listas ordenadas para etapas ou sequências.
- Utilize listas não ordenadas para itens sem hierarquia específica.

## **3.8 Outros Estilos de Texto - `<mark>`, `<del>`, e `<ins>`**

Para marcar, deletar ou inserir textos, usamos as tags `<mark>`, `<del>`, e `<ins>`. A tag `<mark>` destaca o texto com uma cor de fundo, enquanto `<del>` risca o texto e `<ins>` adiciona um sublinhado.

Exemplo:

```html
<p>Texto com <mark>realce</mark> para chamar a atenção.</p>
<p>Texto com <del>parte removida</del> indicando uma alteração.</p>
<p>Texto com <ins>novo conteúdo</ins> recentemente adicionado.</p>
```

### **Boas práticas para `<mark>`, `<del>`, e `<ins>`:**
- Use `<mark>` para realçar informações.
- Utilize `<del>` e `<ins>` para revisões e edições em documentos colaborativos.

---
