var express = require('express');
var router = express.Router();
const {
  find
} = require('../db/db')
/* GET home page. */
//拿数据
router.get('/xiaomi_list', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let data = await find('list')
  res.json(data);
});
router.get('/xiaomi_list2', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let data = await find('list2')
  res.json(data);
});
router.get('/xiaomi_items_inf', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let data = await find('list_name')
  res.json(data);
});
router.get('/xiaomi_items_list', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let data = await find('cart_list')
  res.json(data);
});
module.exports = router;
