const answer = document.getElementById("answer");
const weight = document.getElementById("weight");
const height =  document.getElementById("height");
const solve = document.getElementById("solve");

 const heightTras = () =>parseFloat(height.value)/ 3.281; 


solve.addEventListener("click", ()=>{
    const weightPro = parseFloat(weight.value);
    const heightPro = heightTras();
    const solvePro = weightPro/(heightPro ** 2);

    return answer.innerHTML = `Your BMI Score is  ${solvePro.toFixed(2)}`;

})
