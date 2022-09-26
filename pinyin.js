

async function  readbook(num){
    
   var result = await fetch('./book'+num.toString()+'.json')
    .then(res=> res.json())
    .then((data)=> data);

    var ok = await createTable(result);
    //var ok = await createTable_word(result);

    configPinYin()
}

function loadStyles(url){

  var curr = document.getElementById('pinyin_kg');
 
  if(curr){
    var head = document.getElementsByTagName("head")[0];
    head.removeChild(curr);
  }

	var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    link.id="pinyin_kg"; 
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
}


function configPinYin(){

    var open = document.getElementById('openpy')
    var close = document.getElementById('closepy')

    open.addEventListener('click',
        ()=>{
            loadStyles('py.css')
        }
    );



    close.addEventListener('click',
    ()=>{
        loadStyles('py2.css')
    }
)
}


function createBooks(){

     loadStyles('py.css')

    var cataloy = document.getElementById('books')

    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    var one= document.createElement('tr')
   
    for(var i=1;i<=6;i++){
        var book = document.createElement('td');
        
        var p = document.createElement('p')
        p.innerHTML="第"+ i.toString() + "册";

        if(i==1){
            p.addEventListener('click',async(_)=>{
                var re= await clearpage();
                readbook(1)
               
            })
        }
        if(i==2){
            p.addEventListener('click',async(_)=>{
                var re= await clearpage();
                readbook(2)
            })
        }
        if(i==3){
            p.addEventListener('click',async(_)=>{
                var re= await clearpage();
                readbook(3)
            })
        }
        if(i==4){
            p.addEventListener('click',async(_)=>{
                var re= await clearpage();
                readbook(4)
            })
        }
        if(i==5){
            p.addEventListener('click',async (_)=>{
                var re= await clearpage();
                readbook(5)
            })
        }
        if(i==6){
            p.addEventListener('click',async(_)=>{
                var re= await clearpage();
                readbook(6)
            })
        }
      

        book.appendChild(p)

        one.appendChild(book)    
    }

    tableBody.appendChild(one);
    table.appendChild(tableBody);

  cataloy.appendChild(table)


            readbook(1)

}

function clearpage(){
    var contianer = document.getElementById('container')
    contianer.innerHTML=null;
    return true;
}

function googleSearch(word){
    const first ='https://www.google.com/search?q='

    const end=`&sxsrf=ALiCzsaU9gaeQz-zQ5VNoc_E8sxmiQkYjg:1662933351259&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjc-b693Y36AhUepokEHZxRCiMQ_AUoAXoECAEQAw&cshid=1662933473424453&biw=2278&bih=885&dpr=1`;

    return first +word+end;
}

function createTable(data){
    var contianer = document.getElementById('container')

    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    var count =0;

    for(var i=0;i<1000;i++){
        var row_pinyin= document.createElement('tr')
            row_pinyin.className='pinyin';

        var row_zi= document.createElement('tr')

        var cell_num = document.createElement('td');

        cell_num.innerHTML= '['+ i+']';


        var cell_num2 = document.createElement('td');
        cell_num2.innerHTML= '['+ i+']';

        row_zi.appendChild(cell_num2);

        row_pinyin.appendChild(cell_num);


        for(var j=0; j<19;j++){
            count = i*19 + j;
            var cell_piyin = document.createElement('td');
         
            var cell_zi = document.createElement('td');

   
            var content_pinyin=''
            var content_zi=''
            if(data[count]){

                content_zi = data[count][0];
                content_pinyin= data[count][1]
            }
            cell_piyin.appendChild(document.createTextNode(content_pinyin));

            
            var p = document.createElement('p')
            p.innerHTML= content_zi;

            p.addEventListener('click',(e)=>{
                const url = googleSearch(e.target.innerHTML);
                window.open(url,'_blank');
            })

            cell_zi.appendChild(p);
            
            row_pinyin.appendChild(cell_piyin);
            row_zi.appendChild(cell_zi);
        }

        tableBody.appendChild(row_pinyin)
        tableBody.appendChild(row_zi)
    }

    table.appendChild(tableBody);
    contianer.appendChild(table);

    return true;
}


function createTable_word(data){
    var contianer = document.getElementById('container')

    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    var count =0;

    for(var i=0;i<300;i++){
       
        var row_zi= document.createElement('tr')

        for(var j=0; j<40;j++){
            count = i*40 + j;
           
            var cell_zi = document.createElement('td');

   
     
            var content_zi=''

            if(data[count]){

                content_zi = data[count][0];

            }
     

            
         var p = document.createElement('p')
            p.innerHTML= content_zi;

            p.addEventListener('click',(e)=>{
                console.log(e.target.innerHTML)
            })

            cell_zi.appendChild(p);
            row_zi.appendChild(cell_zi);
        }

        tableBody.appendChild(row_zi)
    }
    table.appendChild(tableBody);
    contianer.appendChild(table);

    return true;
}



// readbook();

createBooks();



