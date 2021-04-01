const express = require("express");
const router = express.Router();

const {
    signUp,
    activateAccount,
    signIn,
    forgotPassword,
    resetPassword

    
  } = require("../controllers/Auth");
  
 const { userSignupValidator , userSigninValidator} = require("../validators/Auth");
  const { runValidation } = require("../validators/Index");
  

router.post("/signup",userSignupValidator, runValidation, signUp);


  
  router.post("/account-activation", activateAccount);
  router.post("/signin", userSigninValidator, runValidation,  signIn);
  
   router.post("/forgot-password", forgotPassword);
  
  router.post("/reset-password",   resetPassword);
  
  module.exports = router;