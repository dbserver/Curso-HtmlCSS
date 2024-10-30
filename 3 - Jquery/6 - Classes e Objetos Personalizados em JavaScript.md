## **Classes e Objetos Personalizados em JavaScript**

### 1. **Introdução aos Objetos**
   - No JavaScript, tudo é um objeto, como `Window`, `Document`, `Date`, etc.
   - Objetos podem armazenar propriedades (variáveis) e métodos (funções).

   **Exemplo de Objeto Integrado:**
   ```javascript
   var dataAtual = new Date();
   console.log(dataAtual.getFullYear()); // Exibe o ano atual
   ```

---

### 2. **Criação de Classes em JavaScript**
   - Antes da introdução do ES6, os objetos eram criados com funções construtoras.
   - A partir do ES6, JavaScript permite criar classes com a palavra-chave `class`.

   **Exemplo de Classe (ES6):**
   ```javascript
   class Carro {
       constructor(placa) {
           this.placa = placa;
       }

       getPlaca() {
           return this.placa;
       }

       setPlaca(novaPlaca) {
           this.placa = novaPlaca;
       }
   }
   ```

---

### 3. **Instanciando Objetos a partir de Classes**
   - Para criar um objeto de uma classe, utiliza-se o operador `new`.

   **Exemplo de Instância:**
   ```javascript
   let meuCarro = new Carro("ABC-1234");
   console.log(meuCarro.getPlaca()); // Saída: ABC-1234

   meuCarro.setPlaca("XYZ-9876");
   console.log(meuCarro.getPlaca()); // Saída: XYZ-9876
   ```

---

### 4. **Métodos e Encapsulamento**
   - Métodos são funções definidas dentro da classe.
   - Utilizando **getters** e **setters**, é possível controlar o acesso às propriedades.

---

### 5. **Uso de Funções Construtoras (JavaScript Pré-ES6)**
   - Antes do ES6, uma forma comum de criar objetos era com funções construtoras.

   **Exemplo:**
   ```javascript
   function Carro(placa) {
       this.placa = placa;

       this.getPlaca = function() {
           return this.placa;
       };

       this.setPlaca = function(novaPlaca) {
           this.placa = novaPlaca;
       };
   }

   let carro1 = new Carro("XXX-0000");
   console.log(carro1.getPlaca()); // Saída: XXX-0000
   ```

---

### 6. **Herança em Classes JavaScript**
   - Classes em JavaScript permitem herança com a palavra-chave `extends`.

   **Exemplo de Herança:**
   ```javascript
   class Veiculo {
       constructor(tipo) {
           this.tipo = tipo;
       }

       getTipo() {
           return this.tipo;
       }
   }

   class Carro extends Veiculo {
       constructor(placa) {
           super("Carro"); // Chama o construtor da classe pai
           this.placa = placa;
       }

       getPlaca() {
           return this.placa;
       }
   }

   let carro2 = new Carro("AAA-1111");
   console.log(carro2.getTipo()); // Saída: Carro
   console.log(carro2.getPlaca()); // Saída: AAA-1111
   ```

---

### 7. **Expondo Métodos com `this`**
   - Para que métodos internos fiquem acessíveis ao objeto criado, é necessário expor os métodos com `this`.

   **Exemplo:**
   ```javascript
   function Carro() {
       var placa = "XXX-0000";

       this.getPlaca = function() {
           return placa;
       };

       this.setPlaca = function(novaPlaca) {
           placa = novaPlaca;
       };
   }

   let carro3 = new Carro();
   console.log(carro3.getPlaca()); // Saída: XXX-0000
   carro3.setPlaca("BBB-2222");
   console.log(carro3.getPlaca()); // Saída: BBB-2222
   ```

---

### 8. **Resumo**
   - **Objetos personalizados** permitem estruturar melhor o código, encapsulando dados e funções.
   - **Classes** e **funções construtoras** são as principais formas de criar objetos.
   - **Herança** facilita a reutilização de código, e o uso de **getters** e **setters** garante o encapsulamento adequado.

---