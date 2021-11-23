const array = new Array(25).fill('')

const initData = array.map((item, index) => ({ numberSeat: (index + 1), listBook: [] }))

const data = [
  {
    numberSeat: "1",
    listBook: [],
  },
];




export default initData;