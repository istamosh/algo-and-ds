const timeConversion = (s) => {
  // convert the hour to int
  let hours = parseInt(s.substring(0, 2));
  // save the rest for later without meridiem
  const rest = s.substring(2, 8);
  // determine the ante/post meridiem
  const meridiem = s.substring(8);

  if (meridiem === "PM" && hours !== 12) hours += 12;
  else if (meridiem === "AM" && hours === 12) hours = 0;

  // add padding to the front max 2 digits, example 7 to 07, 11 to 11
  const formatted = hours.toString().padStart(2, "0");
  return `${formatted}${rest}`;
};

module.exports = timeConversion;
