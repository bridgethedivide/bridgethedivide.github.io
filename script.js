function initDisplay(){
    var coIdarray= new Array("id1","id2","id3","id4","id5","id6","id7","id8","id9","id10","id11"); 

    for(i=0; i<coIdarray.length; i++){ 
	document.getElementById(coIdarray[i]).style.display="none";
	}
    
    document.getElementById("id1").style.display="block";
    document.getElementById("img1").src="down.png";

}

function switchSection(coId,imId){ 
    var coIdarray= new Array("id1","id2","id3","id4","id5","id6","id7","id8","id9","id10","id11"); 
    var imIdarray= new Array("img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","img11"); 

    if (document.getElementById(coId).style.display=="none"){
	for(i=0; i<coIdarray.length; i++){ 
	    if(coIdarray[i] == coId ){
		document.getElementById(coId).style.display="block"; 
		document.getElementById(imId).src="down.png";
	    }else{ 
		document.getElementById(coIdarray[i]).style.display="none"; 
		document.getElementById(imIdarray[i]).src="up.png";
	    } 
	} 
    }
    else {
	for(i=0; i<coIdarray.length; i++){ 
	    document.getElementById(coIdarray[i]).style.display="none"; 
	    document.getElementById(imIdarray[i]).src="up.png";
	} 
    }
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-41115155-1', 'deepam.in');
ga('send', 'pageview');


