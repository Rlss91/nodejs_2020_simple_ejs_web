let arr = [
  {
    username: "a1",
    password: "a1",
    name: "kenny",
  },
  {
    username: "a2",
    password: "a2",
    name: "sten",
  },
];

let find = (username) => arr.filter((user) => user.username == username);

module.exports.find = find;
