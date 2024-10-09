import {defineField, defineType} from 'sanity'

export const CadastroPessoa = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'int',
    }),
    defineField({
      name: 'Id:',
      type: 'int',
    }),
    defineField({
      name: 'Nome:',
      type: 'string',
    }),
    defineField({
      name: 'Data Nascimento:',
      type: 'date',
    }),
    defineField({
      name: 'Email:',
      type: 'string',
    }),
    defineField({
      name: 'Telefone:',
      type: 'string',
    }),
    defineField({
      name: 'Imagem Perfil:',
      type: 'image',
    }),
    defineField({
      name: 'Ativo:',
      type: 'booblean',
    }),
    defineField({
      name: 'endereco:',
      type: 'Endereco',
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