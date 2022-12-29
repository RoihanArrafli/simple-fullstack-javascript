//   const express = require('express');
//   const mongoose = require('mongoose');
//   const cors = require('cors');
//   const userRoute = require('./routes/userRoute.js');
//   const bodyParser = require('body-parser')
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
  const app = express();

  //middleware
  app.use(cors());
  app.use(express.json());
  app.use(UserRoute);

  mongoose.connect('mongodb+srv://alignleft:A12345678@cluster0.pbgwvjz.mongodb.net/db_backend',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const database = mongoose.connection;

  database.on('error', (error) => {
    console.log(error);
  })

  database.once('connected', () => {
    console.log('Database Connected');
  })

  app.listen(5000, () => {
    console.log('Server up and running...')
  })