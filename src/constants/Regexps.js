const Regexp = {
  twoNamesRegexp: /(\w.+\s).+/,
  ninRegexp: /^[A-Z0-9]{14}$/i,
  phoneNumberRegexp: /(0)(\d){9}\b/,
  tinRegexp: /^[0-9]{10}$/i,
  regNoRegexp: /^[0-9]{14}$/i,
  nameRegexp: /^[A-Za-z]$/i,
  numRegexp: /^[0-9]+$/,
  businessEmailRegexp:
    /^(?!.*@(?:gmail\.com|yahoo\.com|hotmail\.com|outlook\.com)).*$/,
};

export { Regexp };
