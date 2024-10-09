import {defineField, defineType} from 'sanity'

export const CadastroPessoaType = defineType({
  name: 'pessoa',
  title: 'Pessoa',
  type: 'object',
  fields: [
    defineField({
      name: 'Id:',
      type: 'int',
      title: 'Id',

    }),
    defineField({
      name: 'Nome:',
      type: 'string',
      title: 'Nome',
    }),
    defineField({
      name: 'Data Nascimento:',
      type: 'date',
      title: 'Data de Nascimento',
    }),
    defineField({
      name: 'Email:',
      type: 'string',
      title: 'Email',

    }),
    defineField({
      name: 'Telefone:',
      type: 'string',
      title: 'Telefone',
    }),
    defineField({
      name: 'Imagem Perfil:',
      type: 'image',
      title: 'Imagem',
    }),
    defineField({
      name: 'Ativo:',
      type: 'booblean',
      title: 'Ativo',
    }),
    defineField({
      name: 'endereco:',
      type: 'Endereco',
      title: 'Endereco',
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