const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://mernchat-yt-user:8pagMfiOdbGOYXgs@cluster0.z8f6zer.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
