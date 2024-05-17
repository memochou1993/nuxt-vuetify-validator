import Validator from './Validator';

const validate = name => (new Validator()).createField(name);

export default validate;
