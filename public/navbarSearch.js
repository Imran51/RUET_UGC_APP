
function validateNavBarSearch() {
        var serachedValue = document.forms["navbarSearch"]["searchSession"].value;
          if (serachedValue == "" || serachedValue == null) {
            alert("search must be filled out");
            return false;
          }else{
            return allnumeric(serachedValue)
          }
        }
        function allnumeric(inputtxt)
        {
            var numbers = /^[0-9]+$/;
            if(inputtxt.value.match(numbers))
            {
              return true;
            }
            else
            {
              alert('Invalid search format');
              
              return false;
            }
        } 
   