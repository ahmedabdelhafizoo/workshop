import axios from "@/axios";
const state = {
  newsList: null,
  newsDetails: null,
};

const getters = {
  getNewsList(state) {
    return state.newsList;
  },
  // getNewsListWithPaging(state) {
  //   const PER_PAGE = 6;
  //   return (page = 1) => state.newsList.slice(0, page * PER_PAGE);
  // },
  getHomeNewsList(state) {
    return state.newsList?.filter((item) => item.showOnHomepage === "yes");
  },
  getNewsDetails(state) {
    return state.newsDetails;
  },
};

const mutations = {
  setNewsList(state, payload) {
    state.newsList = payload;
  },
  setNewsDetails(state, payload) {
    state.newsDetails = payload;
  },
};

const actions = {
  getNewsDetails({ commit }) {
    axios
      .get("/96363b7b60639fdd6e7d")
      .then((res) => {
        commit("setNewsList", res.data.News);
      })
      .catch(() => {
        alert("something went wrong tray later");
      });
  },
  getNewsItem({ commit }, payload) {
    axios
      .get(`/96363b7b60639fdd6e7d/News/${payload}`)
      .then((res) => {
        console.log(res.data);
        commit("setNewsDetails", res.data);
      })
      .catch(() => {
        alert("something went wrong tray later");
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
