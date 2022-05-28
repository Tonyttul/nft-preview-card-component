let bands = ['The Plt in you', 'A skylit Drive', 'Anywhere But Here']
function m(){
    
    return bands.forEach((band, i)=>{
        if(band.slice(0, 1) === "A"){
            console.log(band)
        }
    })
}
// bands.sort((a, b)=> a-b? 1: -1)

console.log(m())

