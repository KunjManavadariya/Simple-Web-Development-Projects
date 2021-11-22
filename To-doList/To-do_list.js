let input=prompt("Enter whatever you want to do: 1. New  2. List  3. Delete  4. Quit");
let index = [];
while(input.toLowerCase()!=="quit"){
if(input.toLowerCase()==="new"){
    let task = prompt("Enter your to-do task");
 index.push(task);
 console.log(`${task} entered successfully.`);
}
else if(input.toLowerCase()==="list"){
    console.log("**************");
    for(let i=0; i<index.length; i++){
console.log(`${i}: ${index[i]}`);
    }
    console.log("**************");
}
else if(input.toLowerCase()==="delete"){
    const delIndex = parseInt(prompt("Enter the index you want to delete: "));
    if(!Number.isNaN(delIndex)){
    let delValue = index.splice(delIndex,1);
    console.log(`${delValue} deleted successfully.`);
    }
    else{
        console.log("Enter valid index.");
    }
}
input = prompt("Enter whatever you want to do: 1. New  2. List  3. Delete  4. Quit");
}
console.log("You quit");