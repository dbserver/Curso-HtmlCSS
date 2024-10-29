Aqui estão os códigos HTML e CSS para cada um dos exercícios propostos sobre seletores CSS.

### Exercício 1: Seletores de Elemento

**HTML:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Exercício 1</title>
</head>
<body>
    <h1>Título Principal</h1>
    <h2>Subtítulo</h2>
    <p>Este é um parágrafo de exemplo.</p>
    <p>Outro parágrafo para teste.</p>
</body>
</html>
```

**CSS (`styles.css`):**
```css
h1 {
    color: blue;
}

p {
    font-size: 18px;
}

h2 {
    background-color: yellow;
}
```

---

### Exercício 2: Seletores de Classe

**HTML:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Exercício 2</title>
</head>
<body>
    <div class="highlight">Este é um destaque.</div>
    <p class="highlight">Este texto também será destacado.</p>
    <span class="highlight">Outro texto destacado.</span>
</body>
</html>
```

**CSS (`styles.css`):**
```css
.highlight {
    background-color: orange;
    color: white;
}
```

---

### Exercício 3: Seletores de ID

**HTML:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Exercício 3</title>
</head>
<body>
    <div id="main-content">Este é o conteúdo principal da página.</div>
</body>
</html>
```

**CSS (`styles.css`):**
```css
#main-content {
    border: 2px solid black;
    padding: 20px;
    color: gray;
}
```

---

### Exercício 4: Seletores de Atributo

**HTML:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Exercício 4</title>
</head>
<body>
    <form>
        <input type="text" placeholder="Texto">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Senha">
    </form>
</body>
</html>
```

**CSS (`styles.css`):**
```css
input[type="text"] {
    border: 1px solid blue;
}

input[type="email"] {
    background-color: lightgreen;
}
```

---

### Exercício 5: Seletores Combinados

**HTML:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Exercício 5</title>
</head>
<body>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    <ul>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
</body>
</html>
```

**CSS (`styles.css`):**
```css
ul li {
    background-color: gray;
}

ul > li {
    color: blue;
}
```

---

### Exercício 6: Pseudo-classes

**HTML:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Exercício 6</title>
</head>
<body>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
</body>
</html>
```

**CSS (`styles.css`):**
```css
a:hover {
    color: red;
}

a:visited {
    color: purple;
}
```

---

### Exercício 7: Pseudo-elementos

**HTML:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Exercício 7</title>
</head>
<body>
    <p>Este é um parágrafo de exemplo.</p>
    <p>Mais um parágrafo para teste.</p>
</body>
</html>
```

**CSS (`styles.css`):**
```css
p::first-line {
    font-weight: bold;
}

p::before {
    content: "Nota: ";
    font-weight: bold;
}
```

---

### Exercício 8: Seletores Universais e de Grupo

**HTML:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Exercício 8</title>
</head>
<body>
    <h1>Título 1</h1>
    <h2>Título 2</h2>
    <p>Este é um parágrafo.</p>
    <span>Texto em um span.</span>
</body>
</html>
```

**CSS (`styles.css`):**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1, h2, p {
    color: blue;
}
```

---

### Exercício 9: Especificidade e Importância

**HTML:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Exercício 9</title>
</head>
<body>
    <p id="special" class="highlight">Texto com ID e classe.</p>
</body>
</html>
```

**CSS (`styles.css`):**
```css
p {
    color: black; /* Prioridade baixa */
}

.highlight {
    color: blue; /* Prioridade média */
}

#special {
    color: green; /* Maior prioridade */
}
```

---