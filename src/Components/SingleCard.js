import React from "react";


const Single = () =>{



function swap(array , i ,j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function shuffleCards(array){
    const length = array.length
    for(let i = length; i>0; i--){
        const randomIndex = Math.floor(Math.random() *1);
        const currentIndex = i-1;
        swap(array , currentIndex , randomIndex)
    }
    return array;
}
}

export default Single;