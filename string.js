function Totalmark() {
debugger;


let a=document.getElementById("Ts").value;


let c=a.length
let i
let cap_count=0
let num_count=0
let sml_count=0
let spl_count=0


for(i=0;i<c;i++){
    if(((a.charCodeAt(i))>=65) && ((a.charCodeAt(i))<=90)){   //-Captitel letter
        // console.log(a.at(i))
        cap_count++
    }
   else if(((a.charCodeAt(i))>=97) && ((a.charCodeAt(i))<=122)){  //-Small letter
        // console.log(a.at(i))
        sml_count++
    }
    else  if(((a.charCodeAt(i))>=49) && ((a.charCodeAt(i))<=57)){    // - number
        // console.log(a.at(i))
        num_count++
    }
      else  if(((a.charCodeAt(i))>=32) && ((a.charCodeAt(i))<=64)){    // - number
        // console.log(a.at(i))
        spl_count++
    }
    else{
        
    }
   

}
document.getElementById("total").innerText = (`Total value: ${a.length}`);
document.getElementById("Capital").innerText=(`Capitel Letter:${cap_count}`)
document.getElementById("Small1").innerText=(`Small Letter:${sml_count}`)
document.getElementById("Number").innerText=(`Numbers:${num_count}`)
document.getElementById("spl").innerText=(`Speciel:${ spl_count}`)

}