export const GET_DUMMY_DATA = "GET_DUMMY_DATA";

export const dummyAction = () => dispatch => {
    dispatch({
        type: GET_DUMMY_DATA,
        payload: "dummy data"
    });
}