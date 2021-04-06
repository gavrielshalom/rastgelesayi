

function myFunc(){
    var guessNum = document.getElementById("guessNumber").value;
    console.log(guessNum);
    if(guessNum == Math.floor(10)){
        document.getElementById("aneG").innerText = "Tahminin doğru! Harikasın ❤️";
        document.getElementById("guessNumber").value ="";
        location.replace("https://github.com/barcafatih/rastgelesayi");
  
    }
    else{
        document.getElementById("aneG").innerText = "Tahminin maalesef yanlış. 😪";
        document.getElementById("guessNumber").value ="";
    }
}
