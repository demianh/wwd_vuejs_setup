
export interface IAppState {
	name: string;
	menuOpen: boolean;
}

// initialize store
const state: IAppState = {
	name: 'Demo App',
	menuOpen: false
};

const mutations = {
	SET_NAME (state: IAppState, name: string) {
		state.name = name;
	},
	OPEN_MENU (state: IAppState) {
		state.menuOpen = true
	},
	CLOSE_MENU (state: IAppState) {
		state.menuOpen = false
	},
};

const actions = {};

export default {
	state,
	mutations,
	actions
}
