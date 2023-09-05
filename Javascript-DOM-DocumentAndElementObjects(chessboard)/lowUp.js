//Hər hansı bir sözün daxilində olan kiçik hərfləri böyük hərfə, böyük hərfləri kiçik hərfə çevirən funksiya yazın

function lowUp(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == word[i].toUpperCase()) {
            document.write(word[i].toLowerCase())
        }
        else {
            document.write(word[i].toUpperCase())
        }
    }
}

//lowUp("Hello");





//js let arr=[23,12,34,12,30,12,34,89,1,3,0,123,453]  verilən array daxilində eyni olan ədədlərdən təkrarlananları silərək sadəcə bir ədədini saxlayın və əldə edilən bütün dəyərləri yeni array şəklində ekrana çap edin. 

let arr = [23, 12, 34, 12, 30, 12, 34, 89, 1, 3, 0, 123, 453];
let x = [];
for (let i = 0; i < arr.length; i++) {
    if (!x.includes(arr[i])) { // !- yoxdursa demekdir
        x.push(arr[i])
    }


}
// document.write(x);


// Sahmat taxtasi
// let templateContainer=document.querySelector(".template");
// let templateContainerWidth=templateContainer.clientWidth;

// for (let j=0; j<8; j++){

// for (let i=0; i<8; i++) {
//     let box = document.createElement ("div");
//     box.innerHTML=i;
//     box.setAttribute("class", "box d-flex justify-content-center align-items-center");

//     templateContainer.appendChild(box);
//     if(i%2==0) {
//         box.classList.add("bg-dark");
//         box.setAttribute("style", `color:white; width: ${templateContainerWidth/8}px; height: ${templateContainerWidth/8}px; color : white;`);
//     } else{
//         box.classList.add("bg-light");
//         box.setAttribute("style", `color:white; width: ${templateContainerWidth/8}px; height: ${templateContainerWidth/8}px; color : black;`);
//     }
// }

// }

// let box= document.querySelector(".box");
// let template=document.querySelector('.template')
// for(let setir=0;setir<8;setir++){
//     for(let sutun=0;sutun<8;sutun++){
//         if((sutun+setir)%2==0){
//             template.innerHTML+=`<div class='box black'></div>`
//         }else{
//             template.innerHTML+=`<div class='box white'></div>`
//         }
//     }
// }


function createChessBoard(boardWidth){
    let template=document.querySelector('.template')
    template.style.width=`${boardWidth}px`
    template.style.height=`${boardWidth}px`
    for(let setir=0;setir<8;setir++){
        for(let sutun=0;sutun<8;sutun++){
            if((sutun+setir)%2==0){
                template.innerHTML+=`<div class='box black' style="width:${boardWidth/8}px; height:${boardWidth/8}px;"></div>`
            }else{
                template.innerHTML+=`<div class='box white' style="width:${boardWidth/8}px; height:${boardWidth/8}px;"></div>`
            }
        }
    }
}

createChessBoard(300)
