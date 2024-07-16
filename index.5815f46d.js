var r=document.querySelector("ul"),e=Array.from(r.children);function n(r){return parseFloat(r.getAttribute("data-salary").replaceAll("$","").replaceAll(",",""))}r.innerHTML="",(e.sort(function(r,e){return n(e)-n(r)}),e.map(function(r){return r})).forEach(function(e){return r.append(e)});
//# sourceMappingURL=index.5815f46d.js.map
