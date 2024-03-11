$(function () {
  let container = $('#gallery'),
      loadmoreBtn = $('#load-more'),
      addItemCount = 10, //클릭시 표시될 개수
      added = 0, //표시된 개수
      allData = [];
      $.getJSON('./data/content.json', initGallery);

      function initGallery(result){
        console.log(result);
        allData = result;
        addItems(); //10개씩 추가
      }
      function addItems(){
        let listHtml = '';
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
          listHtml +=`<li>${item.title}</li>`;
        });

        container.append(listHtml);
      }

      /*
      loadItems();
      async function loadItems() {
        const response = await fetch("./data/content.json");
        const data = await response.json();
        console.log(data);
      }
      */


});
