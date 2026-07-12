import React from 'react'

function Home ()  {
    const students =[
        {id:1,name:"Ranjith",course:'Java'},
        {id:2, name:'Arun',course:'python'},
        {id:3, name:'Kayal', course:"Data science"},
        {id:4,name:'bala',course:'Mern'},
        {id:5,name:'chan',course:'.Net'}
    ];
  return (
    <div>
      {students.map ((std) => (
        <div key={std.id}>
            <h2>{std.name}</h2>
            <p>{std.course}</p>
        </div>
      ))} 
    </div>
  )
}

export default Home
