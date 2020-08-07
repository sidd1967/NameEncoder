const express = require("express");
const router = express.Router();

const getallnames_controller = require("./../controllers/getallnames.controller");


// Routes
/**
 * @swagger
 * /allnames/getall/snames:
 *  get:
 *    tags:
 *        - "getall"
 *    description: Use to retrieve all First Names with their Index Group 
 *    responses:
 *      '200':
 *        description: A successful response
 */
router
  .route("/getall/fnames")
  .get(getallnames_controller.getall_fnames);

  // Routes
/**
 * @swagger
 * /allnames/getall/fnames:
 *  get:
 *    tags:
 *        - "getall"
 *    description: Use to retrieve all Surnames with their Index Group 
 *    responses:
 *      '200':
 *        description: A successful response
 */
router
  .route("/getall/snames")
  .get(getallnames_controller.getall_snames);

module.exports = router;