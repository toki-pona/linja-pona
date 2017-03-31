// Constants

export const constants = {
    EDITOR_CHANGE: 'EDITOR_CHANGE'
};

// Action Creators

export const actions = { editorChange: payload => ({ type: constants.EDITOR_CHANGE, payload }) };

// Reducer
export const defaultState = { input: '' };

export default function(state = defaultState, action) {
    switch (action.type) {
        case constants.EDITOR_CHANGE:
            return { ...state, input: action.payload };
        default:
            return state;
    }
}
