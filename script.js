const $ = (id) => document.getElementById(id);
const p = new URL(document.location).searchParams;
const w = window.innerWidth;
/*const db = [
  //4xx Client Errors:
  ["400", "Bad Request"],
  ["401", "Unauthorized"],
  ["402", "Payment Required"],
  ["403", "Forbidden"],
  ["404", "Not Found"],
  ["405", "Method Not Allowed"],
  ["406", "Not Acceptable"],
  ["407", "Proxy Authentication Required"],
  ["408", "Request Timeout"],
  ["409", "Conflict"],
  ["410", "Gone"],
  ["411", "Length Required"],
  ["412", "Precondition Failed"],
  ["413", "Payload Too Large"],
  ["414", "URI Too Long"],
  ["415", "Unsupported Media Type"],
  ["416", "Range Not Satisfiable"],
  ["417", "Expectation Failed"],
  ["418", "I'm a teapot"],
  ["419", "Authentication Timeout"],
  ["421", "Misdirected Request"],
  ["422", "Unprocessable Entity"],
  ["423", "Locked"],
  ["424", "Failed Dependency"],
  ["425", "Too Early"],
  ["426", "Upgrade Required"],
  ["428", "Precondition Required"],
  ["429", "Too Many Requests"],
  ["431", "Request Header Fields Too Large"],
  ["449", "Retry With"],
  ["451", "Unavailable For Legal Reasons"],
  ["499", "Client Closed Request"],
  //5xx Server Errors:
  ["500", "Internal Server Error"],
  ["501", "Not Implemented"],
  ["502", "Bad Gateway"],
  ["503", "Service Unavailable"],
  ["504", "Gateway Timeout"],
  ["505", "HTTP Version Not Supported"],
  ["506", "Variant Also Negotiates"],
  ["507", "Insufficient Stroage"],
  ["508", "Loop Detected"],
  ["509", "Bandwidth Limit Exceeded"],
  ["510", "Not Exceeded"],
  ["511", "Network Authentication Required"],
  ["520", "Unknown Error"],
  ["521", "Web Server Is Down"],
  ["522", "Connection Timed Out"],
  ["523", "Origin Is Unreachable"],
  ["524", "A Timeout Occurred"],
  ["525", "SSL Handshake Failed"],
  ["526", "Invalid SSL Certificate"]
];*/
fetch("db.json").then((file) => {
  let r = new FileReader();
  let txt = r.readAsText(file);
  alert(txt);
});

const error = p.get('num') ?? "000";
const f = error[0];
const errorType = (f == "4" && db.get(error)) ? "Client Error:":"Unknown Error:";
alert(JSON.stringify(db))
$('title').innerHTML = p.get('title');
$('body').innerHTML = `
<div><b style="font-size: ${w/30}px; font-family:"Times New Roman";">${errorType}</b></div>
<div><b style="font-size: ${w/25}px; font-family:"Times New Roman";">${error}</b></div>
<div><b style="font-size: ${w/30}px; font-family:"Times New Roman";">
` + (db.get(error) ?? "") + "</b></div>";
