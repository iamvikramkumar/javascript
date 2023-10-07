// var c =300 //global scope
let a = 300
if(true) {  // block scope
    let a = 10
    const b = 20
    //console.log("INNER: ", a);
}

// jab browser ke under console me jakar scope dekhte hai wo alag hai or jab hum code environment me node ke madad se example ko run karte hai to aapka global scope alag hai


//console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "vikram"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    
    // console.log(website);

    two()
}

//  one()


if(true) {
    const username = "vikram"
    if(username === "vikram"){
        const website = " youtube"
        //console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);

// +++++++++++++++ interesting +++++++++++++++


function addone(num){
    return num + 1
}

addone(5)




const addTwo = function(num){
      return num + 2
}
console.log(addTwo(5))


