# Documentação do Endpoint

Endpoint para cadastro de usuário

## Método

`POST /api/user`

## Parâmetros de URL

- nenhum pois se trata de um cadastro
- sem especificação se iremos utilizar a mesma tela para edição

## Body

- `type` - number (obrigatório) | default 0 |
  - enum: { 0: PERSON, 1: COMPANY }
- `cnpj` string (obrigatório se kind === 1)
- `cpf` string (obrigatório)
- `name` number (obrigatório)
- `mobile` number (obrigatório)
- `phone` number (obrigatório)
- `email` number (obrigatório)
- `address.zipcode` number (obrigatório)
- `address.street` number (obrigatório)
- `address.number` number (obrigatório)
- `address.complement` number (obrigatório)
- `address.city` number (obrigatório)
- `address.neighborhood` number (obrigatório)
- `address.state` number (obrigatório)
- `terms` boolean (obrigatório)

## Respostas

### Sucesso (200 OK)

Retorna um objeto JSON com os detalhes do usuário.

- Mensagem: 'Cadastrado com sucesso! Número de protocolo, [protocol.number]'

Exemplo de resposta:

```json
{
  "id": 123,
  "type": 0,
  "cpf": "00871221110",
  "name": "João da Silva",
  "mobile": "00871221110",
  "phone": "00871221110",
  "email": "joao@example.com",
  "address": {
    "zipcode": "71000000",
    "street": "Setor Habitacional João da Silva",
    "number": "10",
    "complement": "Casa",
    "city": "Brasília",
    "neighborhood": "Guará 2",
    "state": "DF"
  },
  "terms": true,
  "createdAt": "2024-08-20T14:30:00.000Z",
  "updatedAt": "2043-08-20T14:30:00.000Z",
  "protocol": {
    "id": 1234,
    "number": "123567asd8a",
    "createdAt": "2024-08-20T14:30:00.001Z"
  }
}
```

## Erros Possíveis

- **500 Internal Server Error**: Se acontecer algum problema na requisição com a API.

```json
{
  "code": 500,
  "message": "[user.name]. Tente novamente mais tarde"
}
```

- **422 Unprocessable Entity**: Se email já cadastrado.

```json
{
  "code": 422,
  "message": "Usuário já cadastrado"
}
```
