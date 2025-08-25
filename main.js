const getSleepHours = day => {
switch(day.toLowerCase()) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 5;
      break;
    case 'saturday':
      return 9;
      break;
    case 'sunday':
      return 7;
      break;
    default:
      return "Invalid day";
  }
}

  const getActualSleepHours = () => 
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

// Function that takes an argument for ideal nightly hours
const getIdealSleepHours = (idealHours) => idealHours * 7;

// Main function to calculate sleep debt
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8); // pass in your ideal nightly hours (e.g., 8)

  if (actualSleepHours === idealSleepHours) {
    console.log(`You got ${idealSleepHours} hours, the ideal amount.`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSleepHours - idealSleepHours} hours more sleep than you needed.`);
  } else {
    console.log(`You got ${idealSleepHours - actualSleepHours} hours less sleep than you needed. Get some rest!`);
  }
};

// Call the function
calculateSleepDebt();
