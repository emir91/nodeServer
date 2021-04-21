const log = (req, res, next) => {
    console.log(req.url);
    next();
}

const checkParamLength = (req, res, next) => {
    if(req.params.param.length > 6) {
        res.status(403).send('Param has more than 6 characters');
    } else {
        next();
    }
    
}

export { log, checkParamLength }