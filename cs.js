var a=0;
var num1=0;
var hash=0;
var c=0;
var count =0;
var noOfFollowers=0;
var noOfFriends=0;
var wot=0;
var safe=0;
var urllength=0;
var a1=0, a2=0, a3=0,a4=0, a5=0, a6=0;
function fetchTwitterFeed1(callback,name) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        noOfFollowers=callback(data);
	//alert(noOfFollowers);
      } else {
        callback(null);
      }
    }
  }
 	

 var url = 'https://api.twitter.com/1/followers/ids.json?cursor=-1&screen_name='+name;

   xhr.open('GET', url, true);
   xhr.send();
 };
function fetchTwitterFeed2(callback,urlname) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        wot=callback(data);
	//alert(wot);
      } else {
        callback(null);
      }
    }
  }

 var url='http://api.mywot.com/0.4/public_link_json?hosts='+ urlname + '/';
   xhr.open('GET', url, true);
   xhr.send();
 };

 function fetchTwitterFeed4(callback,urlname) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        safe=callback(data);
	alert("safe "+safe);
      } else {
        callback(null);
      }
    }
  }
  // Note that any URL fetched here must be matched by a permission in the manifest.json file!
 

 var url='https://sb-ssl.google.com/safebrowsing/api/lookup?client=api&apikey=ABQIAAAAttQHfgT7moBCWQdDjDYfkxTI_HzNybZoOZWikD9VjdnDxm94eA&appver=1.5.2&pver=3.0&url='+ urlname + '/';
   xhr.open('GET', url, true);

   xhr.send();

 };

 function fetchTwitterFeed3(callback,name) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        noOfFriends=callback(data);
	
      } else {
        callback(null);
      }
    }
  }
 
 var url = 'https://api.twitter.com/1/friends/ids.json?cursor=-1&screen_name='+name;

   xhr.open('GET', url, true);
   xhr.send();
 };

 function onText1(data) {

	for (var key in data.ids){
		
		//	alert(data.ids[key]);
			
		}

	return data.ids.length;

};
function onText3(data) {

	for (var key in data.ids){
		
		
			
		}
	
	return data.ids.length;

};
function onText4(data) {

	for (var key in data){
		
			alert(data);			
		}

	return data;

};

 function onText2(data) {

	for (var key in data){
		
			
		}
	
	return data[key][0][0];

};
 
 var addIcon1 = function(tweet,num) {
	if(tweet.querySelector('span.icon1' && 'span1.icon2' && 'span2.icon3')) {
	return;	}	
	var icon1 = document.createElement('span'); 
	icon1.classList.add('icon1');
	var icon2 = document.createElement('span1');
	icon2.classList.add('icon2');
	var icon3 = document.createElement('span2');
	icon3.classList.add('icon3');
	icon1.innerHTML = '<a href="chrome-extension://fngojhdnakblofadmdocckmefihgpddf/api.html"><img src="chrome-extension://fngojhdnakblofadmdocckmefihgpddf/black.png" /></a>';
	icon2.innerHTML = '<a href="chrome-extension://fngojhdnakblofadmdocckmefihgpddf/api.html"><img src="chrome-extension://fngojhdnakblofadmdocckmefihgpddf/red.png" /></a>';
	icon3.innerHTML = '<a href="chrome-extension://fngojhdnakblofadmdocckmefihgpddf/api.html"><img src="chrome-extension://fngojhdnakblofadmdocckmefihgpddf/green.png" /></a>';
	var iconDest = tweet.querySelector('a.twitter-timeline-link');
	//if(iconDest!= null){
	var choose = iconDest.innerHTML;
	if(num == 1){
	iconDest.insertBefore(icon1, iconDest.firstChild);
} else if (num == 2)
	{ 
	iconDest.insertBefore(icon2, iconDest.firstChild); }
else if (num == 3 )
	{ 
	iconDest.insertBefore(icon3, iconDest.firstChild); }
	}

var findTweets = function(event) {
    var node = event.target;
	
    if (node.webkitMatchesSelector && node.webkitMatchesSelector('div[data-item-type=tweet]')) {
		var x = node.querySelector('div');
			var z= x.getAttribute('data-screen-name');
		fetchTwitterFeed1(onText1,z);
		fetchTwitterFeed3(onText3,z);
	var y = node.querySelector('p.js-tweet-text');
	var para= y.querySelector('a');
	var link= para.getAttribute('data-expanded-url');
		
		 urllength=link.length;
		
		fetchTwitterFeed2(onText2,link);
		fetchTwitterFeed4(onText4,link);
		var ratio=noOfFriends/noOfFollowers;
		var e= String(y.innerHTML);
for( var i=0; i<link.length;i++)
	{
		if(link[i]=='.')
		{count++;
	}
	}

	for( var i=0; i<e.length;i++)
	{
		if(e[i]=='@')
		{c++;
	}
	if(e[i]=='#')
	{hash++;	}
		}
	if( c>=0 && c<=3 )
	{a1=3;
	}
	else if (c<=4 && c<=8)
	{a1=2;
	}
	else if(c>8)
	{a1=1;}
	
	if(count>=0 && count<=4)
	{a2=3;
	}
	else if (count>=5 && count<=7)
	{a2=2;
	}
	else if(count>7)
	{a2=1;}

	if(urllength>=0 && urllength<=25)
	{a3=3;
	}
	else if (urllength>25 && urllength<=35)
	{a3=2;
	}
	else if(urllength>35)
	{ a3=1;}
	
	
	if(wot>80)
	{a4=3;
	}
	else if (wot>=40 && wot<=80)
	{a4=2;
	}
	else if(wot<40)
	{a4=1;}
	//alert("a4"+a4);
	if(hash>=0 && hash<4)
	{a5=3;
	}
	else if (hash>=4 && hash<=7)
	{a5=2;
	}
	else if(hash>8)
	{a5=1;}
	//alert("a5"+a5);
	if(ratio>=0 && ratio<=1)
	{a6=3;
	}
	else if (ratio>1 && ratio<=9)
	{a6=2;
	}
	else if(ratio>9)
	{a6=1;}
	 //alert("a6"+a6);
	
	a = (a1+a2+a3+a4+a5+a6)/6;
		
	if(a >= 0 && a <= 1)
	{num1=1;
	}
	else if (a>1 && a<=2)
	{num1=2;
	}
	else if(a>2)
	{num1=3;}
	
		addIcon1(node,num1);
		  }   
		  else if (node.querySelectorAll) {
		
		  /*
var x = node.querySelectorAll('div');
			var z= x.getAttribute('data-screen-name');
		fetchTwitterFeed1(onText1,z);
				fetchTwitterFeed3(onText3,z);
		//alert(noOfFollowers);
	var y = node.querySelectorAll('p.js-tweet-text');
	var para= y.querySelectorAll('a');
	var link= para.getAttribute('data-expanded-url');
		 urllength=link.length;
		//alert("link"+link+"lengthofthis url"+urllength);
   // var p = node.querySelector('a.twitter-timeline-link');
		//fetchTwitterFeed2(onText2,link);
	//alert("no of followers"+noOfFollowers +"no of followeees "+noOfFriends);
		 ratio=noOfFollowers/noOfFriends;
	//	alert("ratio"+ratio);
		//alert("wot"+wot);
		var e= String(y.innerHTML);
		//alert("para"+e);
		//var count =0;
for( var i=0; i<link.length;i++)
	{
		if(link[i]=='.')
		{count++;
	}
	}
	
	var lengthOfTweet=e.length;
	for( var i=0; i<e.length;i++)
	{
		if(e[i]=='@')
		{c++;
	}if(e[i]=='#')
	{hash++;
	}
	}
		
	var t = node.querySelectorAll('a.twitter-timeline-link');
		for (var i = 0; i < t.length; i++)
		{
		if(c==0&&c<=2)
	{a1=3;
	}
	else if (c==3 && c<=5)
	{a1=2;
	}
	else if(c>5)
	{a1=1;}
	
	if(count==0&&count<=2)
	{a2=3;
	}
	else if (count==3 && count<=5)
	{a2=2;
	}
	else if(count>5)
	{a2=1;}
	
	if(urllength>=0&&urllength<=25)
	{a3=3;
	}
	else if (urllength>25 && urllength<=35)
	{a3=2;
	}
	else if(urllength>35)
	{a3=1;}
	
	
	if(wot>80)
	{a4=3;
	}
	else if (wot>=40 && wot<=80)
	{a4=2;
	}
	else if(wot<40)
	{a4=1;}
	
	if(hash<3)
	{a5=3;
	}
	else if (hash>=3 && hash<=8)
	{a5=2;
	}
	else if(hash>8)
	{a5=1;}
	
	if(ratio>=0 && ratio<=1)
	{a6=3;
	}
	else if (ratio>1 && ratio<=9)
	{a6=2;
	}
	else if(ratio>9)
	{a6=1;}
	 
	a= (a1+a2+a3+a4+a5+a6)/6;
		if(a>=0&&a<=1)
	{num1=1;
	}
	else if (a>1 && a<=2)
	{num1=2;
	}
	else if(a>2)
	{num1=3;}
	
	*/var t = node.querySelectorAll('a.twitter-timeline-link');
		for (var i = 0; i < t.length; i++)
		{
		addIcon1(t[i],node);
		//alert("i just inserted a random icon");
		}
}}

var IconStyles = document.createElement('link');
IconStyles.setAttribute('href', chrome.extension.getURL('styles.css'));
IconStyles.setAttribute('rel', 'stylesheet');
IconStyles.setAttribute('type', 'text/css');
document.head.appendChild(IconStyles);

document.body.addEventListener("DOMNodeInserted", findTweets, false);



