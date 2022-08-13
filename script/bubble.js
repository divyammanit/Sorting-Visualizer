function Bubble(){

    c_delay=0;
    for(var i=0;i<array_size-1;i++){

        for(var j=0;j<array_size-i-1;j++){
            div_update(div_array[j],div_size[j],"yellow");
            

            if(div_size[j]>div_size[j+1]){

                div_update(div_array[j],div_size[j],"red");
                div_update(div_array[j+1],div_size[j+1],"red");

                var temp=div_size[j];
                div_size[j]=div_size[j+1];
                div_size[j+1]=temp;

                div_update(div_array[j],div_size[j],"red");
                div_update(div_array[j+1],div_size[j+1],"red");
            }
            div_update(div_array[j],div_size[j],"#00ccff");
        }
        
        div_update(div_array[j],div_size[j],"#00ff00");
    }
    div_update(div_array[0],div_size[0],"#00ff00");
}