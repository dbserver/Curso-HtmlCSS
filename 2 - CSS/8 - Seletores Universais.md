### 8. Seletores Universais

**Definição:**
O seletor universal (`*`) é um tipo de seletor CSS que seleciona todos os elementos de um documento. Ele é útil quando você deseja aplicar um estilo a todos os elementos, independentemente de seu tipo ou classe.

**Uso do Seletor Universal:**
O seletor universal pode ser utilizado para redefinir estilos básicos ou para aplicar estilos gerais a todos os elementos de uma página. No entanto, é importante usá-lo com cautela, pois ele pode afetar a performance do seu site, especialmente em documentos grandes.

**Exemplo de Uso:**

```css
/* Definindo uma margem e preenchimento padrão para todos os elementos */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Para incluir bordas e preenchimento na largura total do elemento */
}
```

### Vantagens do Seletor Universal

1. **Aplicação Global:**
   - O seletor universal é útil para aplicar estilos globais, como reset de margens e preenchimentos, garantindo que todos os elementos comecem com o mesmo estilo básico.

2. **Simplicidade:**
   - Usar `*` é uma maneira rápida e fácil de aplicar uma regra a todos os elementos sem precisar especificar cada um deles.

3. **Consistência:**
   - Ajuda a manter a consistência do estilo em todo o documento.

### Desvantagens do Seletor Universal

1. **Performance:**
   - O uso do seletor universal pode impactar a performance, especialmente em páginas com muitos elementos, pois o navegador precisa aplicar a regra a todos os elementos.

2. **Especificidade:**
   - O seletor universal possui baixa especificidade, o que pode causar conflitos com outras regras de estilo. Se você tiver estilos específicos para elementos, eles podem não ser aplicados conforme esperado.

3. **Difícil de Gerenciar:**
   - Ao usar o seletor universal indiscriminadamente, pode ser difícil gerenciar estilos, especialmente em projetos grandes e complexos, onde muitos elementos podem ser afetados.

### Boas Práticas ao Usar o Seletor Universal

- **Utilizar com Moderação:**
  - Use o seletor universal apenas quando necessário e tenha cuidado para não impactar a performance do site.

- **Combinar com Outros Seletores:**
  - É comum usar o seletor universal em conjunto com outros seletores para limitar seu escopo. Por exemplo, você pode aplicar estilos a todos os elementos dentro de um contêiner específico:

```css
.container * {
    font-family: Arial, sans-serif; /* Aplica a fonte apenas aos elementos dentro da classe .container */
}
```

- **Usar em Conjunto com Reset CSS:**
  - O seletor universal é frequentemente usado em conjunto com uma "reset CSS" para garantir que todos os elementos tenham uma aparência consistente ao serem renderizados por diferentes navegadores.

### Exemplo Completo

Aqui está um exemplo completo de como o seletor universal pode ser usado em um estilo básico de página:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Exemplo de Seletor Universal</title>
    <style>
        /* Reset básico usando seletor universal */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
        }

        header {
            background: #4CAF50;
            color: white;
            padding: 15px;
            text-align: center;
        }

        section {
            padding: 20px;
        }

        footer {
            text-align: center;
            padding: 10px;
            background: #4CAF50;
            color: white;
        }
    </style>
</head>
<body>
    <header>
        <h1>Bem-vindo ao Meu Site</h1>
    </header>
    <section>
        <h2>Sobre Nós</h2>
        <p>Este é um exemplo de uso do seletor universal em CSS.</p>
    </section>
    <footer>
        <p>&copy; 2024 Meu Site</p>
    </footer>
</body>
</html>
```
