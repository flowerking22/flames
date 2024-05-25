const p1=document.querySelector('#person1');
const p2=document.querySelector('#person2');
const result=document.querySelector('#result');
const guess=document.querySelector('#guess');
const reset=document.querySelector('#reset');
reset.addEventListener('click',function(){
p1.value='';
p2.value='';
result.innerHTML='';
});
guess.addEventListener('click',function(){
    if (!p1.value|| !p2.value) {
        result.innerHTML= "<span>Please enter both names..</span>";
    }
    else{
    let relation= flamesGame(p1.value, p2.value);
    // console.log("The relationship is:",relation);
    result.innerHTML=`The relationship is: <span data-color=${relation[1]}>`+relation[0]+"</span>";
    // let url="https://api.whatsapp.com/send/?phone=9150371784&text=";
    // let data=p1.value +'_'+p2.value +" are in "+relation[0];
    // window.open(url+data,"_blank");
    result.querySelector('span').style.color=relation[1];
    }
});
function removeCommonCharacters(name1, name2) {
 
    let list1 = name1.split('');
    let list2 = name2.split('');
    
    for (let char of name1.split('')) {
        if (list2.includes(char)) {
            list1.splice(list1.indexOf(char), 1);
            list2.splice(list2.indexOf(char), 1);
        }
    }
    console.log(list1,list2);
    return list1.join('') + list2.join('');
}

function flamesGame(name1, name2) {
    name1 = name1.toLowerCase().replace(/\s/g, '');
    name2 = name2.toLowerCase().replace(/\s/g, '');

    let combinedNames = removeCommonCharacters(name1, name2);
    let count = combinedNames.length;
    console.log(count,combinedNames);
    if (count ==0) {
        // alert('o');
        return ["No Match Found","red"];
    }

    let flames = ['F', 'L', 'A', 'M', 'E', 'S'];
    
    let index = 0;
    
    while (flames.length > 1) {
        index = (index + count - 1) % flames.length;
        flames.splice(index, 1);
    }
    
    let relationshipMap = {
        'F': ['Friends','yellow'],
        'L': ['Love','green'],
        'A': ['Affection','blue'],
        'M': ['Marriage','pink'],
        'E': ['Enemy','red'],
        'S': ['Siblings','orange']
    };
    
    return relationshipMap[flames[0]];
}


