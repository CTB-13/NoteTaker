// This will be your standard server.js file where you
// will initialize the server

const express = require("express")

const router = express.Router()
const web = require("./web/htmlRoutes")
const api = require("./api/apiRoutes")

router.use(web)
router.use(api)

module.exports = router