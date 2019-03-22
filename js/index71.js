function exercise1 (event) {

	var parag = document.createElement ( 'p' )
	parag.innerText = "Click here" 
	parag.className = "parag"
	document.querySelector(".result1").appendChild ( parag )
	parag.onclick = function (event) {
		if (document.getElementById ("image")) return
		    var image = document.createElement ("img")
		    image.id = "image"
		    image.src = "https://image.shutterstock.com/image-vector/javascript-programming-language-script-code-260nw-1062509657.jpg"
		    image.width = "200"
		    document.querySelector(".result1").appendChild ( image )
		    image.style.transition = "all 0.5s"
		    image.onmouseover = function ( event ) {
		        this.width = "300"
		        this.style.transition ="all 0.5s"
		    }
		    image.onmouseout = function ( event ) {
		        this.width = "200"
		        this.style.transition ="all 0.5s"
		    }
		    image.onclick = function (event){
		        this.style.display = "none"
		    }
	}
	parag.onmouseout = function ( event ) {
	   this.style.color = '#fff'
	}
	parag.onmouseover = function ( event ) {
	    this.style.color = '#ff0248'
	}

}




