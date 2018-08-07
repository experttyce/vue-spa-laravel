import { getLocalUser } from "./helpers/auth";

const user = getLocalUser();
export default {
    state: {
        welcomeMessage : 'Welcome to the jungle',
        currentUser : user,
        isLoggedIn: !!user,
        loading: false, 
        auth_error: null,
        customers: []

    },
    getters: {
        welcome(state) {
            return state.welcomeMessage;
        }
    },
    mutations: {},
    actions: {}
}