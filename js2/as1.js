const allusers = ["Mithun","Rahul","Hema","Ashu"];
 function isUserPresent(user){
    if (allusers.includes(user)){
        console.log(`yes ,${user} is a valid user`);
        return true;  
    }
    else{
        console.log(`No , ${user} is not a valid user`); 
        return true;
    }
 }
 