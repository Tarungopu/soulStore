import jwt from 'jsonwebtoken';
const JWT_TOKEN="SAN3005"
const generatenewtoken=(id)=>{
return jwt.sign({id},JWT_TOKEN,
    {expiresIn:'30d'})
}
export default generatenewtoken;