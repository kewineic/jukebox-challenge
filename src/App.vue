<template>
  <v-app >
    <Header /> 

    <v-main>
      <v-container>
        <form @submit.prevent="saveData()" class="form-container">
          <v-text-field
            v-model="personalData.name"
            label="Nome"
            required
          ></v-text-field>

          <v-text-field
            v-model="personalData.lastName"
            label="Sobrenome"
            required
          ></v-text-field>

          <v-text-field
            v-model="personalData.email"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="personalData.telephone"
            label="Telefone"
            required
          ></v-text-field>

          <v-checkbox
            v-model="personalData.legalEntity"
            label="Pessoa Jurídica"
            type="checkbox"
          ></v-checkbox>

          <v-text-field
            v-model="personalData.identity"
            label="CPF"
            required
            v-if="legalEntityVisibility.cpf"
          ></v-text-field>

          <v-text-field
            v-model="personalData.identity"
            label="CNPJ"
            required
            v-if="legalEntityVisibility.cnpj"
          ></v-text-field>

          <v-container>
            <Button
              buttonType="submit"
              buttonValue="Salvar"
            />
          </v-container>
        </form>
      </v-container>
      
      <v-container>
        <Table
          :tableValues="concatenatedData"
          @buttonEditActivated="editData"
          @buttonDeleteActivated="deleteData"
        />
      </v-container>
    </v-main>

    <Footer /> 
  </v-app>
</template>

<script>
import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';
import Table from './components/shared/table/Table';
import Button from './components/shared/button/Button';

export default {
  components: {
    Table,
    Button,
    Header,
    Footer
  },

  data(){
    return {
      editingData : {
        index: 0,
        isEditing: false
      },

      personalData: {
        name: '',
        lastName: '',
        email: '',
        telephone: '',
        identity: '',
        legalEntity: false
      },

      legalEntityVisibility: {
        cpf: true,
        cnpj: false
      },

      savedPersonalData: []
    }
  },

  methods: {
    saveData(){
      if(this.editingData.isEditing){
        this.savedPersonalData.splice(this.editingData.index, 1, {...this.personalData});
        this.editingData.isEditing = false;
      } else {
        this.savedPersonalData.push({
          ...this.personalData
        });
      }

      this.personalData = {
        name: '',
        lastName: '',
        email: '',
        telephone: '',
        cpf: '',
        cnpj: '',
        legalEntity: ''
      }
    },

    editData(index){
      this.personalData = {...this.savedPersonalData[index] }
      this.editingData = {
        index,
        isEditing : true,
      };
    },

    deleteData(index){
      this.savedPersonalData.splice(index, 1)
    }
  },

  computed: {
    concatenatedData(){
      return this.savedPersonalData.map( data =>
        ({
          name: `${data.name} ${data.lastName}`,
          email: data.email,
          telephone: data.telephone,
          identity: data.identity
        })
      )
    }
  },

  watch: {
    'personalData.legalEntity' : function (value) {
      if(value === true) {
        this.legalEntityVisibility.cpf = false
        this.legalEntityVisibility.cnpj = true
      } else {
        this.legalEntityVisibility.cpf = true
        this.legalEntityVisibility.cnpj = false
      }
    }
  }
}
</script>

<style>

  .container .form-container{
    max-width: 400px;
    text-align: center;
    margin: auto;
  }
  
</style>
