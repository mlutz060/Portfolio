const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) =>{
    const result = await mongodb
    .getDb()
    .db('Portfolio')
    .collection('Resume')
    .find();
    if(result){
        result.toArray().then((lists) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json(lists);
        });
    } else{
        res
        .status(500)
        .json(result.error || "ERROR: Couldn't get all resume experiences");
    };
};

const getOne = async (req, res, next) => {
    const experienceId = new ObjectId(req.params.id);
    const result = await mongodb
    .getDb()
    .db('Portfolio')
    .collection('Resume')
    .find({_id: experienceId});
    if (result){
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists[0])
        });
    } else{
        res.status(500)
        .json(result.error || "ERROR: couldn't get this experience from resume");
    };
};

const postOne = async (req, res, next) => {
    const experience = {        
        title: req.body.title ,
        company: req.body.company ,
        duration: req.body.duration ,
        accomplishments: req.body.accomplishments
    };
    const result = await mongodb
        .getDb()
        .db('Portfolio')
        .collection('Resume')
        .insertOne(experience);
    if(result.acknowledged){
        res.status(201).json(result);
    } else{
        res.status(500)
        .json(response.error || "ERROR: cannot add experince to resume")
    }   
} ;

const updateOne = async (req, res, next) => {

};

const deleteOne = async (req, res, next) => {

};


module.exports = {
    getAll,
    getOne,
    postOne,
    updateOne,
    deleteOne
};