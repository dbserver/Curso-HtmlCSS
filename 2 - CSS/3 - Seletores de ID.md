### Seletores de ID no CSS

O **seletor de ID** é uma forma poderosa e específica de aplicar estilos a um elemento HTML único em uma página. Como os IDs devem ser únicos, ou seja, um mesmo ID não deve ser atribuído a mais de um elemento por página, ele é ideal para estilizar elementos únicos e conferir a eles uma alta prioridade de estilização.

---

#### Como Funciona o Seletor de ID
No CSS, para definir o estilo de um elemento com ID, usamos o símbolo `#` seguido do nome do ID. Este seletor permite uma estilização precisa e, por conta de sua alta especificidade, tem prioridade sobre seletores de elementos e de classes.

**Sintaxe**:
```css
#nomeDoID {
    propriedade: valor;
}
```

**Exemplo**:
```css
#header {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
}
```

Aqui, qualquer elemento HTML que tenha o ID `header` receberá um fundo escuro, texto em branco, padding de 20px e centralização de texto.

No HTML, o ID é atribuído diretamente ao elemento com o atributo `id`:
```html
<div id="header">Bem-vindo ao Meu Site</div>
```

---

#### Exemplos Práticos

1. **Estilizando um Cabeçalho Único**:
   ```css
   #cabecalho {
       background-color: blue;
       padding: 10px;
       font-size: 24px;
       color: white;
   }
   ```
   ```html
   <header id="cabecalho">
       <h1>Meu Website</h1>
   </header>
   ```

2. **Aplicando Estilo em Botão Específico**:
   ```css
   #botaoEnviar {
       background-color: green;
       color: white;
       border: none;
       padding: 10px 20px;
       cursor: pointer;
   }
   ```
   ```html
   <button id="botaoEnviar">Enviar</button>
   ```

---

#### Especificidade do Seletor de ID

O CSS atribui uma **alta especificidade** ao seletor de ID, fazendo com que ele tenha mais prioridade que seletores de classes ou de elementos. Quando há conflitos de estilos entre diferentes seletores, o seletor de ID tem preferência. Esse comportamento torna-o uma boa escolha para elementos que necessitam de um estilo específico e fixo.

**Exemplo de Conflito de Estilos**:
```css
/* Estilo genérico de elemento */
p {
    color: blue;
}

/* Classe aplicável a vários elementos */
.important {
    color: red;
}

/* ID com prioridade mais alta */
#destaque {
    color: green;
}
```

```html
<p id="destaque" class="important">Texto em destaque</p>
```

Nesse caso, o texto do parágrafo será verde, pois o seletor de ID `#destaque` tem mais especificidade que o seletor de classe `.important` e o seletor de elemento `p`.

---

#### Boas Práticas com o Seletor de ID

- **Evite o Uso Excessivo de IDs**: Utilize IDs apenas para elementos únicos. Quando você precisa aplicar estilos a múltiplos elementos, é preferível usar classes.
- **Mantenha IDs Únicos**: IDs devem ser únicos em uma página. Reutilizar o mesmo ID em vários elementos pode gerar comportamentos inconsistentes, dificultando a depuração.
- **Combine IDs com Outros Seletores para Precisão**: Quando precisar de ainda mais precisão, combine o seletor de ID com outros seletores (como pseudo-classes) para criar seletores complexos, se necessário.

---

#### Exemplo Avançado: Seletores de ID Combinados

Você pode combinar seletores de ID com outros para aplicar estilos ainda mais específicos. Isso pode ser útil para aplicar estilos a um elemento específico em um estado específico (por exemplo, hover).

```css
#menu:hover {
    background-color: darkblue;
}

#menu li.active {
    font-weight: bold;
}
```

Neste exemplo, o ID `#menu` muda de cor ao passar o mouse, e o item da lista `<li>` com a classe `active` dentro do `#menu` será exibido em negrito.

---

#### Quando Usar IDs vs. Classes

| Critério                        | ID                                         | Classe                                  |
|---------------------------------|--------------------------------------------|-----------------------------------------|
| **Aplicação**                   | Elemento único                             | Múltiplos elementos                     |
| **Especificidade**              | Alta                                       | Moderada                                |
| **Reutilização**                | Não deve ser reutilizado                   | Pode ser reutilizado                    |
| **Exemplo de Uso**              | Estilos exclusivos de um elemento específico, como um cabeçalho único | Estilos aplicáveis a vários itens, como botões de formulário |

---