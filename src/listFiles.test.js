import { listFiles } from './listFiles';

/**
 * Write a function that lists all the files from
 * a given data(first parameter) and returns it as an array.
 * 
 * It can also accept a second parameter which lists
 * all the files under that directory, returns an empty array
 * if directory does not exist.
 * 
 */

describe('listFiles', () => {
  const data = {
    dir: 'app',
    files: [
      'index.html',
      {
        dir: 'js',
        files: [
          'main.js',
          'app.js',
          'misc.js',
          {
            dir: 'vendor',
            files: [
              'jquery.js',
              'react.js'
            ]
          }
        ]
      },
      {
        dir: 'css',
        files: [
          'styles.css',
          'main.css'
        ]
      }
    ]
  };

  it('should be able to return a list of files from the data', () => {
    const result = listFiles( data );
    expect( result.length ).toEqual( 8 );
    expect( result.indexOf( 'index.html' ) > -1).toBeTruthy();
    expect( result.indexOf( 'main.js' ) > -1).toBeTruthy();
    expect( result.indexOf( 'react.js' ) > -1).toBeTruthy();
  });

  it('should be able to return a list of files in a subdirectory', () => {
    const result = listFiles( data, 'js' );
    expect( result.length ).toEqual( 5 );
    expect( result.indexOf( 'main.js' ) > -1 ).toBeTruthy();
    expect( result.indexOf( 'react.js' ) > -1 ).toBeTruthy();

    const result2 = listFiles( data, 'foo' );
    expect( result2.length ).toEqual( 0 );
  });

  it('should handle invalid input', () => {
    expect(() => listFiles()).toThrow();
    expect(() => listFiles( 'test' )).toThrow();
    expect(() => listFiles( 123.456 )).toThrow();
    expect(() => listFiles( -987 )).toThrow();
    expect(() => listFiles( false )).toThrow();
    expect(() => listFiles( null )).toThrow();
  })
});
