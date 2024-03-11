$(function () {
    let container = $('#gallery'),
        loadmoreBtn = $('#load-more'),
        addItemCount = 10, //클릭시 표시될 개수
        added = 0, //표시된 개수
        allData = [];  
  
  
        let bodyHeight = 0;
        let documentHeight = 0;
        container.masonry({
            // options
            itemSelector: '.item',
            columnWidth: 270
        });
  
  
        $.getJSON('./data/content.json', initGallery);
  
  
        function initGallery(result){
          console.log(result);
          allData = result;
          addItems(); //10개씩 추가  
         
                 
        }




        
  
        let excuted = false;
  
  
        $(window).scroll(()=>{
          let currentScroll = $(window).scrollTop();        
          if(documentHeight - bodyHeight - 50 <= currentScroll){
            if(!excuted){
              addItems();
              excuted = true;
              setTimeout(()=>{
                excuted = false;
              },500)
            }
          }
  
  
        })
  
  
  
  
        function addItems(){
          let listHtml = '';
          let elements = []
          let slicedData = allData.slice(added, added + addItemCount);
          console.log(slicedData);
          // added = added + addItemCount;
          added += addItemCount;
          //<li>A Day in the Life</li>, forEach
          /*
          slicedData.forEach(item=>{
            listHtml +=`<li>${item.title}</li>`;
          });
          */
          $.each( slicedData, function(idx,item) {
            listHtml =`<li class="item">
              <h2>${item.title}</h2>
              <img src="${item.images.thumb}" alt="${item.title}">        
            </li>
            `;
            elements.push($(listHtml).get(0))
          });

          container.append($(elements));
          // if(added === allData.length) { loadmoreBtn.hide();}
          added >= allData.length ? loadmoreBtn.hide() :loadmoreBtn.show() ;
  
  
          setTimeout(()=>{
            bodyHeight = $(window).outerHeight();
            documentHeight = $(document).outerHeight();
            console.log(bodyHeight, documentHeight);
          }, 300)
                 

          container.imagesLoaded( function() {
            // images have loaded
              container.masonry( 'appended', elements )


          });
          
          
        } //additem()
        loadmoreBtn.click(addItems);
    
  
  
  
  
        /*
        loadItems();
        async function loadItems() {
          const response = await fetch("./data/content.json");
          const data = await response.json();
          console.log(data);
        }
        */
  
  
  
  
  });
  
  
  