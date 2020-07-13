const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ];
  
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

//Milestone 2
//Inventor that starts with A
console.log(inventors.filter((inventors)=>{
    let name = inventors.split(",")
    for (let i = 0; i<name.length;i++){
      let char = name[i].split("")
      if (char[0] === "A"){
              return true;
          }else{
              return false
          }
    }
}))
//Inventor whose name contains n
console.log(inventors.filter((inventors)=>{
    let name = inventors.split(",")
    for (let i = 0; i<name.length;i++){
      let char = name[i].split("")
      if (char.find(lettern => lettern === "n")==="n"){
              return true;
          }else{
              return false
          }
    }
}))
//Inventors whose name has the same letter twice in a row (e.g. nn or mm).
console.log(inventors.filter((inventors)=>{
    let name = inventors.split(",")
    for (let i = 0; i<name.length;i++){
      let char = name[i].split("")
    for (let j = 0;j<char.length;j++){
      if (char[j] === char[j+1]){
              return true;
          }
    }
    }
}))

//Print out an array of the numbers which are odd.
console.log(numbers.filter((number)=>number%2!=0))

//Print out an array of the numbers that have two digits.
console.log(numbers.filter((number)=>number>9))

//Print out an array of the numbers which are prime.
console.log(numbers.filter((number)=>{
    if (number>3){
    if (number%3==0 || number%2==0 ||number%5==0){
      return false
    }else{
      return true
    }
  }else{
    return true
  }
  }
  ))

//Milestone 3
//Print out the first name of each inventor.
console.log(inventors.map(name=>
    {fullname = name.split(" ")
      return fullname[0]
    }
    )
)

//Print out the length of every inventor's full name.
console.log(inventors.map(name=>name.length))

//Print out all the inventors' names in uppercase.
console.log(inventors.map(name=>name.toUpperCase()))

//Print out initials of all inventors(e.g. A.E., I.N., ...)
console.log(inventors.map(name=>
    { let initials = []
      let fullName = name.split(" ")
      for (let i = 0; i<=fullName[1].length;i++){
       let lastname = fullName[1].split("")
       let firstname = fullName[0].split("")
       for (let j = 0; j <=fullName.length;j++){
            initials[j]=firstname[j]+"."+lastname[j]
       }
       return initials[0]
      }
    }
    )
)

//Print out an array of every number multiplied by 100.
console.log(numbers.map(number => number*=100))

//Milestone 4
//Sort all the inventors in alphabetical order, A-Z.
console.log(inventors.sort())

//Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
console.log(inventors.sort((name1,name2)=>{
    let fullName1 = name1.split(" ")
    let fullName2 = name2.split(" ")
        for (let i = 0; i<=fullName1[1].length;i++){
         let lastname1 = fullName1[1].split("")
         let firstname1 = fullName1[0].split("")
         let lastname2 = fullName2[1].split("")
         let firstname2 = fullName2[0].split("")
         
        if (firstname1[0]=== firstname2[0]){
          for (let j = 0;j<=firstname1.length;j++){
            if (firstname1[j]==firstname2[j]){
              continue
            }else if (firstname1[j]>firstname2[j]){
                return -1
            }else if (firstname1[j]<firstname2[j]){
                return 1
            }
          }
          return 0;
          }
        else if (firstname1[0]>firstname2[0]){
          return -1;
        }
        else if (firstname1[0]<firstname2[0]){
          return 1;
        }
        }
  }))

//Sort all the inventors by length of name, shortest name first.
console.log(inventors.sort((name1,name2)=>{
    let name1length = name1.length
    let name2length = name2.length
    if (name1length == name2length){
        return 0
    }else if (name1length>name2length){
        return 1
    }else if (name1length<name2length){
        return -1
    }
}))

//Sort all the inventors by length of name, longest name first. Do not use the reverse method.
console.log(inventors.sort((name1,name2)=>{
    let name1length = name1.length
    let name2length = name2.length
    if (name1length == name2length){
        return 0
    }else if (name1length<name2length){
        return 1
    }else if (name1length>name2length){
        return -1
    }
}))

//Milestone 5
//Find the sum of all the numbers.
console.log(numbers.reduce((total,number)=>{
  total += number
  return total
}))

//Find the sum of all the even numbers.
console.log(numbers.reduce((total,number)=>{
  if (number %2 == 0){
  total += number}
  return total
},0))

//Create a string that has the first name of every inventor.
let fullname = []
let firstname = []
let firstnamearray=[]

for (let j = 0; j <inventors.length;j++){
  fullname[j] = inventors[j].split(" ")}
for (let i = 0;i<fullname.length;i++){
  firstname.push(fullname[i])
  }
for (let x = 0;x<firstname.length;x++){
  for (let y = 0; y<2;y++){
    if (y ==1){
      delete firstname [x][1]
    }
  }
}
console.log(firstname.reduce((total,name)=>{ 
      return total += name
    }))

//Milestone 6
//Does any inventor have the letter 'y' in their name?
console.log(inventors.some((inventor)=>{
      inventor.includes("y")
  }))

//Does every inventor have the letter 'e' in their name?
console.log(inventors.every((inventor)=>{
    inventor.includes("e")
}))

//Does every inventor have first name that's longer than 4 characters?
const firstnames = inventors.map((name)=>
{     fullname = name.split(" ")
      return fullname[0]
})
console.log(firstnames.every((inventornames)=>{
    inventornames.length >4
}))

//Milestone 7
//Find the inventor that has a middle name.
console.log(inventors.find((inventor)=>{
  let fullname = inventor.split(" ")
  if (fullname.length == 3){
    return true;
  }else{
    return false;
  }
}))

//Bonus: Return a new array, that only has inventors without a middle name. (Hint: think about splice, if you use findIndex. But you may also use another of the methods you've learned about above.)
console.log(inventors.filter((inventor)=>{
  fullname = inventor.split(" ")
  if (fullname.length == 2){
    return true
  }else{
    return false
  }
}))

//Find the number divisible by 7.
console.log(numbers.find((number)=>number%7==0))

//Bonus: Return a new array, that only has the numbers that are not divisible by 7.
numbers.splice(numbers.findIndex((number)=>number%7==0),1)
console.log(numbers)