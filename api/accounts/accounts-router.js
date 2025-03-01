const router = require('express').Router()
const md = require('./accounts-middleware');

router.get('/', (req, res, next) => {
  try {
    res.json('get accounts')
  } catch (err) {
    next(err)
  }
})

router.get('/:id', md.checkAccountId, (req, res, next) => {
  try {
    res.json('get account by id')
  } catch (err) {
    next(err)
  }
})

router.post('/', 
  md.checkAccountPayload,
  md.checkAccountNameUnique,
 (req, res, next) => {
  try {
    res.json('post accounts')
  } catch (err) {
    next(err)
  }
})

router.put('/:id',
  md.checkAccountId,
  md.checkAccountNameUnique,
  md.checkAccountPayload,
 (req, res, next) => {
  try {
    res.json('update accounts')
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', 
  md.checkAccountId,
  (req, res, next) => {
  try {
    res.json('delete accounts')
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message
  })
})

module.exports = router;
