// we use InMemory database 
let users = [
    {id:1,name:'Aaradhya Singh', mob:'25891XXXX',email:'aarad.examples@.com'},
    {id:2,name:'Khushi Singh', mob:'593702XXX',email:'Khushi.examples@.com'},
]
let nextID = 3;

export const getUsers = () => users;

export const addUser = (user) => {
    user.id = nextId++;
    user.push(user);
    return user;
};
