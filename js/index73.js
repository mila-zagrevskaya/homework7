function exercise3 (event) {

  var collection = []   
  var elemData = {
       name: "div",
        attrs: {
           className: "container",
           title: [1, 2, 3, 4, 5, 6, 7],
           style: `
               border: dotted 1px yellow;;
               background-color: #ff00ff50;
           `
        }
      }

    function enter ( event ) {
      	event.target.style.backgroundColor = "#ffff0050"
    }
    function leave ( event ) {
    	event.target.style.backgroundColor = "#ff00ff50"
    }
    function clickHandler ( event ) {
      	event.target.children.length ?
        event.target.parentNode.appendChild(event.target.children[0]) : null
    	event.target.remove()
	}
    



    function insertElement ( elemNum, parentElem ) {
       var elem = parentElem.appendChild (
           document.createElement ( elemData.name )
       )

       for ( var attr in elemData.attrs )  
         elem [ attr ] = elemData.attrs [ attr ]
       elem.title = elemData.attrs.title [ elemNum ]
       elem.style.width = `${250 - elemNum * 25}px`
       elem.style.height = `${250 - elemNum * 25}px`
        
       elem.addEventListener ( 'mouseenter', enter )
       elem.addEventListener ( 'mouseleave', leave )
       elem.addEventListener ( 'click', clickHandler )
       return elem
    }

    collection [0] = insertElement ( 0, document.querySelector ('.result3') )

    elemData.attrs.title.forEach (function ( tag, index  ) {
       index === 0 ? null : 
          collection.push ( insertElement ( index, collection [ index - 1 ]) )
	})
}
