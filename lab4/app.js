const todo = require('./todo');
const connection = require("./mongoConnection");


const main = async () =>
{
        const tasktest1 = 
        {
            title: "Ponder Dinosaurs",
            description: "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"
        };
        console.log("Creating the first task");
        const task1 = await todo.createTask(tasktest1.title, tasktest1.description);
        console.log(task1);

        const tasktest2 = {
            title: "Play Pokemon with Twitch TV",
            description: "Should we revive Helix?"
        }
        console.log("\n\nCreating the second task");
        const task2 = await todo.createTask(tasktest2.title, tasktest2.description);
        console.log(task2);

        console.log("\n\nQuery all tasks");
        const allTasks = await todo.getAllTasks()
        console.log(allTasks);
        
        console.log("\n\nDelete the first task");
        await todo.removeTask(allTasks[0]._id);

        console.log("\n\nQuery remaining tasks");
        const remainingTasks = await todo.getAllTasks();
        console.log(remainingTasks)

        console.log("\n\nComplete remaining tasks");
        for(let i = 0; i < remainingTasks.length; i++)
        {
            let completedTask = await todo.completeTask(remainingTasks[i]._id);
            console.log(completedTask);
        }
        const db = await connection();
        await db.serverConfig.close();
        console.log("Done!");
};

main().catch(error =>{
    console.log(error);
});