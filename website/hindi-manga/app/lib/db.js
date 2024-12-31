import mongoose from "mongoose";





 export const connectToDatabase = async () => {
  try {
    const dbURI = 'mongodb+srv://saiprasad:uZKwV12KLJaUNtyX@cluster0.gcvpc.mongodb.net/Manga?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI
    await mongoose.connect(dbURI);
   
  } catch (error) {
  
   
  }
};


