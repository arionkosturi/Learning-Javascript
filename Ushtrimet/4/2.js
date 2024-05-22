/* Të krijohen konstantet a dhe b 
që marrin vlerat 10 dhe ‘john’ 
përmes të destrukturimit të vektorit */
function f() {
  return [[3, 4], ['john'], 10, '10', 'john']
  }
  
  // kodi yt (shkruaje kodin e destruktirimit këtu)
  // const [a] = f().slice(2,3);

   const [, , ,a, b] = f()
  // dalja
  //console.log(parseInt(a)) // 10
  console.log(a);
  console.log(b) // 'john'