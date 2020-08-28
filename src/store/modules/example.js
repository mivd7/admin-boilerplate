import axios from "axios";

const state = {
  items: [],
};

const getters = {
  allItems: state => state.items,
  singleItem: state => id =>
    state.items.find(shopItem => shopItem.id === id),
};  

const actions = {
  async fetchItems({ commit }) {
    await axios.get(`${process.env.VUE_APP_PROD_API}/admin/item`)
               .then(response => commit("setItems", response.data))
               .catch(err => console.error(err))
  },
  async editItem({ commit }, updated) {
    await axios.put(`${process.env.VUE_APP_PROD_API}/admin/item`, updated)
               .then(response => commit("itemUpdated", response.data))
               .catch(err => console.error(err));
  },
  async createItem({ commit }, newItem) {
    await axios.post(`${process.env.VUE_APP_PROD_API}/admin/item`, newItem)
               .then(res => {
                    newItem.id = res.data;
                    commit("itemAdded", newItem);
               })
               .catch(err => console.error(err));
  },
  async deleteItem({ commit }, id) {
    const response = await axios.delete(
      `${process.env.VUE_APP_PROD_API}/admin/item/${id}`
    );
    commit("itemRemoved", response.data);
  }
};

const mutations = {
  setItems: (state, items) => (state.items = items),
  itemUpdated: (state, updated) => {
    const index = state.items.findIndex(
      item => item.id === updated.id
    );
    if (index !== -1) {
      state.items.splice(index, 1, updated);
    }
  },
  itemAdded: (state, newItem) => {
    state.items.unshift(newItem);
  },
  itemRemoved: (state, id) => {
    state.items = state.items.filter(item => item.id !== id);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};