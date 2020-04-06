if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-borrow')[0].addEventListener('click', borrowClicked)
}

function borrowClicked() {
    alert('You have 3 days to return this movie, Enjoy!')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value >= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('movieTitle')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('img-poster')[0].src
    addItemToCart(title, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This movie has already been added to cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        
        var quantity = quantityElement.value
        total = total + (quantity + quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText =   total
}






//create cookies
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }

  function toggleComment() {
    // get the comment
    var myComment = document.getElementById('info');

    // get the current value of the comment's display property
    var displaySetting = myComment.style.display;

    // also get the comment button, so we can change what it says
    var commentButton = document.getElementById('comment');

    // now toggle the comment and the button text, depending on current state
    if (displaySetting == 'block') {
      // comment is visible. hide it
      myComment.style.display = 'none';
      // change button text
     
    }
    else {
      // comment is hidden. show it
      myComment.style.display = 'block';
      // change button text
      
    
    }

  }
 

//comment input box
window.onclick = function(e)
{   var id =  e.target.id;   
 if (id === 'sent')  
 { var txt = document.getElementById('example').value    
   $( "#para" ).empty().append( txt );
 }
}
var a = [Not, scary, enough];
a.push(txt);

// search bar
function myFunction() {
  var input, filter, ul, li, movieTitle, i, txtValue;
  input = document.getElementsByClassName("searchTxt");
  filter = (input.value.toUpperCase()== !undefined);
  ul = document.getElementsByClassName("movieList");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      movieTitle = li[i].getElementsByClassName("movie-genre")[0];
      txtValue = movieTitle.textContent || movieTitle.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          movieTitle[i].style.display = "";
      } else {
         movieTitle[i].style.display = "none";
      }
  }
}