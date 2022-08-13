function Selection(){
    c_delay=0;


    for(var i=0;i<array_size-1;i++){

        div_update(div_array[i],div_size[i],"red");
        var min_idx=i;
        for(var j=i+1;j<array_size;j++){
            div_update(div_array[j],div_size[j],"yellow");

            if(div_size[j]<div_size[min_idx]){
                div_update(div_array[min_idx],div_size[min_idx],"#00ccff");
                min_idx=j;
                div_update(div_array[min_idx],div_size[min_idx],"red");
            }
            else{
                div_update(div_array[j],div_size[j],"#00ccff")
            }
        }
        if(min_idx!=i){
            var temp=div_size[i];
            div_size[i]=div_size[min_idx];
            div_size[min_idx]=temp;

            div_update(div_array[min_idx],div_size[min_idx],"red");
            div_update(div_array[i],div_size[i],"red")
            div_update(div_array[min_idx],div_size[min_idx],"#00ccff");
        }
        div_update(div_array[i],div_size[i],"#00ff00");
    }
    div_update(div_array[i],div_size[i],"#00ff00");
}