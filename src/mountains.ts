import Mountain from "../models/Mountain";

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (array: Mountain[]): Mountain | string => {
  if (array.length) {
    let tallestMtn: Mountain = array[0];
    array.forEach((item) => {
      if (item.height > tallestMtn.height) {
        tallestMtn = item;
      }
    });
    return tallestMtn;
  } else {
    return `""`;
  }
};
// console.log(findNameOfTallestMountain(mountains));
