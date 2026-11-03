(() => {
  const find=id=>document.getElementById(id);
  const controls=document.createElement('nav');
  controls.className='mobile-nav';controls.setAttribute('aria-label','Mobile ledger controls');
  let lastView='earnings';
  const earnings=document.createElement('button'),spending=document.createElement('button'),dashboard=document.createElement('button'),add=document.createElement('button');
  earnings.type=spending.type=dashboard.type=add.type='button';dashboard.textContent='Dashboard';dashboard.onclick=()=>find('dashboard-tab').click();
  earnings.textContent='Earnings';spending.textContent='Spending';add.className='mobile-add';
  earnings.onclick=()=>find('earnings-tab').click();spending.onclick=()=>find('spending-tab').click();
  add.onclick=()=>{if(find('total-tab').getAttribute('aria-pressed')==='true'||find('dashboard-tab').getAttribute('aria-selected')==='true')find(lastView+'-tab').click();find('add').click();};
  controls.append(earnings,spending,dashboard,add);document.body.append(controls);
  function sync(){
    const income=find('earnings-tab').getAttribute('aria-selected')==='true';
    const expense=find('spending-tab').getAttribute('aria-selected')==='true';
    if(income)lastView='earnings';if(expense)lastView='spending';
    for(const [button,active] of [[earnings,income],[spending,expense],[dashboard,find('dashboard-tab').getAttribute('aria-selected')==='true']]){if(active)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');}
    add.textContent='+ Add';
    add.setAttribute('aria-label',lastView==='earnings'?'Add earning':'Add spending');
  }
  const observer=new MutationObserver(sync);
  for(const id of ['earnings-tab','spending-tab','dashboard-tab'])observer.observe(find(id),{attributes:true,attributeFilter:['aria-selected']});
  observer.observe(find('total-tab'),{attributes:true,attributeFilter:['aria-pressed']});
  const balance=find('balance');const sizeBalance=()=>balance.dataset.long=String(balance.textContent.length>9);
  new MutationObserver(sizeBalance).observe(balance,{childList:true,characterData:true,subtree:true});
  const download=document.createElement('a');download.href='10k.apk';download.className='android-download';download.textContent='Download Android app';download.setAttribute('download','10k.apk');
  document.querySelector('footer').append(download);
  sync();sizeBalance();
})();
