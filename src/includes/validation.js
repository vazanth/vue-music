import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage,
  defineRule,
  configure,
} from 'vee-validate';
import {
  required, min, max, alpha_spaces as alphaSpaces, email, min_value as minValue,
  max_value as maxValue, confirmed, not_one_of as excluded,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('email', email);
    defineRule('min_value', minValue);
    defineRule('max_value', maxValue);
    defineRule('password_mismatch', confirmed);
    defineRule('excluded', excluded);
    defineRule('country_excluded', excluded);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The Field ${ctx.field} is required`,
          min: `The Field ${ctx.field} is too short`,
          max: `The Field ${ctx.field} is too large`,
          alpha_spaces: `The Field ${ctx.field} may only contain alphabets and spaces`,
          email: `The Field ${ctx.field} should be a valid email`,
          min_value: `The Field ${ctx.field} is too low`,
          max_value: `The Field ${ctx.field} is too high`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}`,
          country_excluded: 'Due to restrictions we are not allowing users from this location',
          password_mismatch: "Passwords don't match",
          tos: 'You must accept the terms of service',
        };

        const message = messages[ctx.rule.name] ? messages[ctx.rule.name]
          : `The Field ${ctx.field} is invalid`;

        return message;
      },
      validateOnBlur: true, // default value
      validateOnChange: true, // default value
      validateOnInput: false, // default value,
      validateOnModelUpdate: true, // default value
    });
  },
};
