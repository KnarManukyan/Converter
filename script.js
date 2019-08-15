let options = {};

function addOption(from, to, unitValue){
  options[from + " " + to] = unitValue;
}

addOption("degree", "radaius", 0.01745329252);

function convert(from, to, value){
  let unitValue = options[from + " " + to];
  if(unitValue){
    return value * unitValue;
  } else {
    console.log("This option does not exist. Please, add it later.");
  }
}

console.log(convert("degree", "radius", 30));