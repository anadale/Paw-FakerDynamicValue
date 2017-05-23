var faker = require('faker.min.js');

var FakerDynamicValue = function() {
  this.evaluate = function(context) {
    var dynamicValue = "";

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

FakerDynamicValue.identifier = "ru.nickonov.PawExtensions.FakerDynamicValue";
FakerDynamicValue.title = "Faker Dynamic Value";
FakerDynamicValue.help = "http://github.com/anadale/Paw-FakerDynamicValue";

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

registerDynamicValueClass(FakerDynamicValue);
