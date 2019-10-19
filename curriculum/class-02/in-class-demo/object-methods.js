
const mugSchema = {
  ounces: {
    type: Number,
    required: true
  },
  hasHandle: {
    type: Boolean
  },
  color: {
    type: String,
    required: true
  }
};

Object.entries(mugSchema).forEach(([key, rule]) => {
  console.log(key);
  printRule(rule);
});

// Object.entries(mugSchema).forEach(entry => {
//   const [key, rule] = entry;

//   console.log(key);
//   printRule(rule);
// });

// Object.entries(mugSchema).forEach(entry => {
//   const key = entry[0];
//   const rule = entry[1];

//   console.log(key);
//   printRule(rule);
// });

function printRule({ type, required }) {
  console.log(type, required);
}

// function printRule(rule) {
//   const { type, required } = rule;
//   console.log(type, required);
// }

// function printRule(rule) {
//   const type = rule.type;
//   const required = rule.required;
//   console.log(type, required);
// }