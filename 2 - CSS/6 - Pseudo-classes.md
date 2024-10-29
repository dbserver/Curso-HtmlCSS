### Pseudo-classes no CSS

As **pseudo-classes** no CSS são uma forma avançada de aplicar estilos com base no estado de um elemento ou na posição dele em relação a outros elementos, sem a necessidade de adicionar classes ou alterar o HTML. Elas são úteis para criar interações dinâmicas e personalizadas, como mudar a cor de um link ao passar o mouse sobre ele, estilizar o primeiro elemento de uma lista ou definir estilos para formulários com campos inválidos.

---

#### O Que São Pseudo-classes?

Uma pseudo-classe é precedida por dois pontos (`:`) e é adicionada ao seletor do elemento ao qual queremos aplicar o estilo, baseado em um estado específico.

**Sintaxe**:
```css
elemento:pseudo-classe {
    propriedade: valor;
}
```

---

#### Tipos de Pseudo-classes Comuns

As pseudo-classes estão divididas em diferentes categorias, dependendo do tipo de estado ou condição que representam. Vamos explorar as pseudo-classes mais utilizadas e como aplicá-las.

---

### 1. Pseudo-classes de Interatividade com o Usuário

Essas pseudo-classes são utilizadas para aplicar estilos a elementos que reagem a interações do usuário, como `hover`, `focus`, e `active`.

- **`:hover`**: Estiliza um elemento quando o mouse passa sobre ele.
  
  **Exemplo**:
  ```css
  button:hover {
      background-color: blue;
      color: white;
  }
  ```

  Neste caso, ao passar o mouse sobre um botão (`<button>`), ele muda para fundo azul e texto branco.

- **`:focus`**: Aplica estilo a um elemento que está em foco, como um campo de entrada de formulário ao receber o cursor.

  **Exemplo**:
  ```css
  input:focus {
      border: 2px solid green;
  }
  ```

  Aqui, qualquer campo de entrada (`<input>`) em foco terá uma borda verde.

- **`:active`**: Aplica estilo a um elemento enquanto ele está sendo clicado, como um botão.

  **Exemplo**:
  ```css
  a:active {
      color: red;
  }
  ```

  Neste caso, o link (`<a>`) mudará para vermelho enquanto estiver sendo clicado.

---

### 2. Pseudo-classes Estruturais

As pseudo-classes estruturais permitem selecionar elementos com base na estrutura do DOM, como `:first-child`, `:last-child`, e `:nth-child()`.

- **`:first-child`**: Estiliza o primeiro filho de um elemento pai.

  **Exemplo**:
  ```css
  p:first-child {
      font-weight: bold;
  }
  ```

  Aqui, apenas o primeiro parágrafo (`<p>`) de um contêiner será exibido em negrito.

- **`:last-child`**: Aplica estilo ao último filho de um elemento pai.

  **Exemplo**:
  ```css
  p:last-child {
      color: gray;
  }
  ```

  Neste exemplo, o último parágrafo dentro de qualquer contêiner ficará cinza.

- **`:nth-child(n)`**: Estiliza o enésimo filho de um elemento pai, onde `n` pode ser um número, palavra-chave, ou expressão.

  **Exemplo**:
  ```css
  li:nth-child(2) {
      color: blue;
  }
  ```

  Aqui, o segundo item de cada lista (`<li>`) terá o texto em azul.

- **`:nth-child(odd)` e `:nth-child(even)`**: Aplica estilos em elementos alternados. `odd` seleciona elementos em posições ímpares, e `even` seleciona os em posições pares.

  **Exemplo**:
  ```css
  tr:nth-child(odd) {
      background-color: #f2f2f2;
  }
  ```

  Esse código aplica um fundo cinza claro a linhas ímpares de uma tabela.

---

### 3. Pseudo-classes de Formulário

As pseudo-classes de formulário ajudam a estilizar elementos de formulário com base em seus estados, como `:checked`, `:disabled`, e `:valid`.

- **`:checked`**: Estiliza caixas de seleção (`<input type="checkbox">`) ou botões de rádio (`<input type="radio">`) que estão marcados.

  **Exemplo**:
  ```css
  input[type="checkbox"]:checked {
      border: 2px solid green;
  }
  ```

  Aqui, qualquer caixa de seleção marcada terá uma borda verde.

- **`:disabled`**: Aplica estilo a elementos de formulário que estão desativados.

  **Exemplo**:
  ```css
  input:disabled {
      background-color: #ddd;
      color: #666;
  }
  ```

  Este estilo altera a cor do fundo e do texto dos campos desativados para indicar que não estão disponíveis para edição.

- **`:valid` e `:invalid`**: Aplica estilos com base na validade do conteúdo do campo. `:valid` se o valor estiver correto, e `:invalid` se o valor estiver incorreto (baseado nas restrições de validação do campo).

  **Exemplo**:
  ```css
  input:valid {
      border: 2px solid blue;
  }
  
  input:invalid {
      border: 2px solid red;
  }
  ```

  Campos válidos terão uma borda azul, enquanto campos inválidos terão uma borda vermelha.

---

### 4. Pseudo-classes de Links

As pseudo-classes de link permitem aplicar estilos diferentes dependendo do estado do link, como `:link`, `:visited`, `:hover`, e `:active`.

- **`:link`**: Estiliza links que ainda não foram visitados.

  **Exemplo**:
  ```css
  a:link {
      color: blue;
  }
  ```

  Links ainda não visitados terão a cor azul.

- **`:visited`**: Aplica estilo a links que já foram visitados.

  **Exemplo**:
  ```css
  a:visited {
      color: purple;
  }
  ```

  Links já visitados pelo usuário aparecerão na cor roxa.

---

### 5. Pseudo-classes de Negação (`:not()`)

A pseudo-classe `:not()` permite selecionar todos os elementos que **não** correspondem a um seletor específico. Ela é útil para aplicar estilos de exceção.

**Exemplo**:
```css
button:not(.primary) {
    background-color: gray;
}
```

Esse exemplo aplica um fundo cinza a todos os botões (`<button>`) que **não** têm a classe `primary`.

---

### Exemplo Completo de Pseudo-classes em um Formulário

Para ilustrar o uso de várias pseudo-classes, vamos criar um formulário com diferentes estilos para elementos em estados distintos.

**CSS**:
```css
/* Estilizando links */
a:link {
    color: blue;
}
a:visited {
    color: purple;
}
a:hover {
    color: green;
}
a:active {
    color: red;
}

/* Campos de formulário */
input:focus {
    border-color: orange;
}

input:invalid {
    border-color: red;
}

input:valid {
    border-color: green;
}

input:disabled {
    background-color: #eee;
}

button:hover {
    background-color: darkblue;
    color: white;
}

/* Estilizando itens de lista alternados */
li:nth-child(odd) {
    background-color: #f9f9f9;
}

li:nth-child(even) {
    background-color: #e9e9e9;
}
```

**HTML**:
```html
<form>
    <label for="nome">Nome:</label>
    <input type="text" id="nome" required>

    <label for="email">Email:</label>
    <input type="email" id="email" required>

    <label for="senha">Senha:</label>
    <input type="password" id="senha" required>

    <button type="submit">Enviar</button>
</form>

<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

---