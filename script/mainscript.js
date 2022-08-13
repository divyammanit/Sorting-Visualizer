var inp_size=document.getElementById("a_size");
var inp_speed=document.getElementById("a_speed");
var inp_gen=document.getElementById("a_generate");
var cont=document.getElementById("array_container")

var algo_button=document.querySelectorAll(".algo-buttons button");



var div_size=[];
var div_array=[];
var array_size=inp_size.value;
var margin_size=0.2;

inp_gen.addEventListener("click",generate_array);
inp_size.addEventListener("input",update_array_size);

window.onload=update_array_size();

function update_array_size(){
    array_size=inp_size.value;
    generate_array();
}

function generate_array(){

    cont.innerHTML="";
    for(var i=0;i<array_size;i++){
        div_size[i]=Math.floor(Math.random()*80)+10;
        div_array[i]=document.createElement("div");
        cont.appendChild(div_array[i]);
        div_array[i].style= "margin:0% " + margin_size +"% ; background-color: #00ccff; width :" + 100 + "% ; height :" + (div_size[i]) +"%;";
                         
    }
}

var speed=500;

inp_speed.addEventListener("input",vis_speed);

function vis_speed(){
    var array_speed=inp_speed.value;
    switch(parseInt(array_speed)){
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=500;
                break;
        case 5: speed=1000;
                break;
        case 6: speed=10000;
                break;        
    }

    delay_time=10000/(Math.floor(array_size/10)*speed);
}
    var delay_time=10000/(Math.floor(array_size/10)*speed);
    var c_delay=0;

    function div_update(cont,height,color){
        window.setTimeout(function(){
        cont.style = " margin:0% " + margin_size + "%; width:" + 100 + "%; height:" + height + "%; background-color:" + color + ";";
        },c_delay+=delay_time);
    }

    for(var i=0;i<algo_button.length;i++){
        algo_button[i].addEventListener("click",runalgo);
    }

function runalgo(){
    switch (this.innerHTML) {
        case "Bubble": Bubble();
            
            break;
        case "Merge": Merge();
            
            break;
        case "Selection": Selection();
            
            break;
        case "Heap": Heap();
            
            break;
    
        
    }
}

