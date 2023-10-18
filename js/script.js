
// MARKSET GRADINBG POINT 

// -1 OR 101 = BETA PAKNAMU KORO

// 80-100 = A+
// 70-79 = A
// 60-69 =A-
// 50-59 = B
// 40-49 = C 
// 33-39 = D 


    // let mark = 30                                                                        

    // if(mark<0 || mark>100){
    //    console.log("BETA PAKNAMU KORO NAHH PORTA BOS")
    // }

    // else if (mark>=80 && mark<=100){
    //    console.log("IAM GOT GPA 5 OR A+")
    // }
    // else if (mark>=70){
    //    console.log("TUMI PAYACO A")
    // }
    // else if (mark>=60){
    //    console.log("TUMI PAYACO A-")
    // }
    // else if (mark>=50){
    //     console.log("TUMI PAYACO B")
    // }
    // else if (mark>=40){
    //     console.log("TUMI PAYACO C")
    // }
    // else if (mark>=33){
    //     console.log("TUMI PAYACO D")
    // }
    // else {
    //     console.log ("YOU ARE FAIL")
    // }


// let text = document.querySelector("h1")
// console.log(text.innerHTML)




// let input = document.querySelector('input')
// let btn = document.querySelector('button')
// let text = document.querySelector('h1')
// btn.addEventListener('click',function(){
//    if(input.value>=18){
//         text.innerHTML = "BIYA KORTA PARBA"
//         text.style.color = "green"
//    }
//    else{
//     text.innerHTML = "PAKNAMI KORBI NA "
//     text.style.color = "red"
//    }
// })




let type = document.querySelector('input')

let btn = document.querySelector('button')

let results = document.querySelector('h1')

btn.addEventListener('click',function(){
    if (type.value<0 || type.value>100){
        results.innerHTML = "BICI PAKA PULAPAIN"
        results.style.color = "red"
    }
    else if (type.value>=80 && type.value<=100){
        results.innerHTML = "YOU HAVE GOT GPA 5 OR A+"
        results.style.color = "green"
    }
    else if(type.value>=70) {
        results.innerHTML = "YOU HAVE GOT GPA A"
        results.style.color = "lightgreen"
    }
    else if(type.value>=60){
        results.innerHTML = "YOU HAVE GOT GPA A-"
        results.style.color = "hotpink"
    }
    else if (type.value>=50){
        results.innerHTML = "YOU HAVE GOT GPA B"
        results.style.color = "yellow"
    }
    else if (type.value>=40){
        results.innerHTML = "YOU HAVE GOT GPA C"
        results.style.color = "orange"
    }
    else  if (type.value>=33){
        results.innerHTML = "YOU HAVE GOT GPA D"
        results.style.color = "blue"
    }

    else{
        results.innerHTML = "FAILER IS BETTER THAN SUCCESS"
        results.style.color = "GreenYellow" 
    }
})


























