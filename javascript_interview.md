# How does javascript execute code + call stack

JavaScript Execution Context
{} --> Global Execution Context --> It refers with (this) variable

Browser Global Execution context different from node js, bun and deno

In browser this value comes as WINDOW 

JavaScript is a Single threaded

# There are two types of execution context in javascript:-
i) Global Execution Context
ii) Function Execution Context
iii) Eval Execution Context

===
{ } ==> Memory Creation Phase / Creation Phase
    ==> Execution Phase --> + - / * 
===

<pre>
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num 1 + num 2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(18,2)
</pre>

    
`1st Step` ==> Global Execution --> this

`2nd Step` ==> Memory Phase
In this step all variable are collected and assign with that variable as UNDEFINED

val1 -> Undefined
val2 -> Undefined
addNum -> Defination
result1 -> Undefined
result2 -> Undefined

`3rd Step` ==> Execution Phase
val1 -> 10
val2 -> 5
addNum -> new variable envrionment + Execution Thread

Jitni bar bhi ye functions execute hote hai utni bar ek naya box create hota hai jisko bolte hai `NEW EXECUTIONAL CONTEXT` => `new variable environment + excecution thread`



