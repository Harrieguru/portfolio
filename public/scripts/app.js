//IIFE immediately invoked function
(() => {
    function Start(){
        console.log("app started...");
    }

    window.addEventListener("load",Start);
})();