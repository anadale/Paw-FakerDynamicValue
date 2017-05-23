var faker = require('faker.min.js');

var FakerDynamicValue = function() {
  // implement the evaluate() method to generate the dynamic value
  this.evaluate = function(context) {
    var dynamicValue = ""; // generate some dynamic value

    _args = this.args.split(',')

    try
    {
      faker.locale = this.locale;
      dynamicValue = faker[this.category][this.name](..._args);
    }
    catch(exception) {

    }

    return dynamicValue;
  }
}

// set the Extension Identifier (must be same as the directory name)
FakerDynamicValue.identifier = "com.digillect.PawExtensions.FakerDynamicValue";

// give a display name to your Dynamic Value
FakerDynamicValue.title = "Faker Dynamic Value";

// link to the Dynamic Value documentation
FakerDynamicValue.help = "http://github.com/marak/faker.js";

// Inputs
FakerDynamicValue.inputs = [
  InputField("locale", "Language", "Select", {
    choices: {
      "en": "English",
      "ru": "Russian"
    },
    persisted: true
  }),
  InputField("category", "Data Category", "Select", {
    choices: {
      "address": "Addresses",
      "commerce": "Commerce",
      "company": "Company",
      "date": "Dates",
      "finance": "Finance",
      "hacker": "Hacker",
      "image": "Images",
      "internet": "Internet",
      "lorem": "Lorem Ipsum",
      "name": "Names",
      "phone": "Phone numbers",
      "random": "Random values",
      "system": "OS-specific values"
    }
  }),
  InputField("name", "Data method", "String"),
  InputField("args", "Arguments", "String")
];

// call to register function is required
registerDynamicValueClass(FakerDynamicValue);
