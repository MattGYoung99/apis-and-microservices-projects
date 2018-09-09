const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./models/user')
const dotenv = require('dovenv').config()


