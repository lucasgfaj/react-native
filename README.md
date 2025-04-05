# Atividades

1. **Criação do Projeto**  
    - Crie um projeto novo usando **Expo**, com o template **TypeScript blank**.
    - No projeto, crie uma pasta chamada `components`.

2. **Componente Login**  
    - Na pasta `components`, crie um componente funcional chamado `Login.tsx`.  
      > Dica: Você pode usar o atalho `rnf` caso tenha [esta](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)  extensão instalada no VSCode.
    - Importe o componente `Login.tsx` no componente principal (`App.tsx`) e adicione-o dentro de uma `View` para que seja renderizado.

3. **TextInput e useState**  
    - No componente `Login.tsx`, crie dois `TextInput`, cada um com um `useState`.  
      - Nomeie os estados como `username` e `password`.  
      > Dica: Acesse a [documentação do TextInput](https://reactnative.dev/docs/textinput) para entender como ele funciona.  
      > Dica: Para o campo `password`, utilize a propriedade `secureTextEntry` para ocultar os caracteres digitados.

4. **Validação de Entrada**  
    - Certifique-se de que os campos de entrada de texto estão funcionando e que os valores estão sendo armazenados corretamente nos estados `username` e `password`.

5. **Botão de Ação**  
    - Adicione um `Button` no componente `Login.tsx`.  
    - Configure o botão para que, ao ser pressionado, imprima no terminal (`console.log`) os valores dos estados `username` e `password`.

6. **Entrega e Apresentação**  
    - Implemente a atividade conforme descrito.  
    - Hospede a solução em um repositório público no **GitHub**.  
    - Envie o link do repositório no **Moodle** como registro para a disciplina.  
    - Durante uma das aulas, apresente a solução ao professor.  
      > **Nota:** Somente serão avaliadas as soluções apresentadas em aula. O envio do link no Moodle é apenas para registro.
