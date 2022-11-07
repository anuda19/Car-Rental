        // Book now modal date and time input show n hide
        function showNhide(){
            let time = document.getElementById('schedule');
        if(time.value == "S")
        document.getElementById('input').style.display = 'flex';
        else 
        document.getElementById('input').style.display = 'none';
    }

    // Navbar enables seach input  
    let s = document.getElementsByClassName('search_input_box')
    let d= document.getElementById('search_input')
    s[0].style.display = 'none'
    function showNhideInput(){
      s[0].style.display = 'flex'
      d.style.display = 'none'
}

  const hideSearch = ()=>{
    s[0].style.display = 'none'
    d.style.display = 'flex'
  }
// Navbar scroll color change
    window.onscroll = function() {scrollFunction()};
 
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        
        document.getElementById("navbar").style.background = "#501e27";
      } else {
        document.getElementById("navbar").style.background = "none";
      }
    }

    // Book now modal date and time 
    const date = new Date().toString()
  var dateArray = date.split('');
  dateArray.splice(date.indexOf('GMT') - 4);
  var shorter = dateArray.join('');

  // document.getElementById('date-time').innerHTML = shorter


