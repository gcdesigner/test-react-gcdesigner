# Code Review - Breadcrumb

Análise de implementação do component `Breadcrumb`

## Improvements

- No retorno do `map` envolver o componte com um `<Link to={path} key={path}>` do react navigation para direcionar o usuário para a nova rota ao clicar;
- Trocar `<span>-</span>` por `<span>{'>'}</span>` ou `<span>&#62;</span>`;
- É interessante certificar de que os elementos estarão verticalmente centralizados. Para isso podemos adicionar o `items-center` nas 2 divs que recebem o `flex`;
- Uma boa prática, para evitar `keys` duplicadas, seria interessante concatenar o `index` e o `path`, algo como: `<Link to={path} key={path + index}>`. Por maios que seja uma regra não ter paths duplicados, a final isso geraria um erro na aplicação, isso pode evitar problemas de renderização por parte do React.
- Para manipular classes `tailwind` no `javascript`, é interessante trabalhamos com libraries combinam o `tailwind CSS` + `React`.
  - Para isso, podemos utilizar o famoso `cn()`, que é uma função que combina a library `tailwind-merge` junto com a `clsx`.
  - Dessa forma podemos melhorar o componente criando uma condição de estilo no texto do path: `<span className={cn('flex gap-2', 'font-bold': currentPath === path)}>...</span>`

```js
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- Para adicionar um estilo ao texto no momento do clique, podemos adicionar o estilo: `className={cn(..., 'active:underline')}`
- Sobre a tipagem do componente, caso não seja um padrão do projeto, poderia ter sido criada no próprio componente, o que facilita a sua leitura.
- Uma boa prática também é utilizar padrões de importação, como: `import type { BreadcrumbProps } from "./types"`
- Outro ponto que levo em consideração na criação de componentes, é a sua forma de `export`. Ao invés de criar componentes com `export default`, prefiro criar apenas como uma function ou `cont component = () => {}`, pois assim evito a renomeação de componentes e me ajuda quando preciso localizar algum componente específico, sem contar que o intelisense do vscode, me parece, trabalha melhor dessa forma.

## Doubts

- A regra de negócio: Quando o usuário navegar para uma etapa, o texto fica com um underline
  - ficou um pouco confuso. Não entendi se é para deixar underline no `:active` ou no `:visited`. E como a etapa atual já fica bold, não entendi o sentido do underline.
  - de qualquer forma deixei uma explicação no improvements do que podemos fazer para deixar o undeline no `:active`
