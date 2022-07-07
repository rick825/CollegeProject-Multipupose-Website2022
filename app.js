 document.addEventListener('DOMContentLoaded', function() {
const selector = '.appop';
const elems = Array.from( document.querySelectorAll( selector ) );
const navigation = document.querySelector( '.appoption' );
console.log('jkjkl');

function makeActive( evt ) {
  const target = evt.target;
  
  if ( !target || !target.matches( selector ) ) {
    return;
  }
  
  elems.forEach( elem => elem.classList.remove( 'active' ) );
    
    evt.target.classList.add( 'active' );
};

navigation.addEventListener( 'mousedown', makeActive );

} );