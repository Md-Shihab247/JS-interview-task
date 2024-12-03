    let part1 = document.querySelector('.active-user')
    let part2 = document.querySelector('.top-performer')
    let over = document.querySelector(".over")
    let under = document.querySelector(".under")

        const users = [
            { id: 1, name: "Alice", age: 25, isActive: true, scores: [85, 92, 88] },

            { id: 2, name: "Bob", age: 30, isActive: false, scores: [70, 75, 80] },

            { id: 3, name: "Charlie", age: 35, isActive: true, scores: [95, 90, 93] },

            { id: 4, name: "Diana", age: 28, isActive: true, scores: [60, 65, 70] },
            
            { id: 5, name: "Eve", age: 40, isActive: false, scores: [80, 85, 88] }
        ];
        
        
        function processUsers(users) {

            // activeUsers

            let activeUsers =  users.filter((value) => value.isActive)

              activeUsers.forEach((user)=>{

                let average =  user.scores.reduce((total,currentValue)=>{
     
                 return total + currentValue           
             })
                 user.averageScore = (average / user.scores.length).toFixed(2)
     
             })

            //  Top Performer 

             let topPerformer = activeUsers.reduce((toper,score)=>{

                return  toper.averageScore > score.averageScore ? toper : score 
                 
              })

              let under30 =  users.filter((value)=>{

                if (value.age < 30) {  return value.age    }
             })
             let over30 =  users.filter((value)=>{
    
                if (value.age >= 30) {  return value.age   }
             })
    

            return {
                activeUsers,
                topPerformer,
                over30,
                under30
            }
         }

      let {activeUsers,topPerformer,over30,under30} = processUsers(users)

        

      part1.innerHTML += `
      
      <table border = "1px">
        <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>IsActive</th>
        <th>averageScore</th>
       </tr>
       
        <tr>
        <th>${activeUsers[0].id}</th>
        <th>${activeUsers[0].name}</th>
        <th>${activeUsers[0].age}</th>
        <th>${activeUsers[0].isActive}</th>
        <th>${activeUsers[0].averageScore}</th>
       </tr>
        <tr>
        <th>${activeUsers[1].id}</th>
        <th>${activeUsers[1].name}</th>
        <th>${activeUsers[1].age}</th>
        <th>${activeUsers[1].isActive}</th>
        <th>${activeUsers[1].averageScore}</th>
       </tr>
        <tr>
        <th>${activeUsers[2].id}</th>
        <th>${activeUsers[2].name}</th>
        <th>${activeUsers[2].age}</th>
        <th>${activeUsers[2].isActive}</th>
        <th>${activeUsers[2].averageScore}</th>
       </tr>
      </table>   `

      part2.innerHTML += `

     <table border = "1px">
        <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>IsActive</th>
        <th>averageScore</th>
       </tr>
       
        <tr>
        <th>${topPerformer.id}</th>
        <th>${topPerformer.name}</th>
        <th>${topPerformer.age}</th>
        <th>${topPerformer.isActive}</th>
        <th>${topPerformer.averageScore}</th>
       </tr>
     </table>   `

      over.innerHTML += `
      
     <table border = "1px">
        <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>IsActive</th>
       </tr>
       
        <tr>
        <th>${over30[0].id}</th>
        <th>${over30[0].name}</th>
        <th>${over30[0].age}</th>
        <th>${over30[0].isActive}</th>
       </tr>
        <tr>
        <th>${over30[1].id}</th>
        <th>${over30[1].name}</th>
        <th>${over30[1].age}</th>
        <th>${over30[1].isActive}</th>
       </tr>
        <tr>
        <th>${over30[2].id}</th>
        <th>${over30[2].name}</th>
        <th>${over30[2].age}</th>
        <th>${over30[2].isActive}</th>
       </tr>
     </table>   `

        under.innerHTML += `
      
     <table border = "1px">
        <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>IsActive</th>
       </tr>
       
        <tr>
        <th>${under30[0].id}</th>
        <th>${under30[0].name}</th>
        <th>${under30[0].age}</th>
        <th>${under30[0].isActive}</th>
       </tr>
        <tr>
        <th>${under30[1].id}</th>
        <th>${under30[1].name}</th>
        <th>${under30[1].age}</th>
        <th>${under30[1].isActive}</th>
       </tr>
     </table>  `
