
const post = async() =>
{
   const postdata=await fetch("https://jsonplaceholder.typicode.com/posts");
   const finalepostdata=postdata.json();   
   return finalepostdata;                        
}
const user =async() =>
{
const userdata=await fetch("https://jsonplaceholder.typicode.com/users");
const finaleuserdata=userdata.json();
return finaleuserdata;
}
const display = async()=>
{
const userpost= await post();
const userdata= await user();
let str="";
userpost.forEach((uservalue)=>
{
userdata.forEach((postvalue)=>
{
if(uservalue.userId==postvalue.id)
{
   str+=`<tr>
   <td>${uservalue.userId}</td>
   <td>${postvalue.id}</td>
   <td>${postvalue.username}</td>
   <td>${postvalue.email}</td>
   </tr> `                           
}
})                              
})
document.getElementById("table").innerHTML=str;
}
 display();

















