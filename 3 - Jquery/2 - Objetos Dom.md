## **1.5 - Objetos DOM (Document Object Model)**  

O **DOM (Document Object Model)** é a interface que permite aos scripts, como JavaScript ou jQuery, interagir e manipular a estrutura HTML de uma página web. O DOM transforma a página em uma árvore de objetos, onde cada elemento HTML é representado como um **nó** que pode ser acessado e modificado dinamicamente.

---

### 1. **O que é o DOM?**  
- O DOM é uma representação em árvore da estrutura HTML ou XML da página.  
- Cada elemento, atributo e texto é um **nó** dentro dessa árvore.  
- Através do DOM, podemos:
  - Alterar o conteúdo e os atributos dos elementos.
  - Adicionar ou remover elementos.
  - Reagir a eventos disparados pelos usuários.

---

### 2. **Objetos DOM Principais**
#### **1. `Window`**
- Representa a janela do navegador que contém o documento.
- Acessa variáveis globais e manipula janelas.

**Exemplo:**
```javascript
alert("Bem-vindo!"); // Janela de alerta
window.open("https://example.com", "_blank"); // Abre uma nova aba
```

---

#### **2. `Document`**
- Representa o documento HTML carregado na janela.
- Permite manipular a estrutura do documento, incluindo a criação e alteração de elementos.

**Exemplo:**
```javascript
document.title = "Novo Título"; // Altera o título da página
var elemento = document.getElementById("meuElemento"); // Seleciona um elemento pelo ID
```

---

#### **3. `Element`**
- Representa cada **elemento HTML** (como `<div>`, `<p>`, `<img>`) na página.

**Exemplo:**
```javascript
var div = document.createElement("div"); // Cria um novo elemento <div>
div.textContent = "Olá, mundo!"; // Adiciona conteúdo ao elemento
document.body.appendChild(div); // Adiciona o <div> ao final do <body>
```

---

#### **4. `Node`**
- Todo objeto dentro do DOM é um **nó**. 
- Nós podem ser **elementos**, **textos**, **atributos**, ou **comentários**.

**Exemplo:**
```javascript
var paragrafo = document.querySelector("p");
console.log(paragrafo.nodeName); // Exibe "P"
```

---

#### **5. `Event`**
- Representa qualquer evento que ocorre na página, como cliques, rolagem, ou digitação de texto.

**Exemplo:**
```javascript
document.getElementById("botao").addEventListener("click", function() {
    alert("Botão clicado!");
});
```

---

### 3. **Principais Métodos do DOM**
1. **Selecionando Elementos:**
   - `getElementById(id)` – Retorna o elemento com o ID especificado.
   - `getElementsByClassName(classe)` – Retorna uma lista de elementos com uma determinada classe.
   - `querySelector(seletor)` – Retorna o primeiro elemento que corresponde ao seletor CSS.

   **Exemplo:**
   ```javascript
   var elemento = document.querySelector("#meuElemento");
   ```

2. **Manipulando Conteúdo:**
   - `textContent` – Define ou obtém o texto de um elemento.
   - `innerHTML` – Define ou obtém o HTML interno de um elemento.

   **Exemplo:**
   ```javascript
   document.getElementById("titulo").textContent = "Novo Título";
   ```

3. **Manipulando Atributos:**
   - `setAttribute(nome, valor)` – Define um atributo.
   - `getAttribute(nome)` – Obtém o valor de um atributo.

   **Exemplo:**
   ```javascript
   document.querySelector("img").setAttribute("alt", "Imagem descritiva");
   ```

---

### 4. **Manipulação do DOM com jQuery**
O jQuery facilita a manipulação do DOM, tornando o código mais simples e legível.

**Exemplos com jQuery:**
```javascript
// Selecionar e alterar texto
$("#meuElemento").text("Texto alterado");

// Adicionar um novo elemento
$("<p>Parágrafo novo</p>").appendTo("body");

// Remover um elemento
$("#elementoRemovido").remove();
```

---