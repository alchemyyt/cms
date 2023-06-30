const express = require('express');
const router = express.Router();
const projectController = require('../projectController/projectController');
module.exports = ()=>{
  router.get('/',projectController.projectHome)
  router.get('/about',projectController.projectAbout)
  return router
}
