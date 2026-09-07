// Minimal DOM for event-driven conversation tests. No browser/TTS claims: tests
// explicitly deliver successful, failed or stale device-playback callbacks.
function createConversationDocument(){
  const ids=new Map();
  const decode=text=>String(text).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
  class Element {
    constructor(tag='div',attrs={}){
      this.tagName=tag.toUpperCase();this.attrs=attrs;this.dataset={};this.style={};this.children=[];this.listeners={};this._html='';this._text='';
      for(const [key,value] of Object.entries(attrs))if(key.startsWith('data-'))this.dataset[key.slice(5).replace(/-([a-z])/g,(_,x)=>x.toUpperCase())]=decode(value);
      this.disabled='disabled' in attrs;this.hidden='hidden' in attrs;this.open='open' in attrs;this.value='';
      this.classList={add(){},remove(){},toggle(){},contains(){return false;}};
      if(attrs.id)ids.set(attrs.id,this);
    }
    removeChildren(){for(const child of this.children){child.removeChildren();if(child.attrs.id&&ids.get(child.attrs.id)===child)ids.delete(child.attrs.id);}this.children=[];}
    set innerHTML(html){
      this.removeChildren();this._html=String(html);
      for(const match of this._html.matchAll(/<([a-z][a-z0-9-]*)\b([^>]*)>/gi)){
        const attrs={};for(const a of match[2].matchAll(/([\w-]+)(?:="([^"]*)"|='([^']*)')?/g))attrs[a[1]]=decode(a[2]??a[3]??'');
        const child=new Element(match[1],attrs);const end=this._html.indexOf('</'+match[1]+'>',match.index+match[0].length);
        child._text=end<0?'':decode(this._html.slice(match.index+match[0].length,end).replace(/<[^>]*>/g,''));this.children.push(child);
      }
    }
    get innerHTML(){return this._html;}
    set textContent(text){this._text=String(text);}
    get textContent(){return this._text;}
    matches(selector){
      if(selector.startsWith('#'))return this.attrs.id===selector.slice(1);
      if(selector.startsWith('.'))return String(this.attrs.class||'').split(/\s+/).includes(selector.slice(1));
      const attr=selector.match(/^\[([\w-]+)(?:="([^"]*)")?\]$/);
      if(attr)return attr[1] in this.attrs&&(attr[2]===undefined||this.attrs[attr[1]]===attr[2]);
      return this.tagName.toLowerCase()===selector;
    }
    querySelectorAll(selector){
      const selectors=selector.split(',').map(x=>x.trim()),out=[];
      const visit=node=>{for(const child of node.children){if(selectors.some(s=>child.matches(s)))out.push(child);visit(child);}};visit(this);return out;
    }
    querySelector(selector){return this.querySelectorAll(selector)[0]||null;}
    addEventListener(type,fn){(this.listeners[type]||(this.listeners[type]=[])).push(fn);}
    removeEventListener(){}
    dispatch(type){for(const fn of this.listeners[type]||[])fn({target:this});}
    click(){if(this.disabled)throw new Error('Clicked disabled '+(this.attrs.id||this.textContent));if(this.onclick)this.onclick();this.dispatch('click');}
    setAttribute(key,value){this.attrs[key]=String(value);}
    getAttribute(key){return this.attrs[key]??null;}
    removeAttribute(key){delete this.attrs[key];}
    hasAttribute(key){return key in this.attrs;}
    appendChild(child){this.children.push(child);}
    remove(){}focus(){}scrollIntoView(){}
  }
  const body=new Element('body'),stage=new Element('div',{id:'stage'});body.children.push(stage);
  return {body,activeElement:new Element(),documentElement:new Element(),visibilityState:'visible',hasFocus(){return true;},addEventListener(){},removeEventListener(){},getElementById:id=>ids.get(id)||null,querySelector:s=>body.querySelector(s),querySelectorAll:s=>body.querySelectorAll(s),createElement:tag=>new Element(tag),get stage(){return ids.get('stage');}};
}
module.exports={createConversationDocument};
