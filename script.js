

const aa=document.querySelector('#num1')
const bb=document.querySelector('#num2')


let final=document.querySelector('#sumi')

function sum()
{
    const a=Number(aa.value)
    const b=Number(bb.value)
    let res=a+b
    final.textContent="Addition : "+res
}

function sub()
{
    const a=Number(aa.value)
    const b=Number(bb.value)
    let res=a-b 
    final.textContent="Subtraction : "+res
}
function mul()
{
    const a=Number(aa.value)
    const b=Number(bb.value)
    let res=a*b 
    final.textContent="Multiplication : "+res
}
function div()
{
    const a=Number(aa.value)
    const b=Number(bb.value)
    let res=a/b 
    final.textContent="Division : "+res

}
function mod()
{
    const a=Number(aa.value)
    const b=Number(bb.value)
    let res=a%b 
    final.textContent="Modular Divison : "+res

}
function exp()
{
    const a=Number(aa.value)
    const b=Number(bb.value)
    let res=a**b 
    final.textContent="Exponent : "+res
}