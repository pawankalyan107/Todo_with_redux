// const fetchJSON = async () => {
//   const response = await fetch("https://api.github.com/users?since=135");
//   const data = await response.json();
//   return data;
// };

// fetchJSON().then((res) => {
//   res.map((ele) => {
//     return count.push(ele.login);
//   });
// });

export default function reducer(state = [], action) {
  const { type, e, id, value, indx, payload } = action;
  switch (type) {
    case "FETCH_DATA":
      state = [...payload];
      return state;

    case "ADD":
      const input_value = e.target.previousElementSibling.value;
      state = [...state, input_value];
      e.target.previousElementSibling.value = "";
      return state;

    case "DELETE":
      let data = state.filter((_, index) => index !== id);
      return [...data];

    case "EDIT":
      return (() => {
        state.map((_, index) => {
          if (index === indx) {
            state[index] = value;
          }
          return state;
        });
        return state;
      })();

    default:
      return state;
  }
}
