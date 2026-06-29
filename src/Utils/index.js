function thisElement(arr, startLine,res,text) {

    let rep = startLine.replace(/[^a-z]/gi,'')
    console.log('gge');
    
    if(startLine.length < text.length){
        return res.filter(item =>
        item.name.toLowerCase().startsWith(rep.toLowerCase())
        );
    }
    return arr.filter(item =>
    item.name.toLowerCase().startsWith(rep.toLowerCase())
    );
    
}

export { thisElement }