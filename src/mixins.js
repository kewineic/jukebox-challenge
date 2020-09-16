export const formDataMixin = {
  methods: {
    clearForm() {
      this.personalData = {
        name: '',
        lastName: '',
        email: '',
        telephone: '',
        identity: '',
        legalEntity: false
      }
    },
    
    submitForm() {
      if(this.$refs.form.validate()){
        this.$store.dispatch('saveData', this.personalData);
        this.clearForm();
        this.$refs.name.focus();
      }
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

