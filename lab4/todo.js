const mongoCollections = require("./mongoCollections");
const uuidv4 = require('uuid/v4');
const todoItems = mongoCollections.todoItems;


module.exports = 
{
    
    async createTask(title, description) 
    {
      if (!title || typeof title !== "string")
      {
        throw "You have to provide a title!";
      } 

      if (!description || typeof description !== "string")
      {
          throw "You have to provide a description!";
      }
  
      const todoCollection = await todoItems();
      let newTask = 
      {
        _id: uuidv4(),
        title: title,
        description: description,
        completed: false,
        completedAt: null
      }   

     const insertInfo = await todoCollection.insertOne(newTask);
     if (insertInfo.insertedCount === 0) 
        {
         throw "Could not create task";
        }

     const newId = insertInfo.insertedId;
     const task = await this.getTask(newId);

     return task;
    },
  

    async getAllTasks() 
    {
      const todoCollection = await todoItems();
  
      const tasks = await todoCollection.find({}).toArray();
  
      return tasks;
    },
  

    async getTask(id)
    {
        if(!id)
        {
            throw "You must provide an id to search for";
        }
        const todoCollection = await todoItems();
        const task =  await todoCollection.findOne({_id:id});
        
        if(task === null)
        {
            throw "No task with that ID";
        }
        return task;
    },


    async removeTask(id) 
    {
      if (!id)
      {
           throw "You must provide an id to search for";
      }
  
      const todoCollection = await todoItems();
      const deletionInfo = await todoCollection.removeOne({ _id: id });
  
      if (deletionInfo.deletedCount === 0) {
        throw `Could not delete task with id of ${id}`;
      }
      return true;
    },


    async completeTask(taskId) 
    {
      if (!taskId) 
      {
          throw "You must provide an id to search for";
      }

      let task = await this.getTask(taskId)
  
      if (task === null) 
      {
          throw "You must provide a name for your dog";
      }

      task.completed = true;
      task.completedAt = Date.now();

      const todoCollection = await todoItems();
      const updatedInfo = await todoCollection.replaceOne({ _id: taskId }, task);
      if (updatedInfo.modifiedCount === 0) 
      {
        throw "could not complete task successfully";
      }
  
      return await this.getTask(taskId);
    }
  }