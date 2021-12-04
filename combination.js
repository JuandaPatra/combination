const array = ["one", "who","two","bob","add","owl","fab","den","mia","tat"]

combination=(data,arr)=>{
    const first = []
    const second = []
    const third =[]
    let tempArr = []
    let possible = false
    let temp = ""

    for(let i=0;i<arr.length;i++){
       temps =arr[i].split("")
       tempArr.push(temps)
    }
    for(let j=0;j<tempArr.length;j++){
        first.push(tempArr[j][0])
        second.push(tempArr[j][1])
        third.push(tempArr[j][2])
    }
    
    newFirst = first.filter((item,idx) => first.indexOf(item) === idx)
    newSecond = second.filter((item,idx)=>second.indexOf(item)===idx)
    newThird = third.filter((item,idx)=> third.indexOf(item) === idx)
    
    for(let i=0;i<newFirst.length;i++){
        firstTemp = temp
        temp += `${newFirst[i]}`
        for(let j=0;j<newSecond.length;j++){
            secondTemp = temp
            temp += `${newSecond[j]}`
            for(let k=0;k<newThird.length;k++){
                thirdTemp = temp
                temp+= `${newThird[k]}`
                if(temp===data){
                    possible =true
                    break
                }
                temp = thirdTemp
            }
            temp = secondTemp
        }
        temp = firstTemp
    }

    return possible===true?"Possible" : "not-Possible"
}

console.log(combination("hat", array)) //Not-Possible
console.log(combination("win", array)) //Possible
console.log(combination("deb", array)) //Possible
console.log(combination("men", array)) //Possible
console.log(combination("bad", array)) //Possible
console.log(combination("bed", array)) //Possible
console.log(combination("mat", array)) //Possible
console.log(combination("wiw", array)) //Not-Possible
console.log(combination("tam", array)) //Not-Possible