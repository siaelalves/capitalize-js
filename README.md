# capitalize-js
Função em JS que converte o texto em modo capitalizado, onde apenas a primeira letra de cada palavra fica em maiúscula.

# Como Instalar

1. Faça do download do arquivo;
2. Inclua o arquivo `.js` na seção `<head>` do seu site usando o modelo abaixo:
   ```html
   <script src="capitalize.js"></script>
   ```
3. Substitua "capitalize.js" pelo caminho relativo dentro de seu projeto;

# Argumentos

A função `capitalize()` aceita 3 argumentos:

- `sentence` **String.** Sentença, frase ou palavra a ser convertida.
- `minLenght` **Number.** Número mínimo de letras que as palavras dentro de `sentence` para que ela seja convertida. Palavras com tamanhos superior ou igual não serão convertidas.
- `exceptions` **Array.** Lista de palavras a serem excluídas da capitalização. Aceita um número indefinido de argumentos. Cada argumento precisa ser do tipo `string`. As palavras dessa lista serão comparadas incluindo maiúsculas e minúsculas.

Essa função retorna uma `String` com o mesmo valor do argumento `sentence` com a primeira letra de cada palavra convertida para maisúcula.

# Exemplo

```js
capitalize("aprenda python, javaScript e PHP", 0, "e");
```

O código acima converterá a `string` retornará especificada para outra onde cada palavra terá sua primeira letra em maiúscula, desde que a palavra seja maior do que 0 caracteres e não seja igual a "e". O resultado dessa função será:

```js
// Aprenda Python, JavaScript e PHP
```

# Mudanças

- 9 fev 2025:
    - Envio inicial do código da função
