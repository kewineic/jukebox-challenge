export const actions = {
  saveData({ state, commit }, data ) {
    if(state.editingData.isEditing) {
      commit('UPDATE_PERSONAL_DATA',  data );
      commit('SET_DATA_EDITING', false);

    } else {
      commit('INCLUDE_PERSONAL_DATA', data);
    }
  },

  updateData({ commit }, index) {
    commit('SET_DATA_EDITING_INDEX', index);
    commit('SET_DATA_EDITING', true);
  },

  deleteData({ commit }, index) {
    commit('DELETE_DATA', index);
  }
}