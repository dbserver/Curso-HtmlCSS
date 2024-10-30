### 9. **Seletores de Grupo**

Os **seletores de grupo** permitem aplicar o mesmo conjunto de estilos a múltiplos elementos HTML ao mesmo tempo. Isso não apenas reduz a repetição de código, mas também facilita a manutenção do CSS. Os seletores de grupo são separados por vírgulas e funcionam de forma similar a selecionar um único elemento, mas abrangem vários elementos simultaneamente.

#### **Sintaxe**
```css
seletor1, seletor2, seletor3 {
    propriedade: valor;
}
```

#### **Exemplo**
```css
h1, h2, h3 {
    color: purple;
    font-family: Arial, sans-serif;
}
```
Neste exemplo, todos os elementos `<h1>`, `<h2>`, e `<h3>` terão a cor do texto roxa e a fonte Arial. Se um desses elementos for alterado no futuro, a alteração será refletida em todos os elementos agrupados, facilitando a manutenção.

#### **Práticas Recomendadas**
1. **Uso Eficiente**: Utilize seletores de grupo sempre que aplicar o mesmo estilo a múltiplos elementos. Isso torna o CSS mais limpo e fácil de ler.
   
2. **Consistência Visual**: Ao agrupar seletores, você pode garantir uma aparência consistente em toda a página, facilitando o design responsivo.

3. **Evite Excessos**: Embora seja tentador agrupar muitos seletores, mantenha-os relacionados para que o código permaneça lógico e fácil de entender. 

4. **Desempenho**: Seletores de grupo simples ajudam na performance, já que o navegador pode aplicar os estilos de maneira mais eficiente. Evite misturar seletores complexos com seletores de grupo.

#### **Exemplo Adicional**
Imagine que você está criando estilos para botões e deseja que todos tenham uma aparência semelhante:

```css
.button-primary, .button-secondary, .button-tertiary {
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 16px;
    color: white;
}

.button-primary {
    background-color: blue;
}

.button-secondary {
    background-color: green;
}

.button-tertiary {
    background-color: grey;
}
```
Nesse exemplo, todos os botões compartilham algumas propriedades comuns (padding, border-radius, font-size e cor do texto), enquanto as cores de fundo são definidas separadamente. Isso ajuda a manter o código organizado e a aplicar alterações em um único lugar.
