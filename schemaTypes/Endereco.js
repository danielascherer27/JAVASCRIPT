import {defineField, defineType} from 'sanity'

export const EnderecoType = defineType({
  name: 'endereco',
  title: 'Endereco',
  type: 'object',
  fields: [
    defineField({
      name: 'Rua',
      type: 'string',
    }),
    defineField({
      name: 'Numero:',
      type: 'string',
    }),
    defineField({
      name: 'Cidade:',
      type: 'string',
    }),
    defineField({
      name: 'Estado:',
      type: 'string',
    }),
    defineField({
      name: 'Pais:',
      type: 'string',
    }),
    defineField({
      name: 'CEP:',
      type: 'string',
    }),
  ],
})


// Endereço

// rua: String
// numero: String
// bairro: String
// cidade: String
// estado: String
// pais: String
// cep: String