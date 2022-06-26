(()=>{var t={653:(t,e,r)=>{const o=r(585),i=()=>{const t={hasBeenHit:!1,isShip:!1,offLimits:!1},e=Array(10).fill(structuredClone(t)).map((()=>Array(10).fill(structuredClone(t)))),r=[o(5,"Carrier"),o(4,"Battleship"),o(3,"Destroyer"),o(3,"Submarine"),o(2,"Patrol Boat")],i=(t,r)=>e?.[t]?.[r],n=(r,o,i=(()=>Object.assign(t,{offLimits:!0}))())=>(void 0===e?.[r]?.[o]||(e[r][o]=i),!0),a=(t,e)=>{n(t-1,e-1),n(t,e-1)},s=(t,r,o,i)=>{const s=i.getLength();if("vertical"===o){if(n(t,r+s),r>=0&&r+s-1<e.length){for(let e=0;e<s;e+=1)n(t,r+e,i),n(t+1,r+e),n(t-1,r+e);return((t,e,r)=>{a(t,e),n(t,e+r),n(t+1,e+r),n(t-1,e+r),n(t+1,e-1)})(t,r,s),!0}}else if("horizontal"===o&&t>=0&&t+s-1<e.length){for(let e=0;e<s;e+=1)n(t+e,r,i),n(t+e,r+1),n(t+e,r-1);return((t,e,r)=>{a(t,e),n(t+r,e),n(t-1,e+1),n(t+r,e+1),n(t+r,e-1)})(t,r,s),!0}return!1},l=()=>{const t=0===Math.floor(2*Math.random())?"vertical":"horizontal";return{randomColumn:Math.floor(10*Math.random()),randomRow:Math.floor(10*Math.random()),randomDirection:t}};return{checkIfOffLimitZoneWasCorrectlyImplemented:t=>e.flat().filter((t=>!0===t.offLimits)).length===t+2,getLocation:i,receiveAttack:(t,r)=>{e[t][r].hasBeenHit=!0},checkIfAllShipsHaveSunk:()=>e.flat().every((t=>!1===t.isShip||!0===t.isShip&&!0===t.hasBeenHit&&t.getStatus().every((t=>"hit"===t)))),placeShip:s,randomlyPlaceShips:()=>{const t=[];for(let e=0;e<r.length;e+=1){const{randomColumn:o,randomRow:n,randomDirection:a}=l(),c=r[e],h=i(o,n);!0===h.isShip||!0===h.offLimits||!1===s(o,n,a,c)?e-=1:t.push({randomColumn:o,randomRow:n,randomDirection:a})}return t}}};i().randomlyPlaceShips(),t.exports=i},61:t=>{t.exports=(t="player")=>({getName:()=>t,attack:(t,e,{getLocation:r,receiveAttack:o})=>void 0===r(t,e).hasBeenHit?(o(t,e),"It's a hit!"):"You have already hit this spot!"})},585:t=>{t.exports=(t,e="ship")=>{const r=Array(t).fill("unhit");return{name:e,getLength:()=>r.length,isSunk:()=>r.every((t=>"hit"===t)),hit:e=>{e<t&&(r[e]="hit")},getStatus:()=>r,isShip:!0}}}},e={};function r(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,r),n.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=(t,e,r,o,i)=>{const n=o.getLocation(e,r);n.isShip&&(console.log(n.isSunk()),n.isSunk()?t.classList.add("sunk"):t.classList.add("hit"),((t,e,r,o)=>{o.attack(t,e,r)})(e,r,o,i))};var e=r(653),o=r.n(e),i=r(61),n=r.n(i);const a=o()(),s=o()(),l=n()();n()(),a.randomlyPlaceShips(),s.randomlyPlaceShips(),((e,r)=>{const o=document.querySelector("div.enemy-board");for(let i=0;i<10;i+=1)for(let n=0;n<10;n+=1){const a=o.querySelector(`.cell:nth-child(${10*n+i+1})`);a.setAttribute("column",i),a.setAttribute("row",n),a.addEventListener("click",(()=>{t(a,i,n,e,r)}))}})(s,l),(({getLocation:t})=>{const e=document.querySelector("div.player-board");for(let r=0;r<10;r+=1)for(let o=0;o<10;o+=1){const i=e.querySelector(`.cell:nth-child(${10*o+r+1})`);t(o,r).isShip&&i.classList.add("ship")}})(a)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUMsRUFBV25DLHFCRG1CNkIsRUFBQ21DLEVBQVlDLEtBQ2pELE1BQU1RLEVBQWlCQyxTQUFTQyxjQUFjLG1CQUU5QyxJQUFLLElBQUloRixFQUFTLEVBQUdBLEVBQVMsR0FBSUEsR0FBVSxFQUN4QyxJQUFLLElBQUlDLEVBQU0sRUFBR0EsRUFBTSxHQUFJQSxHQUFPLEVBQUcsQ0FFbEMsTUFBTThCLEVBQU8rQyxFQUFlRSxjQUN4QixtQkFBeUIsR0FBTi9FLEVBQVdELEVBQVMsTUFFM0MrQixFQUFLa0QsYUFBYSxTQUFVakYsR0FDNUIrQixFQUFLa0QsYUFBYSxNQUFPaEYsR0FDekI4QixFQUFLbUQsaUJBQWlCLFNBQVMsS0FDM0JkLEVBQVdyQyxFQUFNL0IsRUFBUUMsRUFBS29FLEVBQVlDLFFDN0IxRGEsQ0FBeUJkLEVBQVksR0RFSSxHQUFHdEUsa0JBQ3hDLE1BQU1xRixFQUFrQkwsU0FBU0MsY0FBYyxvQkFFL0MsSUFBSyxJQUFJaEYsRUFBUyxFQUFHQSxFQUFTLEdBQUlBLEdBQVUsRUFDeEMsSUFBSyxJQUFJQyxFQUFNLEVBQUdBLEVBQU0sR0FBSUEsR0FBTyxFQUFHLENBQ2xDLE1BQU04QixFQUFPcUQsRUFBZ0JKLGNBQ3pCLG1CQUF5QixHQUFOL0UsRUFBV0QsRUFBUyxNQUV2Q0QsRUFBWUUsRUFBS0QsR0FBUVQsUUFDekJ3QyxFQUFLMkMsVUFBVUMsSUFBSSxVQ1RuQ1UsQ0FBMEJSLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC9zaGlwLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbmNvbnN0IGNyZWF0ZVNoaXAgPSByZXF1aXJlKCcuLi9zaGlwL3NoaXAnKVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuY29uc3QgY3JlYXRlR2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVtcHR5Q2VsbCA9IHsgaGFzQmVlbkhpdDogZmFsc2UsIGlzU2hpcDogZmFsc2UsIG9mZkxpbWl0czogZmFsc2UgfVxuICAgIGNvbnN0IGdhbWVCb2FyZCA9IEFycmF5KDEwKVxuICAgICAgICAuZmlsbChzdHJ1Y3R1cmVkQ2xvbmUoZW1wdHlDZWxsKSlcbiAgICAgICAgLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChzdHJ1Y3R1cmVkQ2xvbmUoZW1wdHlDZWxsKSkpXG5cbiAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgICAgY3JlYXRlU2hpcCg1LCAnQ2FycmllcicpLFxuICAgICAgICBjcmVhdGVTaGlwKDQsICdCYXR0bGVzaGlwJyksXG4gICAgICAgIGNyZWF0ZVNoaXAoMywgJ0Rlc3Ryb3llcicpLFxuICAgICAgICBjcmVhdGVTaGlwKDMsICdTdWJtYXJpbmUnKSxcbiAgICAgICAgY3JlYXRlU2hpcCgyLCAnUGF0cm9sIEJvYXQnKSxcbiAgICBdXG5cbiAgICBjb25zdCBjaGVja0lmQWxsU2hpcHNIYXZlU3VuayA9ICgpID0+XG4gICAgICAgIGdhbWVCb2FyZC5mbGF0KCkuZXZlcnkoXG4gICAgICAgICAgICAoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmlzU2hpcCA9PT0gZmFsc2UpIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuaXNTaGlwID09PSB0cnVlICYmIGNlbGwuaGFzQmVlbkhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2VsbC5nZXRTdGF0dXMoKS5ldmVyeSgodW5pdCkgPT4gdW5pdCA9PT0gJ2hpdCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAocG9zaXRpb24uaXNTaGlwID09PSBmYWxzZSkgfHxcbiAgICAgICAgICAgIC8vIChwb3NpdGlvbi5pc1NoaXAgPT09IHRydWUgJiYgcG9zaXRpb24uaGFzQmVlbkhpdCA9PT0gdHJ1ZSlcbiAgICAgICAgKVxuXG4gICAgY29uc3QgY3JlYXRlT2ZmTGltaXRMb2NhdGlvbiA9ICgpID0+XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1wdHlDZWxsLCB7IG9mZkxpbWl0czogdHJ1ZSB9KVxuXG4gICAgY29uc3QgZ2V0TG9jYXRpb24gPSAoY29sdW1uLCByb3cpID0+IGdhbWVCb2FyZD8uW2NvbHVtbl0/Lltyb3ddXG5cbiAgICBjb25zdCBzZXRMb2NhdGlvbiA9IChjb2x1bW4sIHJvdywgc2hpcCA9IGNyZWF0ZU9mZkxpbWl0TG9jYXRpb24oKSkgPT4ge1xuICAgICAgICBpZiAoZ2FtZUJvYXJkPy5bY29sdW1uXT8uW3Jvd10gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWVcbiAgICAgICAgZ2FtZUJvYXJkW2NvbHVtbl1bcm93XSA9IHNoaXBcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBhZGRPZmZMaW1pdEFyZWFGb3JTaGlwcyA9IChjb2x1bW4sIHJvdykgPT4ge1xuICAgICAgICAvLyB0b3AtbGVmdFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gLSAxLCByb3cgLSAxKVxuICAgICAgICAvLyB0b3BcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uLCByb3cgLSAxKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZE9mZkxpbWl0QXJlYUZvckhvcml6b250YWxseVBvc2l0aW9uZWRTaGlwID0gKFxuICAgICAgICBjb2x1bW4sXG4gICAgICAgIHJvdyxcbiAgICAgICAgc2hpcExlbmd0aFxuICAgICkgPT4ge1xuICAgICAgICAvLyBwb3NpdGlvbnMgcmVsYXRpdmUgdG8gdGhlIHNoaXAgaXRzZWxmKGllLiBhIGhvcml6b250YWwgc2hpcCdzIGJvdHRvbSBpcyB0byB0aGUgcmlnaHQpXG5cbiAgICAgICAgYWRkT2ZmTGltaXRBcmVhRm9yU2hpcHMoY29sdW1uLCByb3cpXG4gICAgICAgIC8vIGJvdHRvbVxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyBzaGlwTGVuZ3RoLCByb3cpXG4gICAgICAgIC8vIGJvdHRvbS1sZWZ0XG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiAtIDEsIHJvdyArIDEpXG4gICAgICAgIC8vIGJvdHRvbS1yaWdodFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyBzaGlwTGVuZ3RoLCByb3cgKyAxKVxuICAgICAgICAvLyB0b3AtcmlnaHRcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgc2hpcExlbmd0aCwgcm93IC0gMSlcbiAgICB9XG5cbiAgICBjb25zdCBhZGRPZmZMaW1pdEFyZWFGb3JWZXJ0aWNhbGx5UG9zaXRpb25lZFNoaXAgPSAoXG4gICAgICAgIGNvbHVtbixcbiAgICAgICAgcm93LFxuICAgICAgICBzaGlwTGVuZ3RoXG4gICAgKSA9PiB7XG4gICAgICAgIC8vIHBvc2l0aW9ucyByZWxhdGl2ZSB0byBob3cgdGhlIHVzZXIgc2VlcyBpdChpZS4gYSB2ZXJ0aWNhbCBzaGlwJ3MgYm90dG9tIGlzIHRvIHRoZSBib3R0b20pXG5cbiAgICAgICAgYWRkT2ZmTGltaXRBcmVhRm9yU2hpcHMoY29sdW1uLCByb3cpXG4gICAgICAgIC8vIGJvdHRvbVxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4sIHJvdyArIHNoaXBMZW5ndGgpXG4gICAgICAgIC8vIGJvdHRvbS1yaWdodFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyAxLCByb3cgKyBzaGlwTGVuZ3RoKVxuICAgICAgICAvLyBib3R0b20tbGVmdFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gLSAxLCByb3cgKyBzaGlwTGVuZ3RoKVxuICAgICAgICAvLyB0b3AtcmlnaHRcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgMSwgcm93IC0gMSlcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoY29sdW1uLCByb3csIGRpcmVjdGlvbiwgc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5nZXRMZW5ndGgoKVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHNldExvY2F0aW9uKGNvbHVtbiwgcm93ICsgc2hpcExlbmd0aClcbiAgICAgICAgICAgIGlmIChyb3cgPj0gMCAmJiAocm93ICsgc2hpcExlbmd0aCAtIDEpIDwgZ2FtZUJvYXJkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiwgcm93ICsgaSwgc2hpcClcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgMSwgcm93ICsgaSlcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uIC0gMSwgcm93ICsgaSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWRkT2ZmTGltaXRBcmVhRm9yVmVydGljYWxseVBvc2l0aW9uZWRTaGlwKFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgc2hpcExlbmd0aFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBpZiAoY29sdW1uID49IDAgJiYgKGNvbHVtbiArIHNoaXBMZW5ndGggLSAxKSA8IGdhbWVCb2FyZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyBpLCByb3csIHNoaXApXG4gICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIGksIHJvdyArIDEpXG4gICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIGksIHJvdyAtIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZE9mZkxpbWl0QXJlYUZvckhvcml6b250YWxseVBvc2l0aW9uZWRTaGlwKFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgc2hpcExlbmd0aFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VSYW5kb21Db29yZGluYXRlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uID1cbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJ1xuICAgICAgICBjb25zdCByYW5kb21Db2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgY29uc3QgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIHJldHVybiB7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfVxuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbWx5UGxhY2VTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcERldGFpbHMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfSA9XG4gICAgICAgICAgICAgICAgbWFrZVJhbmRvbUNvb3JkaW5hdGVzKClcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBzaGlwc1tpXVxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBnZXRMb2NhdGlvbihyYW5kb21Db2x1bW4sIHJhbmRvbVJvdylcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5pc1NoaXAgPT09IHRydWUgfHxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5vZmZMaW1pdHMgPT09IHRydWUgfHxcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAocmFuZG9tQ29sdW1uLCByYW5kb21Sb3csIHJhbmRvbURpcmVjdGlvbiwgc2hpcCkgPT09XG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpIC09IDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hpcERldGFpbHMucHVzaCh7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcERldGFpbHNcbiAgICB9XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvbHVtbiwgcm93KSA9PiB7XG4gICAgICAgIGdhbWVCb2FyZFtjb2x1bW5dW3Jvd10uaGFzQmVlbkhpdCA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0lmT2ZmTGltaXRab25lV2FzQ29ycmVjdGx5SW1wbGVtZW50ZWQgPSAoc2hpcExlbmd0aCkgPT5cbiAgICAgICAgZ2FtZUJvYXJkLmZsYXQoKS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQub2ZmTGltaXRzID09PSB0cnVlKVxuICAgICAgICAgICAgLmxlbmd0aCA9PT1cbiAgICAgICAgc2hpcExlbmd0aCArIDJcbiAgICAvLyBhZGRpbmcgc2hpcExlbmd0aCBwbHVzIHR3byBiZWNhdXNlIGZvciBldmVyeSBpbmNyZWFzZSBpbiB0aGUgc2l6ZSBvZiBzaGlwLCB0aGUgem9uZXMgY292ZXJlZCBpbmNyZWFzZSBieSAyIHVuaXRzXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGVja0lmT2ZmTGltaXRab25lV2FzQ29ycmVjdGx5SW1wbGVtZW50ZWQsXG4gICAgICAgIGdldExvY2F0aW9uLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBjaGVja0lmQWxsU2hpcHNIYXZlU3VuayxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByYW5kb21seVBsYWNlU2hpcHMsXG4gICAgfVxufVxuXG5jb25zdCBnYW1lQm9hcmQgPSBjcmVhdGVHYW1lQm9hcmQoKVxuXG5nYW1lQm9hcmQucmFuZG9tbHlQbGFjZVNoaXBzKClcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVHYW1lQm9hcmRcbiIsImNvbnN0IGNyZWF0ZVBsYXllciA9IChuYW1lID0gJ3BsYXllcicpID0+IHtcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZVxuXG4gICAgY29uc3QgYXR0YWNrID0gKGNvbHVtbiwgcm93LCB7IGdldExvY2F0aW9uLCByZWNlaXZlQXR0YWNrIH0pID0+IHtcbiAgICAgICAgaWYgKGdldExvY2F0aW9uKGNvbHVtbiwgcm93KS5oYXNCZWVuSGl0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlY2VpdmVBdHRhY2soY29sdW1uLCByb3cpXG4gICAgICAgICAgICByZXR1cm4gXCJJdCdzIGEgaGl0IVwiXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIGFscmVhZHkgaGl0IHRoaXMgc3BvdCEnXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgYXR0YWNrLFxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVQbGF5ZXJcbiIsImNvbnN0IGNyZWF0ZVNoaXAgPSAobGVuZ3RoLCBuYW1lID0gJ3NoaXAnKSA9PiB7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBBcnJheShsZW5ndGgpLmZpbGwoJ3VuaGl0JylcblxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHN0YXR1cy5sZW5ndGhcblxuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHN0YXR1c1xuXG4gICAgY29uc3QgaGl0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8IGxlbmd0aCkge1xuICAgICAgICAgICAgc3RhdHVzW3Bvc2l0aW9uXSA9ICdoaXQnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzdGF0dXMuZXZlcnkoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gJ2hpdCcpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBnZXRMZW5ndGgsXG4gICAgICAgIGlzU3VuayxcbiAgICAgICAgaGl0LFxuICAgICAgICBnZXRTdGF0dXMsXG4gICAgICAgIGlzU2hpcDogdHJ1ZSxcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2hpcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImNvbnN0IGhhbmRsZUF0dGFjayA9IChjb2x1bW4sIHJvdyxlbmVteUJvYXJkLCBvcHBvbmVudCkgPT4ge1xuICAgIG9wcG9uZW50LmF0dGFjayhjb2x1bW4sIHJvdywgZW5lbXlCb2FyZClcbn1cblxuY29uc3QgYXR0YWNrQ2VsbCA9IChjZWxsLCBjb2x1bW4sIHJvdywgZW5lbXlCb2FyZCwgb3Bwb25lbnQpID0+IHtcbiAgICBjb25zdCBjZWxsTG9jYXRpb24gPSBlbmVteUJvYXJkLmdldExvY2F0aW9uKGNvbHVtbiwgcm93KVxuICAgIGlmIChjZWxsTG9jYXRpb24uaXNTaGlwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNlbGxMb2NhdGlvbi5pc1N1bmsoKSlcbiAgICAgICAgaWYgKGNlbGxMb2NhdGlvbi5pc1N1bmsoKSkge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzdW5rJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVBdHRhY2soY29sdW1uLCByb3csIGVuZW15Qm9hcmQsIG9wcG9uZW50KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFkZExpc3RlbmVyc1RvUGxheWVyQm9hcmQgPSAoeyBnZXRMb2NhdGlvbiB9KSA9PiB7XG4gICAgY29uc3QgcGxheWVyQm9hcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnBsYXllci1ib2FyZCcpXG5cbiAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCAxMDsgY29sdW1uICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdyArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gcGxheWVyQm9hcmRBcmVhLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYC5jZWxsOm50aC1jaGlsZCgke3JvdyAqIDEwICsgY29sdW1uICsgMX0pYFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKGdldExvY2F0aW9uKHJvdywgY29sdW1uKS5pc1NoaXApIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWRkTGlzdGVuZXJzVG9FbmVteUJvYXJkID0gKGVuZW15Qm9hcmQsIG9wcG9uZW50KSA9PiB7XG4gICAgY29uc3QgZW5lbXlCb2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuZW5lbXktYm9hcmQnKVxuXG4gICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbiArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3cgKz0gMSkge1xuICAgICAgICAgICAgLy8gQ3JlZGl0aW5nIGZvcm11bGEgdG8gY2FsY3VsYXRlIG50aC1jaGlsZCB1c2luZyBuZXN0ZWQgbG9vcDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODg3MjY2Mi9tYXRoLXRvLWRldGVybWluZS1pdGVtLWluZGV4LWJhc2VkLW9uLWNvbC1yb3ctc2VsZWN0aW9uLWluLWdyaWRcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBlbmVteUJvYXJkQXJlYS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGAuY2VsbDpudGgtY2hpbGQoJHtyb3cgKiAxMCArIGNvbHVtbiArIDF9KWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjb2x1bW4nLCBjb2x1bW4pXG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm93Jywgcm93KVxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBhdHRhY2tDZWxsKGNlbGwsIGNvbHVtbiwgcm93LCBlbmVteUJvYXJkLCBvcHBvbmVudClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBhZGRMaXN0ZW5lcnNUb1BsYXllckJvYXJkLCBhZGRMaXN0ZW5lcnNUb0VuZW15Qm9hcmR9IGZyb20gJy4vZG9tJ1xuXG5pbXBvcnQgY3JlYXRlR2FtZUJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkL2dhbWVib2FyZCdcbmltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIvcGxheWVyJ1xuXG5jb25zdCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUdhbWVCb2FyZCgpXG5jb25zdCBlbmVteUJvYXJkID0gY3JlYXRlR2FtZUJvYXJkKClcblxuY29uc3QgcGxheWVyID0gY3JlYXRlUGxheWVyKClcblxuY29uc3QgY29tcHV0ZXIgPSBjcmVhdGVQbGF5ZXIoKVxuXG5wbGF5ZXJCb2FyZC5yYW5kb21seVBsYWNlU2hpcHMoKVxuZW5lbXlCb2FyZC5yYW5kb21seVBsYWNlU2hpcHMoKVxuXG5hZGRMaXN0ZW5lcnNUb0VuZW15Qm9hcmQoZW5lbXlCb2FyZCwgcGxheWVyKVxuXG5hZGRMaXN0ZW5lcnNUb1BsYXllckJvYXJkKHBsYXllckJvYXJkKVxuXG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVTaGlwIiwiY3JlYXRlR2FtZUJvYXJkIiwiZW1wdHlDZWxsIiwiaGFzQmVlbkhpdCIsImlzU2hpcCIsIm9mZkxpbWl0cyIsImdhbWVCb2FyZCIsIkFycmF5IiwiZmlsbCIsInN0cnVjdHVyZWRDbG9uZSIsIm1hcCIsInNoaXBzIiwiZ2V0TG9jYXRpb24iLCJjb2x1bW4iLCJyb3ciLCJzZXRMb2NhdGlvbiIsInNoaXAiLCJPYmplY3QiLCJhc3NpZ24iLCJjcmVhdGVPZmZMaW1pdExvY2F0aW9uIiwidW5kZWZpbmVkIiwiYWRkT2ZmTGltaXRBcmVhRm9yU2hpcHMiLCJwbGFjZVNoaXAiLCJkaXJlY3Rpb24iLCJzaGlwTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiaSIsImFkZE9mZkxpbWl0QXJlYUZvclZlcnRpY2FsbHlQb3NpdGlvbmVkU2hpcCIsImFkZE9mZkxpbWl0QXJlYUZvckhvcml6b250YWxseVBvc2l0aW9uZWRTaGlwIiwibWFrZVJhbmRvbUNvb3JkaW5hdGVzIiwicmFuZG9tRGlyZWN0aW9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQ29sdW1uIiwicmFuZG9tUm93IiwiY2hlY2tJZk9mZkxpbWl0Wm9uZVdhc0NvcnJlY3RseUltcGxlbWVudGVkIiwiZmxhdCIsImZpbHRlciIsImVsZW1lbnQiLCJyZWNlaXZlQXR0YWNrIiwiY2hlY2tJZkFsbFNoaXBzSGF2ZVN1bmsiLCJldmVyeSIsImNlbGwiLCJnZXRTdGF0dXMiLCJ1bml0IiwicmFuZG9tbHlQbGFjZVNoaXBzIiwic2hpcERldGFpbHMiLCJsb2NhdGlvbiIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsImdldE5hbWUiLCJhdHRhY2siLCJzdGF0dXMiLCJpc1N1bmsiLCJwb3NpdGlvbiIsImhpdCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJuIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXR0YWNrQ2VsbCIsImVuZW15Qm9hcmQiLCJvcHBvbmVudCIsImNlbGxMb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc0xpc3QiLCJhZGQiLCJoYW5kbGVBdHRhY2siLCJwbGF5ZXJCb2FyZCIsImVuZW15Qm9hcmRBcmVhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZExpc3RlbmVyc1RvRW5lbXlCb2FyZCIsInBsYXllckJvYXJkQXJlYSIsImFkZExpc3RlbmVyc1RvUGxheWVyQm9hcmQiXSwic291cmNlUm9vdCI6IiJ9