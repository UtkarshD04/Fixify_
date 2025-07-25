// import jwt from 'jsonwebtoken';
const userModel = require('../models/user.model');
// const captainModel = require('../models/captain.model');
const user = require('../models/blacklistToken.model');
const blacklistTokenModel = require('../models/blacklistToken.model');
const jwt = require('jsonwebtoken');

const authUser = async (req , res , next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    if(!token) {
        return res.status(401).json({message: 'Unauthorization02'});
    }
    
    const isBlacklisted  = await blacklistTokenModel.findOne({token: token});
    if(isBlacklisted) {
        return res.status(401).json({message: ' Unauthorized'});
    }
    try {
        const decoded =  jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)
        

        req.user = user;
 
        return next();
    } catch (err) {
        console.error(err);
    
        return res.status(401).json({message: 'Unauthorization01'});
    }
}

// const authCaptain = async (req , res , next) => {
//     const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

//     if(!token) {
//         return res.status(401).json({message: 'Unauthorization02'});
 
//     }
//     const isBlacklisted  = await blacklistTokenModel.findOne({token: token});
//     if(isBlacklisted) {
//         return res.status(401).json({message: ' Unauthorized'});
//     }

//     try {
//         const decoded =  jwt.verify(token, process.env.JWT_SECRET);
//         const captain = await captainModel.findById(decoded._id)

//         req.captain = captain;
 
//         return next();
//     } catch (err) {
//         console.error(err);
//         return res.status(401).json({message: 'Unauthorization01'});
//     }
// }

module.exports = {
    authUser,
    // authCaptain
};
