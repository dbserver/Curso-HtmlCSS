## **Imagens e Mídia**

### **1. Introdução às Imagens em HTML**
As imagens desempenham um papel crucial em páginas da web, pois ajudam a transmitir informações, atrair a atenção dos usuários e melhorar a estética visual. Em HTML, as imagens são inseridas usando a tag `<img>`, que permite incluir uma variedade de formatos de imagem.

### **2. Inserindo Imagens**
A sintaxe básica para incluir uma imagem em uma página HTML é a seguinte:

```html
<img src="URL_da_imagem" alt="Texto alternativo" title="Título opcional">
```

- **src:** Especifica o caminho da imagem. Pode ser um URL absoluto ou relativo.
- **alt:** Fornece uma descrição da imagem, que é exibida se a imagem não puder ser carregada. É fundamental para acessibilidade e SEO.
- **title:** (opcional) Adiciona um título que aparece como uma dica quando o mouse é passado sobre a imagem.

### **3. Exemplo de Imagem**
Para ilustrar como inserir uma imagem, considere o seguinte exemplo:

```html
<img src="https://www.exemplo.com/imagem.jpg" alt="Descrição da imagem" title="Título da imagem">
```

### **4. Atributos Adicionais da Tag `<img>`**
Além dos atributos básicos, a tag `<img>` pode incluir outros atributos que ajudam a controlar a apresentação:

- **width e height:** Controlam a largura e a altura da imagem. Esses valores podem ser especificados em pixels ou porcentagens.

```html
<img src="imagem.jpg" alt="Descrição" width="300" height="200">
```

- **style:** Permite a aplicação de CSS inline. Exemplo:

```html
<img src="imagem.jpg" alt="Descrição" style="border: 2px solid black;">
```

### **5. Imagens de Fundo**
Embora não sejam inseridas diretamente como conteúdo, as imagens de fundo podem ser adicionadas a elementos HTML usando CSS. Por exemplo, você pode aplicar uma imagem de fundo a uma `<div>`:

```css
<style>
  .container {
      background-image: url('background.jpg');
      background-size: cover;
      height: 400px; /* altura da div */
  }
</style>
```

### **6. Inserindo Mídia: Vídeos e Áudios**
HTML também permite a inclusão de mídias como vídeos e áudios usando as tags `<video>` e `<audio>`.

#### **6.1. Vídeos**
Para inserir um vídeo, a sintaxe básica é:

```html
<video controls>
    <source src="video.mp4" type="video/mp4">
    Seu navegador não suporta a tag de vídeo.
</video>
```

- **controls:** Adiciona controles para reprodução (play, pause, volume).
- **source:** Especifica o arquivo de vídeo e seu tipo.

#### **6.2. Áudios**
A tag `<audio>` é usada da seguinte forma:

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Seu navegador não suporta a tag de áudio.
</audio>
```

- **controls:** Similar ao vídeo, permite ao usuário controlar a reprodução.

### **7. Acessibilidade e Boas Práticas**
- Sempre forneça um texto alternativo significativo para imagens, que ajude usuários com deficiência visual a entender o conteúdo.
- Utilize formatos de imagem otimizados (como JPEG, PNG, WebP) para garantir tempos de carregamento rápidos.
- Teste a reprodução de vídeos e áudios em diferentes navegadores e dispositivos para garantir compatibilidade.

---