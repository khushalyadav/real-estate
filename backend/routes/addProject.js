const router =require('express').Router();
const fetchUser = require('../middleware/fetchUser');
const Project = require('../modals/ProjectSchema');




// To add a new Project 
router.post('/addProject',
fetchUser,
 async (req,res)=>{

  try {
    
 
let project = req.body;

const saving_project= await new Project(project);
const saved_project= await saving_project.save();

return res.send(saved_project);

//  return res.send("HEllo");

} catch (error) {
    return res.status(500).json({error:error});
}

})

 // Getting all Projects 
router.get('/allProject',async (req,res)=>{
  try {
    let project = await Project.find();

    return res.json(project);

  } catch (error) {
     return res.status(500).json({error:error});
  }
    
})


// Getting Specific Project 

router.get('/project/:id',async (req,res)=>{
    try {
   
             
        let project = await Project.findById(req.params.id);
    
        return res.json(project);
    
      } catch (error) {
         return res.status(500).json({error:error});
      }

})



module.exports = router;