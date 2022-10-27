import store from "../../store/index"

class StoreUtils {

    static actions ={}

    static mutations ={}

    static getters ={}

    static dispatch(actionToDispatch, payload) {
        return store.dispatch(actionToDispatch, payload, { root: true });
    }

    static commit(mutationToCommit, payload) {
        return store.commit(mutationToCommit, payload, { root: true });
    }

    static rootGetters(getter, payload) {
        if (payload) {
            return store.getters[getter](payload);
        } else {
            return store.getters[getter];
        }
    }
}

export default StoreUtils


