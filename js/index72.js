function exercise2 (event) {

    var collection = []   
    var elemData = {
       name: "div",
        attrs: {
           className: "container",
           title: [ "first", "second", "third", "fourth" ],
           style: `
               border: dotted 1px yellow;;
               background-color: #ff00ff50;
           `
        }
    }

      function over ( event ) {
        event.target.style.backgroundColor = "#ffff0050"
      }
      function out ( event ) {
         event.target.style.backgroundColor = "#ff00ff50"
      }
      function clickHandler ( event ) {
         event.target.remove ()
         event.target.removeEventListener()
      }



    function insertElement ( elemNum, parentElem ) {
       var elem = parentElem.appendChild (
           document.createElement ( elemData.name )
       )

       for ( var attr in elemData.attrs )  
         elem [ attr ] = elemData.attrs [ attr ]
       elem.title = elemData.attrs.title [ elemNum ]
       elem.style.width = `${300 - elemNum * 50}px`
       elem.style.height = `${300 - elemNum * 50}px`
        
       elem.addEventListener ( 'mouseover', over )
       elem.addEventListener ( 'mouseout', out )
       elem.addEventListener ( 'click', clickHandler )
       return elem
    }

    collection [0] = insertElement ( 0, document.querySelector ('.result2') )

    elemData.attrs.title.forEach (function ( tag, index  ) {
       index === 0 ? null : 
          collection.push ( insertElement ( index, collection [ index - 1 ]) )
})

    // var collection = []
    // collection [0] = insertElement ( 0, document.querySelector ('.result2') )
    // for ( var x = 1; x < elemData.attrs.title.length; x++ ) {
    //    collection [x] = insertElement ( x, collection [ x - 1 ] )
    // }

}
