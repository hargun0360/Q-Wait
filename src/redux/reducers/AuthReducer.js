export function AuthReducer(state = {}, action) {
    switch (action.type) {
        case "User_Email":
            return {
                ...state,
                email: action.payload
            };
        default:
            return state;
    }
}