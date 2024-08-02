let calculation= localStorage.getItem('calculation') || '';
     showOnPage();
    function updateCalculation(value){
      calculation+=value;
      showOnPage();
    localStorage.setItem('calculation',calculation);
    } 

      function showOnPage(){
      document.querySelector('.js-showcalculation')
        .innerHTML=calculation;
      }