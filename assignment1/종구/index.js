function hexcode() {

    var number = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f']
    var newarr = []
    
    
    for (var i=0; i<6; i++){
        newarr.push(number[Math.floor(Math.random()*16)]);
    }
    
    var hex = 'Rgba(' + parseInt(newarr.slice(0, 2).join(''), 16) + ',' + 
                    parseInt(newarr.slice(2, 4).join(''), 16) + ',' + 
                    parseInt(newarr.slice(4, 6).join(''), 16) + ', 1)';
    
    
    
    var x = document.getElementById("backgr");
    
    x.style.backgroundColor = hex;
    
    document.getElementById("code").innerHTML = hex;
    
    
    
    }