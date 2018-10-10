import * as types from '../types'
// import { ActionTree } from 'vuex'

const player = {
  state: {
    playing: false,
  },
  mutations: {
    [types.SET_PLAYING_STATE] (state: any, flag: boolean) {
      state.playing = flag
    },
  },
  actions: {
    [types.SET_PLAYING_STATE] ({ commit, state }: any, flag: boolean) {
      commit(types.SET_PLAYING_STATE, flag)
    },
  },
}

export default player
