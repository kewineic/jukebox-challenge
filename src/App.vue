<template>
  <div class="container-primary">
    <header class="header-container">
      <h1> Desafio Jukebox </h1>
    </header>

    <main class="main-container">
      <form class="form-content">
        <Input labelValue="Nome" inputName="name" inputType="text"/>
        <Input labelValue="Sobrenome" inputName="lastName" inputType="text"/>
        <Input labelValue="E-mail" inputName="email" inputType="text"/>
        <Input labelValue="Telefone" inputName="telephone" inputType="text"/>
        <Input labelValue="Pessoa Jurídica:" inputName="legalEntity" inputType="checkbox"/>
        <Input labelValue="CPF" inputName="cpf" inputType="text"/>
        <Input labelValue="CNPJ" inputName="cnpj" inputType="text"/>
        <Button buttonType="submit" buttonValue="Salvar"/>
      </form>
      <Table :tableValues="concatenatedData" />
    </main>

    <footer class="footer-container">
      Desafio Jukebox &copy; Kewin Costa
    </footer>
  </div>
</template>

<script>
import Table from './components/shared/table/Table';
import Input from './components/shared/input/Input';
import Button from './components/shared/button/Button';

export default {
  components: {
    'Table' : Table,
    'Input' : Input,
    'Button' : Button
  },

  data(){
    return {
      personalData: [
        {
          name: 'Joao',
          lastName: 'Vilar',
          email: 'joao@hotmail.com',
          telephone: '(21)99878-8878',
          cpf: '00000000000',
          cnpj: '',
          legalEntity: false
        },
        {
          name: 'Vitor',
          lastName: 'Costa',
          email: 'vitinho@hotmail.com',
          telephone: '(21)99777-8878',
          cpf: '',
          cnpj: '001000103322',
          legalEntity: false
        }
      ]
    }
  },

  computed: {
    concatenatedData(){
      return this.personalData.map( data =>
        ({
          name: `${data.name} ${data.lastName}`,
          email: data.email,
          telephone: data.telephone,
          cpf: data.cpf,
          cnpj: data.cnpj
        })
      )
    }
  },
}
</script>

<style>
  @import './assets/css/global.css';
  @import './assets/css/global-media-queries.css'
</style>
