const isEmpty = (v) => v === '' || v === null || v === undefined || (Array.isArray(v) && !v.length);

const required = () => (v) => !isEmpty(v);

const email = () => (v) => isEmpty(v) || /.+@.+\..+/.test(v);

const alphaDash = () => (v) => isEmpty(v) || /^[a-zA-Z0-9-_]+$/.test(v);

const alphaDashDot = () => (v) => isEmpty(v) || /^[a-zA-Z0-9-_.]+$/.test(v);

const lowercaseNumUnderscore = () => (v) => isEmpty(v) || /^[a-z0-9_]+$/.test(v);

const uppercaseNumUnderscore = () => (v) => isEmpty(v) || /^[A-Z0-9_]+$/.test(v);

const min = (minValue) => (v) => isEmpty(v) || parseFloat(v) >= minValue;

const max = (maxValue) => (v) => isEmpty(v) || parseFloat(v) <= maxValue;

const minLength = (length) => (v) => isEmpty(v) || v.length >= length;

const maxLength = (length) => (v) => isEmpty(v) || v.length <= length;

const minFileSize = (minValue) => (v) => isEmpty(v) || v.every((file) => file.size >= minValue * 1024 * 1024);

const maxFileSize = (maxValue) => (v) => isEmpty(v) || v.every((file) => file.size <= maxValue * 1024 * 1024);

const url = () => (v) => isEmpty(v) || /^(http|https):\/\/.+$/.test(v);

const unique = (items, ignored) => (v) => isEmpty(v) || (v === ignored) || !items.includes(v);

const json = () => (v) => {
  if (isEmpty(v)) return true;
  try {
    JSON.parse(v);
    return true;
  } catch (e) {
    return false;
  }
};

export default {
  required,
  email,
  alphaDash,
  alphaDashDot,
  lowercaseNumUnderscore,
  uppercaseNumUnderscore,
  min,
  max,
  minLength,
  maxLength,
  minFileSize,
  maxFileSize,
  url,
  unique,
  json,
};
