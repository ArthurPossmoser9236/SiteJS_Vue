Documentação do Processo

Aqui a gente vai contar de um jeito bem direto como transformamos nosso site estático em um projeto React super organizado.

1. Introdução

A ideia foi pegar o site da loja que era só HTML e CSS e deixar ele no React. Assim fica tudo em pedacinhos (componentes), mais fácil de mexer e atualizar.


2. Passo a Passo da Conversão

2.1 Começando o Projeto

Usei o Vite porque é rápido e prático.
Rodei esses comandos:
  npm create vite@latest loja-react -- --template react
  cd loja-react
  npm install
  npm run dev
    

2.2 Criando os Componentes

Separei o site em partes:

- Header: a parte de cima com logo e menu.
- Banner: a imagem principal.
- ProductList: onde a lista de produtos aparece.
  - ProductCard: cada cartãozinho de produto.
- Footer: rodapé com contatos e redes sociais.

Cada componente tem sua pasta em `src/components`, tipo `src/components/Header/Header.jsx` e o CSS junto.

2.3 Estilos e Responsividade

- Usei o CSS que já existia, só adaptei pros componentes.
- Cada componente importa seu próprio `.css` pra não dar conflito.
- Usei `rem`, `%` e media queries pra deixar o site responsivo.

2.4 Lista de Produtos

- Criei um arquivo `src/data/products.js` com um array de produtos.
- No `ProductList`, fiz um `products.map` pra renderizar cada `ProductCard`:
    jsx
  import products from "../../data/products";

  function ProductList() {
    return (
      <div className="product-list">
        {products.map(prod => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </div>
    );
  }
    

2.5 Testes e Ajustes Finais

- Testei tudo pra ver se cada parte aparece direitinho.
- Ajustei margens e alinhamento.
- Testei em vários tamanhos de tela.

3. Como Rodar o Projeto

1. Clone o repositório:
   git clone https://github.com/usuario/loja-react.git
    
2. Entre na pasta:
   cd loja-react
    
3. Instale as dependências:
   npm install
    
4. Rode:
   npm run dev

4. O Que Aprendi

Desafio: organizar tudo em pastas e não quebrar o CSS.
Ganhou: prática real de React e Vite, código mais limpo e fácil de manter.

