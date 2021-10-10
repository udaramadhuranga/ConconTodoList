
//js file include with URI route codes and routes related mongoose methods

const router =require('express').Router();
let TODO_ITEM = require('../models/item_model');

//route method for adding new items to ToDo list
router.route('/add').post((req,res)=>{

    if(req.body){
        const item = new TODO_ITEM(req.body);
        item.save()
        .then(data =>{
            res.status(200).send({data:data})
        })
        .catch(error=>{
            res.status(500).send(error.message)
        })
    }

})

// route code for  read all items which are having state as 'Todo'
router.route('/readAll').get(async(req,res)=>{
    await TODO_ITEM.find({state : 'Todo'})
    .then((item)=>{
        res.json(item)
    })
    .catch(error=>{
        res.status(500).send(error.message)
    })
})

//route code for update an certian Item details
// update details are comingfrom request body and certain item id pass as params in URI
router.route('/update/:id').patch(async(req,res)=>{
    let itemId =req.params.id;

    console.log(itemId)

    if(req.params && req.params.id){

           const {Item ,Priority,exHours} =req.body;

           const updateItem ={
            Item,
            Priority,
            exHours
            
           }

           await TODO_ITEM.findByIdAndUpdate(itemId,updateItem)
           .then(data =>{
            res.status(200).send({data:data})
        })
        .catch(error=>{
            res.status(500).send(error.message)
        })

    }

    else{
        console.log("update id or req.body not found")
    }

})

//route code for deleteing a certain Item in Tood list 
//item id pass as params in URI
router.route('/delete/:id').delete(async(req,res)=>{
    let itemId = req.params.id
    console.log(itemId)
    if(req.params && req.params.id){
        await TODO_ITEM.findByIdAndDelete(itemId)
        .then(data=>{
             
            res.status(200).send("Item deleted successfully")
        }) 
        .catch(error=>{
            res.status(500).send(error.message);
        })
    }

    else{
        console.log("delete id or req.body not found")
    }
})

//route code for delete all items in the Todo list 
router.route('/deleteAll').delete(async(req,res)=>{

        await TODO_ITEM.deleteMany({})
        .then(data=>{
             
            res.status(200).send("Item deleted successfully")
        }) 
        .catch(error=>{
            res.status(500).send(error.message);
        })
   
})

//route code for read all Items which have state as 'Done'
//usse to clear the whole Todo list
router.route('/readDone').get(async(req,res)=>{
    await TODO_ITEM.find({state : 'Done'})
    .then((item)=>{
        res.json(item)
    })
    .catch(error=>{
        res.status(500).send(error.message)
    })
})

//route code use to update a state of a certain Item
router.route('/updateState/:id').put(async(req,res)=>{
    let itemId =req.params.id;

    console.log(itemId)

    if(req.params && req.params.id){

           const {state} =req.body;

           const updateItem ={
            state
           }

           await TODO_ITEM.findByIdAndUpdate(itemId,updateItem)
           .then(data =>{
            res.status(200).send({data:data})
        })
        .catch(error=>{
            res.status(500).send(error.message)
        })

    }

    else{
        console.log("update id or req.body not found")
    }

})


module.exports = router //export for use route codes in another js file