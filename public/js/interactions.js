const years = ['2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012']
document.addEventListener('DOMContentLoaded', () => {
  years.forEach(function(year){
    document.getElementById("btn_" + year).addEventListener("click", function(){
      toggleVisible('table_' + year);
    });
  });

  function toggleVisible(id){
    var thing =  document.getElementById(id);
    if(thing.classList.contains("hidden")){
      thing.className = "visible";
    } else {
      thing.className = "hidden";
    }
  }

  var elements = document.querySelectorAll('.hiddable');
  var length = elements.length;

  for(var i = 0; i < length; i++){
    elements[i].childNodes[1].addEventListener('click', function(){
      var element = get_hiddable(this.parentNode);
      if(element){
        if(element.classList.contains('hidden')){
          element.className = "hiddable_content visible";
        } else {
          element.className = "hiddable_content hidden";
        }
      }
    });
  }

  function get_hiddable(element){
    var length = element.childElementCount;
    var children = element.children;
    for(var i = 0; i < length; i++){
      if (children[i].className.indexOf("hiddable_content") > - 1){
        return children[i];
      }
    }
  }

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
