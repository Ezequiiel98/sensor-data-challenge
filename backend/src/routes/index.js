const { Router } = require('express');
const authRouter = require('./auth');
const clientsRouter = require('./clients');

const router = Router();

router.use('/auth', authRouter);
router.use('/clients', clientsRouter);

module.exports = router;
