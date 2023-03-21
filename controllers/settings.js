const Facts = require('../models/FunFacts')

module.exports = {
    getInfo: async (req,res)=>{
        console.log(req.user)
        try{
            const games = await Facts.find({userId:req.user.id})
            // const facts = await Facts.find({userId:req.user.id, game:req.game, fact:req.fact})
            res.render('settings.ejs', {game: games})
        }catch(err){
            console.log(err)
        }
    },
    chooseGame: async (req,res)=>{
        console.log(req.user)
        try{

        }catch(err){
            console.log(err)
        }
    },
    createFacts: async (req,res)=>{
        try{
            await Todo.create({game: req.body.game, fact:req.body.fact, userId: req.user.id})
            console.log('Fact has been added')
            res.redirect('/settings')
        }catch(err){
            console.log(err)
        }
    },
    deleteFact: async (req,res)=>{
        console.log(req.body.factIdFromJSFile)
        try{
            await Facts.findOneAndDelete({_id:req.body.factIdFromJSFile})
            console.log('Deleted Fact')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}