const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Account = require('../models').Account;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/accounts');

router.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Web API server, please use /accounts' });
});

// returns an array of accounts
router.get('/accounts', (req, res, next) => {
  Account
    .find()
    .sort({ _id: -1 })
    .exec((error, accounts) => {
      if (error) return next(error);

      res.status(200).json({ accounts });
    });
});

// returns the account model
router.post('/accounts', (req, res, next) => {
  let account = new Account({
    name: req.body.name,
    balance: req.body.balance
  });

  account.save((error, account) => {
    if (error) return next(error);

    res.status(200).json({ message: 'Account Created', account });
  });
});

// returns the account model
router.put('/accounts/:id', (req, res, next) => {
  const id = req.params.id;

  Account.findById({ _id: id }, (error, account) => {
    if (error) return next(error);

    if (!account) {
      res.status(404).json({ message: 'Account not found' });

    } else {
      // update account properties
      account.name = req.body.name || account.name;
      account.balance = req.body.balance || account.balance

      account.save((error, account) => {
        if (error) return next(error);

        res.status(200).json({ message: 'Account Updated', account });
      });
    }
  });
});

// returns the account id
router.delete('/accounts/:id', (req, res, next) => {
  const id = req.params.id;

  Account.findById({ _id: id }, (error, account) => {
    if (error) return next(error);

    if (!account) {
      res.status(404).json({ message: 'Account not found' });

    } else {
      Account.remove(account, (error, result) => {
        if (error) return next(error);

        res.status(200).json({ message: 'Account Deleted', id });
      });
    }
  });
});

router.all('*', (req, res, next) => {
  res.status(404).json({ message: 'Resource not found' });
});

module.exports = router;
