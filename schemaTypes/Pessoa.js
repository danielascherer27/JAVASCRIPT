import {defineField, defineType} from 'sanity'

export const PessoaType = defineType({
  name: 'pessoa',
  title: 'Pessoa',
  type: 'document',
  fields: [
    defineField({
      name: 'Id',
      type: 'number',
    }),
    defineField({
      name: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'DataNascimento',
      type: 'date',
    }),
    defineField({
      name: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'Telefone',
      type: 'string',
    }),
    defineField({
      name: 'ImagemPerfil',
      type: 'image',
    }),
    defineField({
      name: 'Ativo',
      type: 'boolean',
    }),
    defineField({
      name: 'endereco',
      type: 'endereco',
    }),
  ],
})


// Pessoa

// id: int (Identificador único)
// nome: String
// dataNascimento: Date
// email: String
// telefone: String
// imagemPerfil: Imagem
// ativo: boolean
// endereco: Endereco

// Endereço

// rua: String
// numero: String
// bairro: String
// cidade: String
// estado: String
// pais: String
// cep: String