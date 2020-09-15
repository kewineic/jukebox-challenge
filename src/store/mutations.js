export const mutations = {

  INCLUDE_PERSONAL_DATA(state, data) {
    state.savedPersonalData.push(data);
  },

  UPDATE_PERSONAL_DATA(state, data) {
    state.savedPersonalData.splice(state.editingData.index, 1, data);
  },

  SET_DATA_EDITING(state, isEditing) {
    state.editingData.isEditing = isEditing;
  },

  SET_DATA_EDITING_INDEX(state, index) {
    state.editingData.index = index;
  },

  DELETE_DATA(state, index) {
    state.savedPersonalData.splice(index, 1);
  },

  SET_LEGAL_ENTITY_VISIBILITY(state, {cpf, cnpj }) {
    state.legalEntityVisibility.cpf = cpf;
    state.legalEntityVisibility.cnpj = cnpj;
  }
}