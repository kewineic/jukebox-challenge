import { cpf, cnpj  } from 'cpf-cnpj-validator'; 

export const saveDataMixin = {
  methods: {
    saveData(){
      this.$store.dispatch('saveData', this.personalData);
  
      this.personalData = {
        name: '',
        lastName: '',
        email: '',
        telephone: '',
        identity: '',
        legalEntity: false
      }

      console.log(cpf.isValid("142.030.397-03"));
      console.log(cnpj.isValid("37.410.584/0001-83"));
    }
  }
}

export const editDataMixin = {
  methods: {
    editData(index) {
      this.personalData = { ...this.listData[index] };
      this.$store.dispatch('updateData', index);
      this.$refs.name.focus();
    }
  }
}

export const deleteDataMixin =  {
  methods: {
    deleteData(index) {
      this.$store.dispatch('deleteData', index);
    }
  }

}

