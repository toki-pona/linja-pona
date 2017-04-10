// Constants

export const constants = {
    EDITOR_CHANGE: 'EDITOR_CHANGE',
    EDITOR_ALIGN_CHANGE: 'EDITOR_ALIGN_CHANGE',
    ALIGN_LEFT: 'LEFT',
    ALIGN_CENTER: 'CENTER'
};

// Action Creators

export const actions = {
    editorChange: payload => ({ type: constants.EDITOR_CHANGE, payload }),
    editorAlignLeft: _ => ({ type: constants.EDITOR_ALIGN_CHANGE, payload:constants.ALIGN_LEFT }),
    editorAlignCenter: _ => ({ type: constants.EDITOR_ALIGN_CHANGE, payload:constants.ALIGN_CENTER })
};

// Reducer
export const defaultState = { input: '', align: constants.ALIGN_LEFT };

export default function(state = defaultState, action) {
    switch (action.type) {
        case constants.EDITOR_CHANGE:
            return { ...state, input: action.payload };
        case constants.EDITOR_ALIGN_CHANGE:
            return { ...state, align: action.payload };
        default:
            return state;
    }
}
