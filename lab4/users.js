// we use InMemory database 
let users = [
    {id:1,name:'Aaradhya Singh', mob:'25891XXXX',email:'aarad.examples@.com'},
    {id:2,name:'Khushi Singh', mob:'593702XXX',email:'Khushi.examples@.com'},
]
let nextID =3;

export const getAllUsers = ()=> {
    return users;
}

export const getUserByID = (pid) =>{
  const found = users.find((user)=>user.id === pid)
  return found; 
}

export const addUser = (user) => {
    user.id = nextId++;
    user.push(user);
    return user;
};

export const updateUser = (pid,updateData)=>{
    const index = users.findIndex((user)=>user.id === pid);
    if(index == -1){
        return false;
    }
updateData.id = pid;
users[index] =updateData;
return updateData;   
}

export const deleteUser = (pid) =>{
    const index =users.findIndex((user)=> user.id === pid);
    if(index == -1){
        return false;
    }
    uxsers.splice(index,1);
}