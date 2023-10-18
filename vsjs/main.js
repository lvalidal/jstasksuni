// function Bio(fullname , age , networth , popularity, isMarried = false, children = 0) {
    


//     this.name = fullname ,

//     this.age = age ,

//     this.costPrice = costPrice , 

//     this.networth = networth ,

//     this.popularity = popularity ,

//     this.isMarried = isMarried ,

//     this.children = children 



    

// }



// let celeb1 = new Bio( 'Keanu Reeves' , 59 , '380 million' , 'very popular' )


// console.log(Bio)



// function bio(word) {

//     this.word = word ;

//     this.mine = function (search) {

//         for (let index = 0; index < this.word.length; index++) {
//             if (this.word[index] === search) {

//                 return true ;
                
//             }


//             else {

//                 console.log( "try again ")
//             }
            
//         }
        
//     }


 
    
// }







// let baku = new bio ("Baku")


// console.log()



// let person = {
//     firstName: "Keanu",
//     lastName: "Reeves",
//     age: '59',
//     isMarried: false , 
//     children: 0 
//   };
//   person.name = function() {
//     return (this.firstName + " " + this.lastName).length ;
//   };
  

//   console.log(person.name())


//   ageOf = function() {

//     return this.age.replace('59' , '60')
    
//   }


//   console.log(ageOf())

  



// -----1-----

function bio (word) {

    let count = 0 ;

    this.word = word ;


    this.wordLenght = function (idk) {


        for (let index = 0; index < idk.length; index++) {
            

            count++ ;
        }

        return count ;
        
    }
   
    
}



// let response= new bio ("hello world");
// console.log(response.wordLenght("tesewekkur"));


// -----------------------------------------------------------------------------------



// function abc(xyz) {

//     this.xyz = xyz ;


//     this.wordTrim = function (www) {

//         for (let index = 0; index < www.length; index++) {



            
            
//         }
        
//     }
    
// }



// let response= new abc ("      hello world      ");
// console.log(response.wordTrim())




let text = 'this_is a_text for my_uni_task' ;

text = text.replaceAll('_' , '-') ;

console.log(text) ;


let word = '    Adios   ' ;

length = word.length ;

console.log(length)

trim = word.trim()

console.log(trim)

a = word.trim().length

console.log(a)




let abc = " Baku , London , New York , Roma" ;


let xyz = abc.slice(0,5)

console.log(xyz)

console.log(abc.substring( 8 , 15))


let www = abc.toUpperCase()

console.log(www)


let nba = abc.toLowerCase()

console.log(nba)


let one = 'Hola'

let two = 'Amigos'

let both = one.concat(" ", two);

console.log(both)



let num = "1";

let padd = num.padStart(3,"0");

console.log(padd)


let numb = "1";
let pad = num.padEnd(3,"0");

console.log(pad)










// function cstTrim(soz){
// let newWord=""

// for(let i = 0; i < soz.length; i++){
// if(soz[i]!=" "){
//     newWord+=soz[i]
// }


// }
// console.log(newWord)

// }

// cstTrim("    Aysun    ")

