# EventLoop 
JS is synchronous and single threaded bydefault

# There can be async behaviour
- with BrowerAPI -
setTimeout, setInterval, setImmediate, nextTick
- with promises
- with event handlers

# promise
A function not executed immediately but it must be executed after a while . it has some status during the execution . 

at final it may  =>
- reslove => (success)  
- reject => (unsuccess)

# Call back function 
that pass as argument or the parameter to another function .

# Modern javascript is divided into two cateogry
1) commonJS (.cjs) -> supports OOPS -> require
   - priority (nextTick, Promise , setImmediate/setTimeout)
2) moduleJS (.mjs) -> follow modular approach -> import 
   - priority (Promise,nextTick,setImmediate/setTimeout)

   
