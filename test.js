

function createTable(){
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    var count =0;

    for(var i=0;i<10;i++){
        var row_pinyin= document.createElement('tr')
       
        for(var j=0; j<20;j++){
            count = i*10 + j;
            var cell_piyin = document.createElement('td');

            cell_piyin.className='pinyin';

           // var div= document.createElement('div')
            var p = document.createElement('p')
            p.innerHTML= i+'-'+j;

            p.addEventListener('click',(e)=>{
                
            })

            // div.appendChild(p)
            cell_piyin.appendChild(p)
          

            row_pinyin.appendChild(cell_piyin);
        
        }
        tableBody.appendChild(row_pinyin)

    }
    table.appendChild(tableBody);
    document.body.appendChild(table);

    return true;
}

createTable();