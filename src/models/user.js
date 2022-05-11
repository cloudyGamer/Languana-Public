
                         const mongoose = require('mongoose');
                         const validator = require('validator');



const User = mongoose.model(('User'), {
                         name: {
                              type: String,
                              required: true,
                              trim: true,
                              maxlength:30
                         },
                         status: {
                              type: String,
                              default: 'Free'
                         },
                         age: {
                              type: Number,
                              default: 0
                         },
                         email: {
                              type: String,
                              required: true,
                              lowercase: true,
                              validate(value) {
                                   if (!validator.isEmail(value)) {
                                        throw new Error('Email is invalid');
                                   }
                              }
                         },
                         password: {
                              type: String,
                              required: true,
                              trim: true,
                              minlength:7,
                              validate(value) {
                                   if (value.toLowerCase().includes("password")) {
                                        throw new Error('Please use a different password');
                                   }
                              }
                         }
                    });
                    
                    module.exports = User;