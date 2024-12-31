import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  
    trim: true,
  },
  number:{
    type:String,
    required:true,

  },
  image:{
    type:String,
    required:true,

  },
  pdf:{
    type:String,
    required:true,

  }
 
});

export const users= mongoose.models.users || mongoose.model('users', userSchema);
