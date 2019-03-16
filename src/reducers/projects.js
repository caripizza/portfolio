const initialState = {
  projects: [],
  loading: false
};

export default function reducer(
  state = initialState,
  { type, payload }
) {
  switch(type) {
    case 'FETCH_PROJECTS':
      return {
        ...state,
        projects: payload,
        loading: false
      };
    case 'FETCH_PROJECTS_PENDING':
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
