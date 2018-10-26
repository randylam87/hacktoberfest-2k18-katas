export const humanReadableDuration = ( num ) => {
  try {
    if ( num < 0 || !Number.isInteger( num ) ) throw "Not a number!"
    if ( num === 0 ) return 'now';

    const numberArr = [];
    const unitArr = [];

    (function parseNumber( x ) {
      if ( x <= 0 ) return;

      const minute = 60;
      const hour = minute * 60;
      const day = hour * 24;
      const year = day * 365;
      
      let remainder;
      switch( true ) {
        case ( x >= year ):
          numberArr.push( Math.floor( x / year ));
          unitArr.push( Math.floor( x / year ) > 1 ? 'years' : 'year' );
          remainder = x % year;
          break;
        case ( x >= day ):
          numberArr.push( Math.floor( x / day ));
          unitArr.push( Math.floor( x / day ) > 1 ? 'days' : 'day' );
          remainder = x % day;
          break;
        case ( x >= hour ):
          numberArr.push( Math.floor( x / hour ));
          unitArr.push( Math.floor( x / hour ) > 1 ? 'hours' : 'hour' );
          remainder = x % hour;
          break;
        case ( x >= minute ):
          numberArr.push( Math.floor( x / minute ));
          unitArr.push( Math.floor( x / minute ) > 1 ? 'minutes' : 'minute' );
          remainder = x % minute;
          break;
        default:
          numberArr.push( x );
          unitArr.push( x > 1 ? 'seconds' : 'second' )
          remainder = 0;
      }
      parseNumber( remainder );
    })( num )

    return num;
  } catch ( e ) {
    return new Error( e );
  }
};

console.log( humanReadableDuration( 252288000 ));
