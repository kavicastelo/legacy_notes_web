const noteSchema = require('../model/notes');

saveNote = (req,resp)=>{
    const note = new noteSchema({
        title: req.body.title,
        content: req.body.content
    });
    note.save().then(()=>{
        resp.json({data:{status:201, message:'Note Saved'}});
    }).catch(err=>{
        resp.json({data:{status:500, message:'Error Saving Note'}});
        console.log(err);
    });
}

getAllNotes = (req,resp)=>{
    noteSchema.find().then((data)=>{
        resp.json({data:{status:200, message:'Notes Fetched', data:data}});
    }).catch(err=>{
        resp.json({data:{status:500, message:'Error Fetching Notes'}});
        console.log(err);
    })
}

getNote = (req,resp)=>{
    noteSchema.findById(req.params.id).then((data)=>{
        resp.json({data:{status:200, message:'Note Fetched', data:data}});
    }).catch(err=>{
        resp.json({data:{status:500, message:'Error Fetching Note'}});
        console.log(err);
    })
}

module.exports = {
    saveNote,
    getAllNotes,
    getNote
}