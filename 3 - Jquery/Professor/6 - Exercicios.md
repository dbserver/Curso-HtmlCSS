Aqui estão os códigos jQuery para cada um dos exercícios que você descreveu. Vou fornecer o código completo para cada exercício, incluindo a parte jQuery.

### Exercício 1: Seleção de Elementos

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício 1</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#meuBotao').click(function() {
                $('#paragrafo').text('Texto atualizado');
                $('#minhaLista').append('<li>Item 2</li>');
            });
        });
    </script>
</head>
<body>
    <p id="paragrafo">Texto original</p>
    <ul id="minhaLista">
        <li>Item 1</li>
    </ul>
    <button id="meuBotao">Atualizar</button>
</body>
</html>
```

---

### Exercício 2: Manipulação de CSS

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício 2</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#mudarEstilo').click(function() {
                $('#meuElemento').css({
                    'background-color': 'blue',
                    'font-size': '24px',
                    'color': 'white'
                });
            });
        });
    </script>
</head>
<body>
    <div id="meuElemento">Texto a ser alterado</div>
    <button id="mudarEstilo">Mudar Estilo</button>
</body>
</html>
```

---

### Exercício 3: Eventos

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício 3</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#alertarValor').click(function() {
                alert($('#campoTexto').val());
            });

            $('#campoTexto').mouseenter(function() {
                $(this).css('background-color', 'lightblue');
            }).mouseleave(function() {
                $(this).css('background-color', '');
            });
        });
    </script>
</head>
<body>
    <input type="text" id="campoTexto" placeholder="Digite algo...">
    <button id="alertarValor">Alertar Valor</button>
</body>
</html>
```

---

### Exercício 4: Manipulação de Formulários

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício 4</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#meuFormulario').submit(function(event) {
                event.preventDefault(); // Evita o envio do formulário
                var nome = $('#campoNome').val();
                if (nome.trim() === '') {
                    alert('O campo de nome não pode estar vazio.');
                } else {
                    alert('Nome enviado: ' + nome);
                }
            });
        });
    </script>
</head>
<body>
    <form id="meuFormulario">
        <input type="text" id="campoNome" placeholder="Digite seu nome">
        <button type="submit">Enviar</button>
    </form>
</body>
</html>
```

---

### Exercício 5: AJAX

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício 5</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#carregarDados').click(function() {
                $.ajax({
                    url: 'https://jsonplaceholder.typicode.com/todos/1',
                    method: 'GET',
                    success: function(data) {
                        console.log(data);
                    },
                    error: function() {
                        console.error('Erro ao carregar os dados.');
                    }
                });
            });
        });
    </script>
</head>
<body>
    <button id="carregarDados">Carregar Dados</button>
</body>
</html>
```

Esses exemplos devem funcionar conforme o esperado e cobrem os objetivos de cada exercício. Se precisar de mais ajuda ou de ajustes em algum código, é só avisar!