const mongoose = require('mongoose');
const Template = mongoose.model('templates');

module.exports = (app)=>{
    app.post('/templates/create',(req,res)=>{
        const templateJSON = JSON.stringify(req.body);
        new Template({json:templateJSON}).save().then(()=>console.log("template is saved"));
    })

    app.get('/templates/:id',async (req,res)=>{
        try{
            const template = await Template.findOne({_id:req.params.id});
            res.send(JSON.parse(template.json));
        } catch(error){
            res.status(400).send(error);
        }
      

    })
}