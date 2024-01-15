import FieldValidator from './field-validator';
import locales from './locales';

class Validator {
  constructor() {
    this.locale = 'en';
  }

  get messages() {
    return locales[this.locale];
  }

  setLocale(locale) {
    this.locale = locale;
    return this;
  }

  createField(name) {
    return new FieldValidator(name, this.messages);
  }
}

const validator = new Validator();

export default validator;
