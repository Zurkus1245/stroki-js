let stroka='hello world'
console.log(stroka.length)
console.log(stroka[10])
console.log(stroka.indexOf('o'))
console.log(stroka.includes('o'))
stroka1=stroka.replaceAll('o','*')
console.log(stroka1)

for (i=0;i<stroka.length;i++){
    if (stroka[i]==='o'){
        console.log('o',i)
    }
}

const spisok=stroka.split('')
console.log(spisok)

const nums=[1,2,3,4,5]
let str=nums.join('**')
console.log(str)