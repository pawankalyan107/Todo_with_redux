const count = [];

const fetchJSON = async () => {
  const response = await fetch("https://api.github.com/users?since=135");
  const data = await response.json();
  return data;
};

fetchJSON().then((res) => {
  res.map((ele) => {
    return count.push(ele.login);
  });
});

export default function reducer(state = count, action) {
  const { type, e } = action;
  switch (type) {
    case "ADD":
      const input_value = e.target.previousElementSibling.value;
      state = [...state, input_value];
      e.target.previousElementSibling.value = "";
      return state;
    default:
      return state;
  }
}
