const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
    case "tuesday":
      return 7;
    case "wednesday":
      return 9;
    case "thursday":
      return 8;
    case "friday":
      return 10;
    case "saturday":
      return 9;
    case "sunday":
      return 8;
  }
};
// console.log(getSleepHours("thursday"));

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");
// console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  const idealHours = 9;
  return idealHours * 7;
};
// console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You've got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    colsole.log("You've got more sleep than needed.");
  } else {
    console.log("You should get some rest.");
  }
};
calculateSleepDebt();
