import rules from './rules';

class FieldValidator {
  constructor(name, messages) {
    this.name = name.toLowerCase();
    this.messages = messages;
    this.rules = [];
    this.isPassed = false;
  }

  getRule(name, ...args) {
    return (v) => rules[name](...args)(v) || this.messages[name](this.name, ...args);
  }

  getRules() {
    return this.isPassed ? [] : this.rules;
  }

  pushRule(name, ...args) {
    const rule = this.getRule(name, ...args);
    this.rules.push(rule);
    return this;
  }

  when(condition) {
    if (!condition) {
      this.isPassed = true;
    }
    return this;
  }

  required() {
    return this.pushRule('required');
  }

  email() {
    return this.pushRule('email');
  }

  alphaDash() {
    return this.pushRule('alphaDash');
  }

  alphaDashDot() {
    return this.pushRule('alphaDashDot');
  }

  lowercaseNumUnderscore() {
    return this.pushRule('lowercaseNumUnderscore');
  }

  uppercaseNumUnderscore() {
    return this.pushRule('uppercaseNumUnderscore');
  }

  min(minValue) {
    return this.pushRule('min', minValue);
  }

  max(maxValue) {
    return this.pushRule('max', maxValue);
  }

  minLength(length) {
    return this.pushRule('minLength', length);
  }

  maxLength(length) {
    return this.pushRule('maxLength', length);
  }

  minFileSize(length) {
    return this.pushRule('minFileSize', length);
  }

  maxFileSize(length) {
    return this.pushRule('maxFileSize', length);
  }

  url() {
    return this.pushRule('url');
  }

  unique(items, ignored) {
    return this.pushRule('unique', items, ignored);
  }

  json() {
    return this.pushRule('json');
  }
}

export default FieldValidator;
