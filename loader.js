(async()=>{
  const body = await fetch('body.html').then(r=>{if(!r.ok) throw new Error('Failed to load game screen'); return r.text();});
  document.body.innerHTML = body;
  const parts = ['script-01.txt', 'script-02.txt', 'script-03.txt', 'script-04.txt', 'script-05.txt', 'script-06.txt', 'script-07.txt', 'script-08.txt'];
  const code = (await Promise.all(parts.map(p=>fetch(p).then(r=>{if(!r.ok) throw new Error(`Failed to load ${p}`); return r.text();})))).join('');
  (0,eval)(code);
})().catch(err=>{console.error(err); document.body.innerHTML='<main style="font-family:system-ui;padding:2rem"><h1>Game failed to load</h1><p>Please refresh the page.</p></main>';});
