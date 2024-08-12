// Async Code.........
/*
1. => JavaScript is Synchronous (Single Threaded) [Default JS]
2. =>Execution Context:
     => It executes one line of code at a time.
     IN JS if i have two line of code EG:
     console.log("Hello");
     console.log("World");

     => It always prints the first line first means until previous statement is not executed new statement will not be executed which means it waits for the first one to be complete
3. => Blocking code VS Non Blocking Code.
   a.  Blocking code blocks the flow of program
   b.  Non Blocking code doesn't block the execution 

setTimeout :=> it is async code

which we say execute xyz function after some time it is stored in 'REGISTER CALLBACK' and it sends to TASK QUEUE and adds back to CALL STACK
*/