function Heap()
{
    c_delay=0;
    heap_sort();
}

function swap(i,j)
{
    div_update(div_array[i],div_size[i],"red");
    div_update(div_array[j],div_size[j],"red");

    var temp=div_size[i];
    div_size[i]=div_size[j];
    div_size[j]=temp;

    div_update(div_array[i],div_size[i],"red");
    div_update(div_array[j],div_size[j],"red");

    div_update(div_array[i],div_size[i],"#00ccff");
    div_update(div_array[j],div_size[j],"#00ccff");
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_size[l]>div_size[largest])
    {
        largest=l;
    }

    if(r<n && div_size[r]>div_size[largest])
    {
        largest=r;
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        div_update(div_array[i],div_size[i],"yellow");
        div_update(div_array[0],div_size[0],"yellow");
        swap(0,i);
        
        div_update(div_array[i],div_size[i],"#00ff00");
        div_update(div_array[0],div_size[0],"#00ccff");

        max_heapify(i,0);

    }
    div_update(div_array[i],div_size[i],"#00ff00");
}
