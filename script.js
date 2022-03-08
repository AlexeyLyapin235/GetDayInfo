
function getDayInfo (){
    let a = new Date('2021,12,12')
    let options1 = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    
    console.log(a.toLocaleDateString('ru',options1));
    

    }
    
    
    
  getDayInfo()

