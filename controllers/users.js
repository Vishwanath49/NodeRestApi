
import { v4 as uuidv4 } from 'uuid';


let users = []

export const getUsers = (req,res) => {

    res.send(users)
}

export const createUser = (req , res) => {

    const user = req.body
    users.push({...user, id : uuidv4()})
    res.send(users)

}

export const findUser = (req,res) => {

    const { id } = req.params
    const user = users.find( (oneuser) => oneuser.id === id )
    res.send(user)
}

export const deleteUser = (req , res) => {

    const { id } = req.params
    users = users.filter( (oneuser) => oneuser.id !== id )
    res.send(users)
}

export const updateUser = (req,res) => {
    const { id } = req.params
    const { firstname, lastname , age} = req.body
    const user = users.find( (oneuser) => oneuser.id === id )
    if(firstname) user.firstname = firstname
    if(lastname) user.lastname = lastname
    if(age) user.age = age
    res.send("user updated")
}