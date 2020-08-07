const express = require("express");
const router = express.Router();

const nametocode_controller = require("../controllers/nametocode.controller");
const filenametocode_controller = require("../controllers/filehandler.controller");
/**
 * @swagger
 * tags:
 *     - name: "codetoname"
 *       description: "Retrieve all names corresponding to an Index Group"
 *     - name: "nametocode"
 *       description: "Find the Surname and First Name Indexes"
 *     - name: "getall"
 *       description: "Display a List of all Surnames and First Names"
 *     - name: "CodeFile"
 *       description: "Retrieve List of Names for given list of Index"
 *     - name: "NameFile"
 *       description: "Retrieve List of Indexes for given List of Names"
 */

/**
 * @swagger
 * definitions:
 *   FirstName:
 *     properties:
 *       firstName:
 *         type: string
 *         example: "Abby"
 *      
 */
/**
 * @swagger
 * definitions:
 *   Surname:
 *     properties:
 *       surName:
 *         type: string
 *         example: "Wynn"
 *      
 */


/**
 * @swagger
 * definitions:
 *   NameFile:
 *     type: "object"
 *     properties:
 *       ID:
 *         type: integer
 *         example: 1
 *       Firstname:
 *         type: string
 *         example: "Nancy"
 *       Surname:
 *         type: string
 *         example: "Abercrombie"
 *      
 */

/**
 * @swagger
 * definitions:
 *   MasterNameFile:
 *     properties:
 *       body:
 *         type: "array"
 *         items:
 *                $ref: "#/definitions/NameFile"
 *       length:
 *         type: integer
 *         example: 1
 *      
 */



/**
 * @swagger
 * /codes/get/fname:
 *    post:
 *        tags:
 *        - "nametocode"
 *        description: Used to Find the First Name Index
 *        consumes:
 *           - application/json
 *        parameters:
 *            - name: firstName
 *              required: true
 *              in: body
 *              paramType: body
 *              description: Index Code
 *              schema:
 *                  $ref: "#/definitions/FirstName"
 *        responses:
 *            '201': 
 *                description: Successfully Retrieved
 *     
 */




router
  .route("/get/fname")
  .post(nametocode_controller.getfnames);


/**
 * @swagger
 * /codes/get/sname:
 *    post:
 *        tags:
 *        - "nametocode"
 *        description: Used to Find the First Name Index
 *        consumes:
 *           - application/json
 *        parameters:
 *            - name: surName
 *              required: true
 *              in: body
 *              paramType: body
 *              description: Index Code
 *              schema:
 *                  $ref: "#/definitions/Surname"
 *        responses:
 *            '201': 
 *                description: Successfully Retrieved
 *     
 */
router
  .route("/get/sname")
  .post(nametocode_controller.getsnames);

/**
 * @swagger
 * /codes/fileget/filenames:
 *    post:
 *        tags:
 *        - "NameFile"
 *        description: Use to retrieve all Surnames and First Names Indexes 
 *        consumes:
 *           - application/json
 *        parameters:
 *             - in: "body"
 *               name: "body"
 *               description: "File Containing  Surnames and First Names to Retrieve Indexes"
 *               required: true
 *               schema:
 *                      $ref: "#/definitions/MasterNameFile"
 *        responses:
 *            '201': 
 *                description: Successfully Retrieved
 *     
 */
router
  .route("/fileget/filenames")
  .post(filenametocode_controller.name_to_code);

module.exports = router;