const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let team= []
function mainMenu (){
    const questions = [
        {
            type: "list",
            name: "title",
            message: "which employee type would you like to add?", 
            choices: ["Engineer", "Intern", "Manager", "Finished"]
        }
       
        
    ]
    
    inquirer.prompt (questions)
    .then (function(response){
const choice=response.title 
if(choice==="Engineer"){
addEngineer()
}
if(choice==="Intern"){
    addIntern()
    }
if(choice==="Manager"){
    addManager()
    }
if(choice==="Finished"){
    createTeam()
    }   



    })
}
mainMenu ()

function addEngineer(){
    const questions = [
        {
            type: "input",
            name: "name",
            message: "what is the engineers name?", 
            
        },
        {
            type: "input",
            name: "id",
            message: "what is the engineers id?", 
            
        },
        {
            type: "input",
            name: "email",
            message: "what is the engineers email?", 
            
        },
        {
            type: "input",
            name: "github",
            message: "what is the engineers github", 
            
        },
        
    ]
    
    inquirer.prompt (questions)
    .then (function(response){
const engineer=new Engineer (response.name, response.id, response.email, response.github)
team.push(engineer)
mainMenu()
    })
}

function addIntern(){
    const questions = [
        {
            type: "input",
            name: "name",
            message: "what is the interns name?", 
            
        },
        {
            type: "input",
            name: "id",
            message: "what is the interns id?", 
            
        },
        {
            type: "input",
            name: "email",
            message: "what is the interns email?", 
            
        },
        {
            type: "input",
            name: "school",
            message: "what is the interns school", 
            
        },
        
    ]
    
    inquirer.prompt (questions)
    .then (function(response){
const intern=new Intern (response.name, response.id, response.email, response.school)
team.push(intern)
mainMenu()
    })
}

function addManager(){
    const questions = [
        {
            type: "input",
            name: "name",
            message: "what is the managers name?", 
            
        },
        {
            type: "input",
            name: "id",
            message: "what is the managers id?", 
            
        },
        {
            type: "input",
            name: "email",
            message: "what is the managers email?", 
            
        },
        {
            type: "input",
            name: "office number",
            message: "what is the managers office number", 
            
        },
        
    ]
    
    inquirer.prompt (questions)
    .then (function(response){
const manager=new Manager (response.name, response.id, response.email, response.officenumber)
team.push(manager)
mainMenu()
    })
}











function createTeam(){
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
      }
      fs.writeFileSync(outputPath, render(team), "utf-8");
    }




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
