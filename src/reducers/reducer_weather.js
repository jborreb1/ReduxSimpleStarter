import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
        // we DO NOT mutate the state, we return a new state.
        //return state.concat([action.payload.data]);
        return [ action.payload.data, ...state ];
    }
    return state;
}
