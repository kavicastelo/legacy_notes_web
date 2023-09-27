const accountSchema = require('../model/account');
const bcrypt = require('bcrypt'); // npm i bcrypt
const jwt = require('jsonwebtoken'); //npm i jsonwebtoken

const signup=(req,resp)=>{

    accountSchema.findOne({username:req.body.username}).then(existsData=>{
        if(existsData===null){

            bcrypt.hash(req.body.password, 10, function(err, hash) {

                const user= new accountSchema({
                    username: req.body.username,
                    password: hash,
                    email: req.body.email,
                    believer: req.body.believer
                });

                user.save().then(result=>{

                    const token = jwt.sign({ username: req.body.username, email: req.body.email},
                        process.env.PRIVATE_KEY);
                    resp.json({data:{status:201,message:'Registered',token}});

                }).catch(error=>{
                    console.log(error);
                    resp.json(error);
                })
            });

        }
        else{
            resp.status(403).json({data:{status:403,message:'Already exists'}});
        }
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

const login=(req,resp)=>{
    accountSchema.findOne({username: req.body.username}).then(existData=>{
        if(existData!==null){

            bcrypt.compare(req.body.password, existData.password, function(err, result) {
                try {
                    if(result){
                        const token = jwt.sign({ username: existData.username, email: existData.email},
                            process.env.PRIVATE_KEY);
                        resp.json({data:{status:200,message:'Logged in',token}});
                    }
                    else{
                        resp.status(401).json({record:'Password is incorrect!'});
                    }
                } catch (e) {
                    console.log(e);
                }
            });

        }
        else{
            resp.status(404).join({record:'User not found'});
        }
    }).catch(err =>{
        console.log(err);
    })
}

module.exports = {
    signup,
    login
}