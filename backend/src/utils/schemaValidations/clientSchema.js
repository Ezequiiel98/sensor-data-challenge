const { check } = require('express-validator');

const client = [
  check('businessName')
    .isLength({ min: 3 })
    .withMessage('business name must be at least 3 characters')
    .bail()
    .isLength({ max: 254 })
    .withMessage('business name can not be greater than 254 characters'),
  check('rucNumber')
    .isInt()
    .withMessage('ruc number must be an integer number')
    .bail()
    .isLength({ min: 1 })
    .withMessage('ruc number must be at least 1 character')
    .isLength({ max: 254 })
    .withMessage('ruc number can not be greater than 254 characters'),
  check('address')
    .isLength({ min: 3 })
    .withMessage('address  must be at least 3 characters')
    .bail()
    .isLength({ max: 254 })
    .withMessage('address can not be greater than 254 characters'),
  check('country')
    .isLength({ min: 3 })
    .withMessage('country must be at least 3 characters')
    .bail()
    .isLength({ max: 254 })
    .withMessage('country can not be greater than 254 characters'),
  check('postalCode')
    .isInt()
    .withMessage('postal code must be an integer number')
    .bail()
    .isLength({ min: 1 })
    .withMessage('postal code must be at least 1 character')
    .isLength({ max: 254 })
    .withMessage('postal code can not be greater than 254 characters'),
  check('zone')
    .toLowerCase()
    .isIn(['norte', 'centro', 'sur'])
    .withMessage('zone must be one of: norte, centro or sur'),
  check('phone')
    .isLength({ min: 5 })
    .withMessage('phone  must be at least 5 characters')
    .bail()
    .isLength({ max: 254 })
    .withMessage('phone can not be greater than 254 characters'),
  check('fax')
    .isLength({ min: 3 })
    .withMessage('fax must be at least 3 characters')
    .bail()
    .isLength({ max: 254 })
    .withMessage('fax not be greater than 254 characters'),
  check('web')
    .isLength({ min: 3 })
    .withMessage('web must be at least 3 characters')
    .bail()
    .isLength({ max: 254 })
    .withMessage('web can not be greater than 254 characters'),
  check('email')
    .normalizeEmail().isEmail()
    .withMessage('email must be a valid email')
    .bail()
    .isLength({ min: 6 })
    .withMessage('email must be at least 6 characters')
    .bail()
    .isLength({ max: 254 })
    .withMessage('email can not be greater than 254 characters'),
  check('transitInsurance')
    .toLowerCase()
    .isIn(['si', 'no', 'opcional'])
    .withMessage('transit insurance must be one of: si, no or opcional'),
  check('transitCargeInsurance')
    .toLowerCase()
    .isIn(['si', 'no', 'opcional'])
    .withMessage('transit carge insurance must be one of: si, no or opcional'),
  check('active')
    .exists()
    .withMessage('active field is required'),
];

module.exports = {
  client,
};
