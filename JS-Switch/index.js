 //JavaScript Document
window.onload=function ()
{
	new TabSwitch('main');  //重置TabSwitch()事件
};

function getByClass(oParent,sClass)//封装获得class的函数
{
	var aEle=oParent.getElementsByTagName('*');
	var aResult=[];
	for(var i=0;i<aEle.length;i++)
	{
		if(aEle[i].className==sClass)
		{
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}

function TabSwitch(id)
{
	var _this=this;
	var oDiv=document.getElementById(id);
	
	var oDivUp=getByClass(oDiv,'title-right')[0];
	this.aLiUp=oDivUp.getElementsByTagName('a');
	
	this.aDiv=getByClass(oDiv,'photo');
	
	for(var i=0;i<this.aLiUp.length;i++)
	{
		this.aLiUp[i].index=i;
		this.aLiUp[i].onclick=function ()
		{
			_this.fnClick(this);
			
		};
	}
};

TabSwitch.prototype.fnClick=function (aLiUp)
{
	for(var i=0;i<this.aLiUp.length;i++)
	{
		this.aLiUp[i].className='';
		this.aDiv[i].style.display='none';
		
	}
	
	aLiUp.className='active';
	this.aDiv[aLiUp.index].style.display='block';
}