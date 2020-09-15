<template>
  <v-app  >
    <Header /> 
    
    <v-main>
      <v-container>
        <form @submit.prevent="saveData()" ref="form" class="form-container">

          <v-text-field
            ref="name"
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
            v-mask="'(##) #####-####'"
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
            v-mask="'###.###.###-##'"
          ></v-text-field>

          <v-text-field
            v-model="personalData.identity"
            label="CNPJ"
            required
            v-if="legalEntityVisibility.cnpj"
            v-mask="'##.###.###/####-##'"
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
import { mapGetters } from 'vuex';
import { saveDataMixin, editDataMixin, deleteDataMixin } from './mixins';

export default {
  components: {
    Table,
    Button,
    Header,
    Footer
  },

  data() {
    return {
        personalData: {
        name: '',
        lastName: '',
        email: '',
        telephone: '',
        identity: '',
        legalEntity: false
      }
    }
  },

  mixins: [ saveDataMixin, editDataMixin, deleteDataMixin ],
  
  computed: {
    concatenatedData() {
      return this.listData.map( data =>
        ({
          name: `${data.name} ${data.lastName}`,
          email: data.email,
          telephone: data.telephone,
          identity: data.identity
        })
      )
    },

    ...mapGetters([ 'listData', 'legalEntityVisibility' ])
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
