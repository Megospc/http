const $ = (id) => document.getElementById(id);
const p = new URL(document.location).searchParams;
const w = window.innerWidth;

async function start() {
  let fetch_ = await fetch("https://megospc.github.io/http/db.json");
  let arr = await fetch_.json();
  let db = new Map(arr);
  const error = p.get('num') ?? "000";
  const f = error[0];
  const errorType = (f == "4" && db.get(error)) ? "Client Error:":"Unknown Error:";
  $('title').innerHTML = p.get('title');
  $('body').innerHTML = `
  <div><b style="font-size: ${w/30}px; font-family:"Times New Roman";">${errorType}</b></div>
  <div><b style="font-size: ${w/25}px; font-family:"Times New Roman";">${error}</b></div>
  <div><b style="font-size: ${w/30}px; font-family:"Times New Roman";">
  ` + (db.get(error) ?? "") + "</b></div>";
}

start();