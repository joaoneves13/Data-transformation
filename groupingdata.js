const numbers = [0, 1, 4, 5, 6, 9]

const even = numbers.reduce((accumulator, currentvalue) => {
    // console.log('test:accumulator', accumulator);
    // console.log('test:currentvalue', currentvalue);
    if(currentvalue % 2 == 0){
    accumulator.push(currentvalue)
    }
   return accumulator
   }, [])
   
   console.log('Even', even)

   const uneven = numbers.reduce((accumulator, currentvalue) => {
    // console.log('test:accumulator', accumulator);
    // console.log('test:currentvalue', currentvalue);
    if(currentvalue % 2 !== 0){
    accumulator.push(currentvalue)
    }
   return accumulator
   }, [])
   console.log('Uneven', uneven)
   