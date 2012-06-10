var tID=setTimeout(function(){},0);
for(var c=1;c<1000&&c<=tID;++c){
  clearTimeout(tID-c);
}
var iID=setInterval(function(){},1000);
for(var c=0;c<1000&&c<=iID;++c){
  clearInterval(iID-c);
}

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

var knews=function() {};

knews.prototype.getAllElms=function(elm, where){
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

knews.prototype.remMatchEls=function(elms, patt, attr){
  for(var x in elms){
    var a=elms[x];
    if(a!=undefined&&a[attr]!=undefined&&a[attr]!=null&&a[attr]!=""&&a[attr].match!=undefined){
      if(a[attr].match(patt)!=null){
        if(elms[x]!=undefined){
          elms[x].remove();
        }
      }
    }
  }
};

knews.prototype.idNameStartsWith=function(elm,start){
  var patt=new RegExp('^'+start,'gi');
  patt.compile(patt);
  this.remMatchEls(this.getAllElms(elm), patt, 'id');
};

knews.prototype.classNameStartsWith=function(elm,start){
  var patt=new RegExp('^'+start,'gi');
  patt.compile(patt);
  this.remMatchEls(this.getAllElms(elm), patt, 'className');
};

knews.prototype.classNameContains=function(elm,nameBit){
  var patt=new RegExp(nameBit,'gi');
  patt.compile(patt);
  this.remMatchEls(this.getAllElms(elm), patt, 'className');
};

knews.prototype.removeID=function(x){
  var y=document.getElementById(x);
  if(y!=undefined){y.remove();}
};

knews.prototype.rTag=function(tag){
  var a=this.getAllElms(tag);
  var j=a.length;
  for(var i=0;i<j;i++){
    var x=a[i];
    if(x!=undefined){x.remove();}
  }
};

knews.prototype.iFrameSrc=function(srcBit){
  var patt=new RegExp(srcBit,'gi');
  patt.compile(patt);
  this.remMatchEls(this.getAllElms('iframe'), patt, 'src');
};

knews.prototype.imgSrc=function(srcBit){
  var patt=new RegExp(srcBit,'gi');
  patt.compile(patt);
  this.remMatchEls(this.getAllElms('img'), patt, 'src');
};

knews.prototype.remParentOrMe=function(b) {
  for(z in b){
    if(b[z]!=undefined){
      c=b[z].parentElement;
      if(c!=undefined) {
        c.remove();
      } else {
        b[z].remove();
      }
    }
  }
}

var K=new knews();

var a=K.getAllElms('object');
for (i in a) {
  if(a[i].parentElement!=undefined) {
    a[i].parentElement.remove();
  } else {
    a[i].remove();
  }
}

var a=K.getAllElms('embed');
for (i in a) {
  if(a[i].parentElement!=undefined) {
    a[i].parentElement.remove();
  } else {
    a[i].remove();
  }
}

K.removeID('subLeftNav');
K.removeID('scrollDiv');
K.removeID('dt_banner_layout');

K.classNameContains('*','banner');
K.classNameContains('*','floatdiv');
K.classNameContains('*','adwrap');
K.classNameContains('*', 'photonews');
K.classNameContains('*', 'ad\\d+');
K.classNameContains('*','ad_?s?c?roll');
K.classNameStartsWith('*','ad_');
K.classNameContains('*','adbox');
K.classNameContains('*','shoppingbox');
K.classNameContains('*','emart');
K.classNameContains('*','bidwar');
K.classNameStartsWith('*','AD_');
K.classNameContains('*','Today_fn');
K.classNameContains('*','siu-vertical-cont');
K.idNameStartsWith('div','soea');
K.idNameStartsWith('*','criteo');
K.idNameStartsWith('*','sidebar');
K.idNameStartsWith('*','sndroll');
K.idNameStartsWith('*','sbaExpose');
K.idNameStartsWith('*','nad');
K.idNameStartsWith('*','emart');
K.idNameStartsWith('*', 'popul');
K.idNameStartsWith('*','wrap_social');
K.idNameStartsWith('*', 'Gnb_banner');
K.idNameStartsWith('*', 'realclick');
K.idNameStartsWith('*','TI_BANNER');
K.idNameStartsWith('*','banner');
K.idNameStartsWith('*','RealFooter');
K.idNameStartsWith('*','s_ollehphoto');
K.idNameStartsWith('*','ad_branding');
K.idNameStartsWith('*','marketing_v');
K.idNameStartsWith('*','valetTools');
K.idNameStartsWith('*','floatdiv');

K.remMatchEls(K.getAllElms('iframe'), /realclick/gi, 'src');
K.remMatchEls(K.getAllElms('a'), /realclick/gi, 'href');
K.remMatchEls(K.getAllElms('a'), /ad_denta/gi, 'href');
K.remMatchEls(K.getAllElms('a'), /RealMedia\/ads/gi, 'href');
K.remMatchEls(K.getAllElms('a'), /showHideLayer/gi, 'href');
K.remMatchEls(K.getAllElms('a'), /ad_link/gi, 'href');
K.remMatchEls(K.getAllElms('img'), /sub_banner/gi, 'src');
K.remMatchEls(K.getAllElms('img'), /\/ad\./gi, 'src');

K.iFrameSrc('imadrep');
K.iFrameSrc('adv\.');
K.iFrameSrc('ads\.');
K.iFrameSrc('lightad');
K.iFrameSrc('opap.co.kr');
K.iFrameSrc('ad_denta');
K.iFrameSrc('mediaharbor');
K.iFrameSrc('adixs');
K.iFrameSrc('banner');
K.iFrameSrc('google_tag');
K.iFrameSrc('cm.interworksmedia.co.kr');
K.iFrameSrc('dgate');
K.iFrameSrc('RealMedia\/ads');
K.iFrameSrc('\/ad\/');
K.iFrameSrc('biz.chosun.com\/comm');
K.iFrameSrc('_ad\.');
K.iFrameSrc('\/ad\.');

var mt=K.getAllElms('meta');
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

var b=K.getAllElms("script[contains(@src,'adsr.')]");
if(b!=[]){
  K.remParentOrMe(b);
}

var b=K.getAllElms("script[contains(@src,'ad.osen')]");
if(b!=[]){
  K.remParentOrMe(b);
}

var b=K.getAllElms("img[contains(@src,'wisenut')]");
if(b!=[]){
  K.remParentOrMe(b);
}

var b=K.getAllElms("img[contains(@src,'banner')]");
if(b!=[]){
  K.remParentOrMe(b);
}

var b=K.getAllElms("img[contains(@src,'ad.dt.co.kr')]");
if(b!=[]){
  K.remParentOrMe(b);
}

var b=K.getAllElms("a[contains(@href,'unse.dt.co.kr')]");
if(b!=[]){
  K.remParentOrMe(b);
}

var a=K.getAllElms('iframe');
if(a!=[]){
  var j=a.length;
  for(var i=0;i<j;i++) {
    var b=K.getAllElms("a[contains(@href,'adsr.')]", a[i]);
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


for (x in window){
  if(x.toString().match(/timer/i)) clearTimeout(x);
}

void(document.onmousedown=null);void(document.onclick=null);void(document.oncontextmenu=null)
