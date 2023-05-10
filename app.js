let list =
    [
        {
            name: "Ha",
            gender: 'female',
            poin: 8
        },
        {
            name: "Huy",
            gender: 'male',
            poin: 9
        },
        {
            name: "Hung",
            gender: 'male',
            poin: 7
        },
        {
            name: "Phuong",
            gender: 'female',
            poin: 6
        },
        {
            name: "Huyen",
            gender: 'female',
            poin: 10
        },
        {
            name: "Long",
            gender: 'male',
            poin: 5
        },
        {
            name: "Luan",
            gender: 'male',
            poin: 10
        },
        {
            name: "Linh",
            gender: 'female',
            poin: 8
        }

    ];
let listOfMale = list.filter(e=>{
    if(e.gender==="male"){
        return e
    }
})
let listOfFemale = list.filter(e=>{
    if(e.gender==="female"){
        return e
    }
})
console.log(`Average score of the bois is ${(listOfMale.reduce((sum,e)=>sum+e.poin,0))/listOfMale.length}`)
console.log(`Average score of the gurls is ${(listOfFemale.reduce((sum,e)=>sum+e.poin,0))/listOfFemale.length}`)