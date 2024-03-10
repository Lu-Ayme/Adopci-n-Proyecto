const express = require ('express');
const NaricesFrias = require('../controllers/NaricesFrias');
const router = express.Router();

router.get ('/', NaricesFrias);

module.exports= router;