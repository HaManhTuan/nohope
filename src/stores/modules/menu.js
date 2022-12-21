
export default {
     state: {
        isOpenMenu: false,
         isInforBar: false,
    },
     mutations: {
        OPEN_MENU: (state, data) => {
            state.isOpenMenu = data
        },
         CLOSE_MENU: (state, data) => {
             state.isOpenMenu = data
         },
         OPEN_BAR: (state, data) => {
             state.isInforBar = data
         },
         CLOSE_BAR: (state, data) => {
             state.isInforBar = data
         },
    },
     actions: {
        openMenu({ commit }, data) {
            commit('OPEN_MENU', data)
        },
         closeMenu({ commit }, data) {
             commit('CLOSE_MENU', data)
         },
         openBar({ commit }, data) {
             commit('OPEN_BAR', data)
         },
         closeBar({ commit }, data) {
             commit('CLOSE_BAR', data)
         },
    }
}



