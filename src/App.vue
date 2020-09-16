<template>
  <v-app  >
    <Header /> 
    
    <v-main>
      <v-container>
        <v-form @submit.prevent="" ref="form" class="form-container">

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

          <div>  
            <v-text-field
              v-model.lazy="personalData.identity"
              label="CPF"
              required
              v-if="legalEntityVisibility.cpf"
              v-mask="'###.###.###-##'"
              :rules="cpfRules"
            >
            </v-text-field>
          </div>

          <div>
            <v-text-field
              v-model="personalData.identity"
              label="CNPJ"
              required
              v-if="legalEntityVisibility.cnpj"
              v-mask="'##.###.###/####-##'"
              :rules="cnpjRules"
            >
            </v-text-field>
          </div>

          <v-container>
            <Button
              @click.native="submitForm"
              buttonType="submit"
              buttonValue="Salvar"
            />
          </v-container>
        </v-form>
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
import { formDataMixin, editDataMixin, deleteDataMixin } from './mixins';
import { cpf, cnpj } from 'cpf-cnpj-validator'; 

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
      },
      cpfRules: [v => cpf.isValid(v) || 'CPF inválido: verifique se o número é válido e digite sem traços ou hífens.'],
      cnpjRules: [v => cnpj.isValid(v) || 'CNPJ inválido: verifique se o número é válido e digite sem traços, hífens e barras.'],
    }
  },

  methods:{
    a (){
      
    }
  },

  mixins: [ formDataMixin, editDataMixin, deleteDataMixin ],
  
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
        this.legalEntityVisibility.cpf = false;
        this.legalEntityVisibility.cnpj = true;
      } else {
        this.legalEntityVisibility.cpf = true;
        this.legalEntityVisibility.cnpj = false;
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
