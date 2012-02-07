document.onmousedown=null;
document.onclick=null;
document.oncontextmenu=null;

Object.prototype.remove=function() {
  var a=this.parentElement;
  if(a!=undefined) {
    a.removeChild(this);
  } else{
    this.innerHTML='';
    this.height=0;
    this.width=0;
  }
};
var getAllElms=function(elm, where){
  if(where==undefined) where=document.documentElement;
  var a=[];
  var result=document.evaluate('//'+elm,where,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
  if(result){
    for(var i=0,len=result.snapshotLength;i<len;i++){
      a.push(result.snapshotItem(i));
    }
  }
  return a;
};

var remMatchEls=function(elms, patt, attr){
  for(var x in elms){
    var a=elms[x];
    if(a!=undefined&&a[attr]!=undefined){
      //console.log(a[attr]);
      if(a[attr].match(patt)!=null){
        if(elms[x]!=undefined){elms[x].remove();}
      }
    }
  }
};

idNameStartsWith=function(elm,start){
  console.log('idNameStartsWith');
  var patt=new RegExp('^'+start,'gi');
  patt.compile(patt);
  remMatchEls(elms=getAllElms(elm), patt, 'id');
};

var classNameStartsWith=function(elm,start){
  console.log('classNameStartsWith');
  var patt=new RegExp('^'+start,'gi');
  patt.compile(patt);
  remMatchEls(elms=getAllElms(elm), patt, 'className');
};

var classNameContains=function(elm,nameBit){
  console.log('classNameContains');
  var patt=new RegExp(nameBit,'gi');
  patt.compile(patt);
  remMatchEls(elms=getAllElms(elm), patt, 'className');
};

var tID=setTimeout(function(){},0);
for(var c=1;c<1000&&c<=tID;++c){
  clearTimeout(tID-c);
}
var iID=setInterval(function(){},1000);
for(var c=0;c<1000&&c<=iID;++c){
  clearInterval(iID-c);
}
var rId=function(x){
  var y=document.getElementById(x);
  if(y!=undefined){y.remove();}
};
var rTag=function(tag){
  console.log('rTag');
  var a=getAllElms(tag);
  var j=a.length;
  for(var i=0;i<j;i++){
    var x=a[i];
    if(x!=undefined){x.remove();}
  }
};

var iFrameSrc=function(srcBit){
  console.log('iFrameSrc');
  var patt=new RegExp(srcBit,'gi');
  patt.compile(patt);
  remMatchEls(getAllElms('iframe'), patt, 'src');
};

var a=getAllElms('object');
for (i in a) {
  if(a[i].parentElement!=undefined) {
    a[i].parentElement.remove();
  } else {
    a[i].remove();
  }
}

var a=getAllElms('embed');
for (i in a) {
  if(a[i].parentElement!=undefined) {
    a[i].parentElement.remove();
  } else {
    a[i].remove();
  }
}

rId('subLeftNav');
rId('scrollDiv');
rId('dt_banner_layout');

classNameContains('*','banner');
classNameContains('*','floatdiv');
classNameContains('*','adwrap');
classNameContains('*', 'photonews');
classNameContains('*', 'ad\\d+');
classNameContains('*','ad_?s?c?roll');
classNameStartsWith('*','ad_');
classNameContains('*','adbox');
classNameContains('*','shoppingbox');
classNameContains('*','emart');
classNameContains('*','bidwar');
classNameStartsWith('*','AD_');
classNameContains('*','Today_fn');
classNameContains('*','siu-vertical-cont');
idNameStartsWith('*','soea');
idNameStartsWith('*','criteo');
idNameStartsWith('*','sidebar');
idNameStartsWith('*','sndroll');
idNameStartsWith('*','sbaExpose');
idNameStartsWith('*','nad');
idNameStartsWith('*','emart');
idNameStartsWith('*', 'popul');
idNameStartsWith('*','wrap_social');
idNameStartsWith('*', 'Gnb_banner');
idNameStartsWith('*', 'realclick');
idNameStartsWith('*','TI_BANNER');
idNameStartsWith('*','banner');
idNameStartsWith('*','RealFooter');
idNameStartsWith('*','s_ollehphoto');

remMatchEls(getAllElms('iframe'), /realclick/gi, 'src');
remMatchEls(getAllElms('a'), /realclick/gi, 'href');
remMatchEls(getAllElms('a'), /ad_denta/gi, 'href');
remMatchEls(getAllElms('a'), /RealMedia\/ads/gi, 'href');
remMatchEls(getAllElms('a'), /showHideLayer/gi, 'href');
remMatchEls(getAllElms('a'), /ad_link/gi, 'href');
remMatchEls(getAllElms('img'), /sub_banner/gi, 'src');
remMatchEls(getAllElms('img'), /\/ad\./gi, 'src');

iFrameSrc('imadrep');
iFrameSrc('adv\.');
iFrameSrc('ads\.');
iFrameSrc('lightad');
iFrameSrc('opap.co.kr');
iFrameSrc('ad_denta');
iFrameSrc('mediaharbor');
iFrameSrc('adixs');
iFrameSrc('banner');
iFrameSrc('google_tag');
iFrameSrc('cm.interworksmedia.co.kr');
iFrameSrc('dgate');
iFrameSrc('RealMedia\/ads');
iFrameSrc('\/ad\/');
iFrameSrc('biz.chosun.com\/comm');
iFrameSrc('_ad\.');
iFrameSrc('\/ad\.');

var mt=getAllElms('meta');
var j=mt.length;
for(var i=0;i<j;i++){
  var a=mt[i];
  if(typeof(a)=='object'){
    var attr=a.getAttribute('http-equiv');
    if(attr!=undefined){
      if(attr=='refresh'){
        a.parentNode.removeChild(a);
      }
    }
  }
}

var b=getAllElms("script[contains(@src,'adsr.')]");
if(b!=[]){
  for(z in b){
    if(b[z]!=undefined){b[z].remove();}
  }
}

var b=getAllElms("script[contains(@src,'ad.osen')]");
if(b!=[]){
  for(z in b){
    if(b[z]!=undefined){b[z].parentElement.remove();}
  }
}

var b=getAllElms("img[contains(@src,'wisenut')]");
if(b!=[]){
  for(z in b){
    if(b[z]!=undefined){b[z].parentElement.remove();}
  }
}

var b=getAllElms("img[contains(@src,'banner')]");
if(b!=[]){
  for(z in b){
    if(b[z]!=undefined){b[z].parentElement.remove();}
  }
}

var b=getAllElms("img[contains(@src,'ad.dt.co.kr')]");
if(b!=[]){
  for(z in b){
    if(b[z]!=undefined){b[z].remove();}
  }
}

var b=getAllElms("a[contains(@href,'unse.dt.co.kr')]");
if(b!=[]){
  for(z in b){
    if(b[z]!=undefined){b[z].remove();}
  }
}

var a=getAllElms('iframe');
if(a!=[]){
  var j=a.length;
  for(var i=0;i<j;i++) {
    var b=getAllElms("a[contains(@href,'adsr.')]", a[i]);
    if(b!=[]) a[i].remove();
  }
}

if(window.location.hostname=="enewstoday.co.kr") {
  a=document.getElementsByTagName('table')[22];
  b=a.getElementsByTagName('tr')[0];
  c=b.children[2];
  c.remove();
  c=b.children[0];
  c.remove();
}

swfObject='';
pausescroller='';
