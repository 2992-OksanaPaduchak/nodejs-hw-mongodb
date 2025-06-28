import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least {#limit} characters',
    'string.max': 'Name should have at most {#limit} characters',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.string()
    .min(6)
    .max(16)
    .pattern(/^\+?[0-9]{6,16}$/)
    .messages({
      'string.pattern.base': 'Phone number must be digits and may start with +',
      'any.required': 'Phone number is required',
    }),

  email: Joi.string().email().messages({
    'string.email': 'Email must be valid',
  }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('personal', 'work', 'home').messages({
    'any.only': 'Contact type must be one of: personal, business, other',
    'any.required': 'Contact type is required',
  }),
});
