### Seletores de Atributo no CSS

Os **seletores de atributo** são um tipo poderoso de seletor no CSS que permitem aplicar estilos a elementos HTML com base em atributos específicos, como `type`, `href`, `title`, entre outros. Esses seletores são especialmente úteis quando se deseja estilizar campos de formulários, links, ou qualquer elemento que possua atributos específicos, sem precisar adicionar classes ou IDs adicionais.

---

#### Como Funcionam os Seletores de Atributo

No CSS, os seletores de atributo são definidos entre colchetes (`[]`). Eles podem selecionar elementos que possuem um atributo específico ou valores de atributo específicos. Os seletores de atributo têm várias variações para permitir um controle mais detalhado sobre os elementos a serem estilizados.

**Sintaxe Básica**:
```css
elemento[atributo] {
    propriedade: valor;
}
```

**Exemplo**:
```css
a[target] {
    color: blue;
}
```
Esse seletor aplica um estilo a todos os links `<a>` que possuem o atributo `target`.

---

#### Tipos de Seletores de Atributo

1. **Seletor de Atributo Simples**
   - Seleciona elementos que possuem um atributo específico, independentemente do valor.
   - **Exemplo**:
     ```css
     input[required] {
         border: 2px solid red;
     }
     ```
     Esse código aplica uma borda vermelha a todos os campos de entrada (`<input>`) que possuem o atributo `required`.

---

2. **Seletor de Atributo com Valor Específico**
   - Seleciona elementos onde o atributo possui exatamente o valor especificado.
   - **Exemplo**:
     ```css
     input[type="text"] {
         background-color: lightyellow;
     }
     ```
     Aqui, apenas os campos de entrada do tipo `text` terão um fundo amarelo claro.

---

3. **Seletor de Atributo que Contém uma Palavra**
   - Seleciona elementos onde o atributo contém uma palavra específica. Usa o operador `~=`.
   - **Exemplo**:
     ```css
     [title~="importante"] {
         color: red;
     }
     ```
     Esse seletor aplica a cor vermelha ao texto de elementos que contêm a palavra "importante" no atributo `title`, mesmo que o atributo `title` tenha outras palavras, como `title="muito importante"`.

---

4. **Seletor de Atributo que Começa com um Valor Específico**
   - Seleciona elementos onde o valor do atributo começa com um valor específico. Usa o operador `^=`.
   - **Exemplo**:
     ```css
     a[href^="https"] {
         font-weight: bold;
     }
     ```
     Esse estilo aplica negrito aos links que começam com `https`, indicando links seguros.

---

5. **Seletor de Atributo que Termina com um Valor Específico**
   - Seleciona elementos onde o valor do atributo termina com um valor específico. Usa o operador `$=`.
   - **Exemplo**:
     ```css
     img[src$=".jpg"] {
         border: 1px solid black;
     }
     ```
     Esse seletor aplica uma borda a todas as imagens com o atributo `src` terminando em `.jpg`.

---

6. **Seletor de Atributo que Contém um Valor Específico**
   - Seleciona elementos onde o valor do atributo contém uma sequência específica de caracteres. Usa o operador `*=`.
   - **Exemplo**:
     ```css
     a[href*="example"] {
         color: green;
     }
     ```
     Esse estilo aplica a cor verde a todos os links (`<a>`) que contêm a palavra `example` no `href`, como `https://example.com`.

---

#### Exemplo Completo: Estilizando um Formulário com Seletores de Atributo

Com os seletores de atributo, podemos aplicar estilos diferenciados a um formulário de maneira específica e organizada.

```css
input[type="text"] {
    border: 1px solid blue;
    padding: 5px;
    margin-bottom: 10px;
}

input[type="email"] {
    border: 1px solid green;
    padding: 5px;
    margin-bottom: 10px;
}

input[type="password"] {
    border: 1px solid red;
    padding: 5px;
    margin-bottom: 10px;
}

input[required] {
    background-color: #f9f9f9;
}

button[type="submit"] {
    background-color: darkblue;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}
```

**HTML**:
```html
<form>
    <input type="text" required placeholder="Nome">
    <input type="email" required placeholder="Email">
    <input type="password" required placeholder="Senha">
    <button type="submit">Enviar</button>
</form>
```

Neste exemplo, cada campo recebe um estilo específico com base em seu `type` e, adicionalmente, o estilo para campos `required` destaca os campos obrigatórios com um fundo cinza claro.

---

#### Especificidade dos Seletores de Atributo

Os seletores de atributo têm a mesma especificidade que seletores de classes. Isso significa que eles têm prioridade sobre seletores de elementos, mas são superados por seletores de ID. Esse comportamento pode ser útil ao combinar seletores de atributo com outros tipos de seletores para obter um controle mais preciso.

**Exemplo de Especificidade**:
```css
/* Estilo genérico */
button {
    background-color: gray;
}

/* Mais específico que o seletor de elemento */
button[type="submit"] {
    background-color: blue;
}
```

Aqui, o botão de envio (`button[type="submit"]`) terá o fundo azul, enquanto outros botões terão o fundo cinza.

---

#### Boas Práticas com Seletores de Atributo

- **Evite Usar Seletores Muito Complexos**: A complexidade dos seletores de atributo pode afetar o desempenho, especialmente em documentos grandes.
- **Use Seletores de Atributo Quando Necessário**: Utilize seletores de atributo quando classes e IDs não forem suficientes ou para estilizar elementos específicos, como campos de formulário.
- **Combinações com Outros Seletores**: É possível combinar seletores de atributo com classes, IDs e outros seletores para maior precisão.

**Exemplo de Combinação**:
```css
input[type="text"].form-control {
    font-size: 16px;
    color: darkblue;
}
```

---