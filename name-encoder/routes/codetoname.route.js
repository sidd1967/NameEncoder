const express = require("express");
const router = express.Router();

const codetoname_controller = require("../controllers/codetoname.controller");
const filecodetoname_controller = require("../controllers/filehandler.controller");
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
 *   FirstNameCode:
 *     properties:
 *       fnameCode:
 *         type: string
 *         example: "002"
 *      
 */
/**
 * @swagger
 * definitions:
 *   SurnameCode:
 *     properties:
 *       snameCode:
 *         type: string
 *         example: "1158"
 *      
 */

/**
 * @swagger
 * definitions:
 *   CodeFile:
 *     type: "object"
 *     properties:
 *       ID:
 *         type: integer
 *         example: 1
 *       Fcode:
 *         type: string
 *         example: "002"
 *       Scode:
 *         type: string
 *         example: "1158"
 *      
 */

/**
 * @swagger
 * definitions:
 *   MasterCodeFile:
 *     properties:
 *       body:
 *         type: "array"
 *         items:
 *                $ref: "#/definitions/CodeFile"
 *       length:
 *         type: integer
 *         example: 1
 *      
 */

/**
 * @swagger
 * /names/get/fnamecode:
 *    post:
 *        tags:
 *        - "codetoname"
 *        description: Use to retrieve all First Names belonging to a particluar Index Group
 *        consumes:
 *           - application/json
 *        parameters:
 *            - name: fnameCode
 *              required: true
 *              in: body
 *              paramType: body
 *              description: Index Code
 *              schema:
 *                  $ref: "#/definitions/FirstNameCode"
 *        responses:
 *            '201': 
 *                description: Successfully Retrieved
 *     
 */
router
  .route("/get/fnamecode")
  .post(codetoname_controller.getfnamecode);

/**
 * @swagger
 * /names/get/snamecode:
 *    post:
 *        tags:
 *        - "codetoname"
 *        description: Use to retrieve all Surnames belonging to a particluar Index Group
 *        consumes:
 *           - application/json
 *        parameters:
 *            - name: snameCode
 *              required: true
 *              in: body
 *              paramType: body
 *              description: Index Code
 *              schema:
 *                  $ref: "#/definitions/SurnameCode"
 *        responses:
 *            '201': 
 *                description: Successfully Retrieved
 *     
 */




router
  .route("/get/snamecode")
  .post(codetoname_controller.getsnamecode);

/**
 * @swagger
 * /names/fileget/filecodes:
 *    post:
 *        tags:
 *        - "CodeFile"
 *        description: Use to retrieve all Surnames and First Names belonging to a particluar Index Group
 *        consumes:
 *           - application/json
 *        parameters:
 *             - in: "body"
 *               name: "body"
 *               description: "File Containing Index Code For Surnames and First Names"
 *               required: true
 *               schema:
 *                      $ref: "#/definitions/MasterCodeFile"
 *        responses:
 *            '201': 
 *                description: Successfully Retrieved
 *     
 */



router
  .route("/fileget/filecodes")
  .post(filecodetoname_controller.code_to_name);

module.exports = router;