/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "Git is a program and a version control system.it allows individuals and teams to track changes to code projects, prevents bugs and loss of progress, allows you to view the long history of a project in snapshots";
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "Github is a website which serves as a  cloud-based service for software development and version control using Git, allowing developers to store and manage their code."

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition  = "The git init command is used to generate a new, empty Git repository or to reinitialize an existing one. With the help of this command, a .git subdirectory is created, which includes the metadata, like subdirectories for objects and template files, needed for generating a new Git repository";
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition = "Git clone is a command used to create a copy of an existing Git repository or branch within a repository into a new local directory";
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition = "The Git status command is used in Git to display the current status of the local repository, including the name of the branch, the current status of the branch, staged/unstaged changes, etc. By running the status command, you can check your untracked files and move them to the staging area so Git can track changes in those files"
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition = " Git add is a command that allows you to stage(add) individual files, or all files in the project directory at once, preparing them to be staged. "
let gitAddCode= "git add ."
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition = `Git commit is a command used to save changes to the local repository. It captures the current state of a project and creates a new version of that project in the current repository. Before running the "git commit" command, the "git add" command is used to promote changes to the project that will be then stored in a commit`;

let gitCommitCode = `git commit -m "Type here your commit message"`;

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
gitPushDefinition = "The git push command uploads the content of the local repository to the remote repository ";