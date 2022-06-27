(()=>{var t={653:(t,e,r)=>{const o=r(585);t.exports=()=>{const t={hasBeenHit:!1,isShip:!1,offLimits:!1},e=Array(10).fill(structuredClone(t)).map((()=>Array(10).fill(structuredClone(t)))),r=[o(5,"Carrier"),o(4,"Battleship"),o(3,"Destroyer"),o(3,"Submarine"),o(2,"Patrol Boat")],a=(t,r)=>e?.[t]?.[r],n=()=>{const t=0===Math.floor(2*Math.random())?"vertical":"horizontal",e=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());return a(e,r),{randomColumn:e,randomRow:r,randomDirection:t}};return{checkIfOffLimitZoneWasCorrectlyImplemented:t=>e.flat().filter((t=>!0===t.offLimits)).length===t+2,getLocation:a,receiveAttack:(t,r)=>{e[t][r].hasBeenHit=!0},checkIfAllShipsHaveSunk:()=>e.flat().every((t=>!1===t.isShip||!0===t.isShip&&!0===t.hasBeenHit&&t.getStatus().every((t=>"hit"===t)))),placeShip,randomlyPlaceShips:()=>{const t=[];for(let e=0;e<r.length;e+=1){const{randomColumn:e,randomRow:r,randomDirection:o}=n();a(e,r),t.push({randomColumn:e,randomRow:r,randomDirection:o})}return t},makeRandomCoordinates:n}}},61:t=>{t.exports=(t="player")=>({getName:()=>t,attack:(t,e,{getLocation:r,receiveAttack:o})=>{const a=r(t,e);return!1===a.hasBeenHit||a.isShip&&a.getStatus().includes("unhit")?(o(t,e),"It's a hit!"):"You have already hit this spot!"}})},585:t=>{t.exports=(t,e="ship")=>{const r=Array(t).fill("unhit");return{name:e,getLength:()=>r.length,isSunk:()=>r.every((t=>"hit"===t)),hit:e=>{e<t&&(r[e]="hit")},getStatus:()=>r,hasBeenHit:!1,isShip:!0}}}},e={};function r(o){var a=e[o];if(void 0!==a)return a.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,r),n.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=(t,e,r,o)=>o.attack(t,e,r),e=(r,o,a)=>{const{randomColumn:n,randomRow:i}=o.makeRandomCoordinates();return"You have already hit this spot!"===t(n,i,o,a)?e(r,o,a):{randomColumn:n,randomRow:i}};var o=r(653),a=r.n(o),n=r(585),i=r.n(n),s=r(61),l=r.n(s);const c=a()(),h=a()(),u=l()(),d=l()();c.randomlyPlaceShips(),h.placeShip(0,0,"horizontal",i()(5)),h.placeShip(3,4,"horizontal",i()(3)),h.placeShip(6,7,"horizontal",i()(2)),h.placeShip(9,1,"vertical",i()(3)),h.placeShip(5,9,"horizontal",i()(4));const m=(()=>{const t={};return{publish:function(e,r){Array.isArray(t[e])&&t[e].forEach((t=>{t(r)}))},subscribe:function e(r,o){Array.isArray(e[r])||(t[r]=[]),t[r].push(o);const a=t[r].length-1;return{unsubscribe(){t[r].splice(a,1)}}}}})();((t,e,r,o,a)=>{const n=document.querySelector("div.enemy-board");for(let i=0;i<10;i+=1)for(let s=0;s<10;s+=1){const l=n.querySelector(`.cell:nth-child(${10*s+i+1})`);l.setAttribute("column",i),l.setAttribute("row",s),l.addEventListener("click",(()=>{a.publish("click",{cell:l,column:i,row:s,playerBoard:t,enemyBoard:e,player:r,enemy:o})}),{once:!0})}})(c,h,u,d,m),m.subscribe("click",(({cell:r,column:o,row:a,playerBoard:n,enemyBoard:i,player:s,enemy:l})=>{((e,r,o,a,n)=>{a.getLocation(r,o).isShip?e.classList.add("hit"):e.classList.add("miss"),t(r,o,a,n)})(r,o,a,i,s);const{randomColumn:c,randomRow:h}=e(r,n,l);((t,e)=>{const r=document.querySelector(`.cell[column='${t}'][row='${e}']`);r.classList.contains("ship")?r.classList.add("hit"):r.classList.add("miss")})(c,h)})),(({getLocation:t})=>{const e=document.querySelector("div.player-board");for(let r=0;r<10;r+=1)for(let o=0;o<10;o+=1){const a=e.querySelector(`.cell:nth-child(${10*o+r+1})`);a.setAttribute("column",r),a.setAttribute("row",o),t(o,r).isShip&&a.classList.add("ship")}})(c)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBSzJELEVBQVlDLElBc0h0QzJCLENBQWdCdEUsRUFBTWxCLEVBQVFDLEVBQUsyRCxFQUFZQyxHQUUvQyxNQUFNLGFBQUV0RCxFQUFZLFVBQUVDLEdBQWNzRCxFQUNoQzVDLEVBQ0E2QyxFQUNBQyxHQWpIa0IsRUFBQ2hFLEVBQVFDLEtBQy9CLE1BQU1pQixFQUFPOEQsU0FBU0MsY0FDbEIsaUJBQWlCakYsWUFBaUJDLE9BRWxDaUIsRUFBS29FLFVBQVVHLFNBQVMsUUFDeEJ2RSxFQUFLb0UsVUFBVUMsSUFBSSxPQUVuQnJFLEVBQUtvRSxVQUFVQyxJQUFJLFNBNEd0QkcsQ0FBa0JuRixFQUFjQyxNQXZFSixHQUFHVCxrQkFDaEMsTUFBTTRGLEVBQWtCWCxTQUFTQyxjQUFjLG9CQUUvQyxJQUFLLElBQUlqRixFQUFTLEVBQUdBLEVBQVMsR0FBSUEsR0FBVSxFQUN4QyxJQUFLLElBQUlDLEVBQU0sRUFBR0EsRUFBTSxHQUFJQSxHQUFPLEVBQUcsQ0FDbEMsTUFBTWlCLEVBQU95RSxFQUFnQlYsY0FDekIsbUJBQXlCLEdBQU5oRixFQUFXRCxFQUFTLE1BRTNDa0IsRUFBS2dFLGFBQWEsU0FBVWxGLEdBQzVCa0IsRUFBS2dFLGFBQWEsTUFBT2pGLEdBQ3JCRixFQUFZRSxFQUFLRCxHQUFRVCxRQUN6QjJCLEVBQUtvRSxVQUFVQyxJQUFJLFVDakRuQ0ssQ0FBa0I3QixJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3NoaXAvc2hpcC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5jb25zdCBjcmVhdGVTaGlwID0gcmVxdWlyZSgnLi4vc2hpcC9zaGlwJylcblxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmNvbnN0IGNyZWF0ZUdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBlbXB0eUNlbGwgPSB7IGhhc0JlZW5IaXQ6IGZhbHNlLCBpc1NoaXA6IGZhbHNlLCBvZmZMaW1pdHM6IGZhbHNlIH1cbiAgICBjb25zdCBnYW1lQm9hcmQgPSBBcnJheSgxMClcbiAgICAgICAgLmZpbGwoc3RydWN0dXJlZENsb25lKGVtcHR5Q2VsbCkpXG4gICAgICAgIC5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwoc3RydWN0dXJlZENsb25lKGVtcHR5Q2VsbCkpKVxuXG4gICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICAgIGNyZWF0ZVNoaXAoNSwgJ0NhcnJpZXInKSxcbiAgICAgICAgY3JlYXRlU2hpcCg0LCAnQmF0dGxlc2hpcCcpLFxuICAgICAgICBjcmVhdGVTaGlwKDMsICdEZXN0cm95ZXInKSxcbiAgICAgICAgY3JlYXRlU2hpcCgzLCAnU3VibWFyaW5lJyksXG4gICAgICAgIGNyZWF0ZVNoaXAoMiwgJ1BhdHJvbCBCb2F0JyksXG4gICAgXVxuXG4gICAgY29uc3QgY2hlY2tJZkFsbFNoaXBzSGF2ZVN1bmsgPSAoKSA9PlxuICAgICAgICBnYW1lQm9hcmQuZmxhdCgpLmV2ZXJ5KFxuICAgICAgICAgICAgKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5pc1NoaXAgPT09IGZhbHNlKSByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIGlmIChjZWxsLmlzU2hpcCA9PT0gdHJ1ZSAmJiBjZWxsLmhhc0JlZW5IaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNlbGwuZ2V0U3RhdHVzKCkuZXZlcnkoKHVuaXQpID0+IHVuaXQgPT09ICdoaXQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gKHBvc2l0aW9uLmlzU2hpcCA9PT0gZmFsc2UpIHx8XG4gICAgICAgICAgICAvLyAocG9zaXRpb24uaXNTaGlwID09PSB0cnVlICYmIHBvc2l0aW9uLmhhc0JlZW5IaXQgPT09IHRydWUpXG4gICAgICAgIClcblxuICAgIGNvbnN0IGNyZWF0ZU9mZkxpbWl0TG9jYXRpb24gPSAoKSA9PlxuICAgICAgICBPYmplY3QuYXNzaWduKGVtcHR5Q2VsbCwgeyBvZmZMaW1pdHM6IHRydWUgfSlcblxuICAgIGNvbnN0IGdldExvY2F0aW9uID0gKGNvbHVtbiwgcm93KSA9PiBnYW1lQm9hcmQ/Lltjb2x1bW5dPy5bcm93XVxuXG4gICAgY29uc3Qgc2V0TG9jYXRpb24gPSAoY29sdW1uLCByb3csIHNoaXAgPSBjcmVhdGVPZmZMaW1pdExvY2F0aW9uKCkpID0+IHtcbiAgICAgICAgaWYgKGdhbWVCb2FyZD8uW2NvbHVtbl0/Lltyb3ddID09PSB1bmRlZmluZWQpIHJldHVybiB0cnVlXG4gICAgICAgIGdhbWVCb2FyZFtjb2x1bW5dW3Jvd10gPSBzaGlwXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgYWRkT2ZmTGltaXRBcmVhRm9yU2hpcHMgPSAoY29sdW1uLCByb3cpID0+IHtcbiAgICAgICAgLy8gdG9wLWxlZnRcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uIC0gMSwgcm93IC0gMSlcbiAgICAgICAgLy8gdG9wXG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiwgcm93IC0gMSlcbiAgICB9XG5cbiAgICBjb25zdCBhZGRPZmZMaW1pdEFyZWFGb3JIb3Jpem9udGFsbHlQb3NpdGlvbmVkU2hpcCA9IChcbiAgICAgICAgY29sdW1uLFxuICAgICAgICByb3csXG4gICAgICAgIHNoaXBMZW5ndGhcbiAgICApID0+IHtcbiAgICAgICAgLy8gcG9zaXRpb25zIHJlbGF0aXZlIHRvIHRoZSBzaGlwIGl0c2VsZihpZS4gYSBob3Jpem9udGFsIHNoaXAncyBib3R0b20gaXMgdG8gdGhlIHJpZ2h0KVxuXG4gICAgICAgIGFkZE9mZkxpbWl0QXJlYUZvclNoaXBzKGNvbHVtbiwgcm93KVxuICAgICAgICAvLyBib3R0b21cbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgc2hpcExlbmd0aCwgcm93KVxuICAgICAgICAvLyBib3R0b20tbGVmdFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gLSAxLCByb3cgKyAxKVxuICAgICAgICAvLyBib3R0b20tcmlnaHRcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgc2hpcExlbmd0aCwgcm93ICsgMSlcbiAgICAgICAgLy8gdG9wLXJpZ2h0XG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIHNoaXBMZW5ndGgsIHJvdyAtIDEpXG4gICAgfVxuXG4gICAgY29uc3QgYWRkT2ZmTGltaXRBcmVhRm9yVmVydGljYWxseVBvc2l0aW9uZWRTaGlwID0gKFxuICAgICAgICBjb2x1bW4sXG4gICAgICAgIHJvdyxcbiAgICAgICAgc2hpcExlbmd0aFxuICAgICkgPT4ge1xuICAgICAgICAvLyBwb3NpdGlvbnMgcmVsYXRpdmUgdG8gaG93IHRoZSB1c2VyIHNlZXMgaXQoaWUuIGEgdmVydGljYWwgc2hpcCdzIGJvdHRvbSBpcyB0byB0aGUgYm90dG9tKVxuXG4gICAgICAgIGFkZE9mZkxpbWl0QXJlYUZvclNoaXBzKGNvbHVtbiwgcm93KVxuICAgICAgICAvLyBib3R0b21cbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uLCByb3cgKyBzaGlwTGVuZ3RoKVxuICAgICAgICAvLyBib3R0b20tcmlnaHRcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgMSwgcm93ICsgc2hpcExlbmd0aClcbiAgICAgICAgLy8gYm90dG9tLWxlZnRcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uIC0gMSwgcm93ICsgc2hpcExlbmd0aClcbiAgICAgICAgLy8gdG9wLXJpZ2h0XG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIDEsIHJvdyAtIDEpXG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tJZlJvd0Nvb3JkaW5hdGVJc1ZhbGlkID0gKHJvdywgc2hpcExlbmd0aCkgPT4ge1xucmV0dXJuIHJvdyA+PSAwICYmIHJvdyArIHNoaXBMZW5ndGggLSAxIDwgZ2FtZUJvYXJkLmxlbmd0aFxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrSWZDb2x1bW5Db29yZGluYXRlSXNWYWxpZCA9IChjb2x1bW4sIHNoaXBMZW5ndGgpID0+IHtcbnJldHVybiBjb2x1bW4gPj0gMCAmJiBjb2x1bW4gKyBzaGlwTGVuZ3RoIC0gMSA8IGdhbWVCb2FyZC5sZW5ndGhcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChjb2x1bW4sIHJvdywgZGlyZWN0aW9uLCBzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmdldExlbmd0aCgpXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGlmIChjaGVja0lmUm93Q29vcmRpbmF0ZUlzVmFsaWQocm93LCBzaGlwTGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiwgcm93ICsgaSwgc2hpcClcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgMSwgcm93ICsgaSlcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uIC0gMSwgcm93ICsgaSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWRkT2ZmTGltaXRBcmVhRm9yVmVydGljYWxseVBvc2l0aW9uZWRTaGlwKFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgc2hpcExlbmd0aFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgaWYgKGNoZWNrSWZDb2x1bW5Db29yZGluYXRlSXNWYWxpZChjb2x1bW4sIHNoaXBMZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgaSwgcm93LCBzaGlwKVxuICAgICAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyBpLCByb3cgKyAxKVxuICAgICAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyBpLCByb3cgLSAxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhZGRPZmZMaW1pdEFyZWFGb3JIb3Jpem9udGFsbHlQb3NpdGlvbmVkU2hpcChcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgIHNoaXBMZW5ndGhcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0lmQ29vcmRpbmF0ZXNBcmVWYWxpZCA9IChsb2NhdGlvbiwgc2hpcCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBsb2NhdGlvbi5pc1NoaXAgPT09IHRydWUgfHxcbiAgICAgICAgICAgIGxvY2F0aW9uLm9mZkxpbWl0cyA9PT0gdHJ1ZSBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZVJhbmRvbUNvb3JkaW5hdGVzKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VSYW5kb21Db29yZGluYXRlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uID1cbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJ1xuICAgICAgICBjb25zdCByYW5kb21Db2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgY29uc3QgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZ2V0TG9jYXRpb24ocmFuZG9tQ29sdW1uLCByYW5kb21Sb3cpXG4gICAgICAgIHJldHVybiB7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfVxuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbWx5UGxhY2VTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcERldGFpbHMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfSA9XG4gICAgICAgICAgICAgICAgbWFrZVJhbmRvbUNvb3JkaW5hdGVzKClcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBzaGlwc1tpXVxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBnZXRMb2NhdGlvbihyYW5kb21Db2x1bW4sIHJhbmRvbVJvdylcbiAgICAgICAgICAgIHNoaXBEZXRhaWxzLnB1c2goeyByYW5kb21Db2x1bW4sIHJhbmRvbVJvdywgcmFuZG9tRGlyZWN0aW9uIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBEZXRhaWxzXG4gICAgfVxuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb2x1bW4sIHJvdykgPT4ge1xuICAgICAgICBnYW1lQm9hcmRbY29sdW1uXVtyb3ddLmhhc0JlZW5IaXQgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tJZk9mZkxpbWl0Wm9uZVdhc0NvcnJlY3RseUltcGxlbWVudGVkID0gKHNoaXBMZW5ndGgpID0+XG4gICAgICAgIGdhbWVCb2FyZC5mbGF0KCkuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50Lm9mZkxpbWl0cyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIC5sZW5ndGggPT09XG4gICAgICAgIHNoaXBMZW5ndGggKyAyXG4gICAgLy8gYWRkaW5nIHNoaXBMZW5ndGggcGx1cyB0d28gYmVjYXVzZSBmb3IgZXZlcnkgaW5jcmVhc2UgaW4gdGhlIHNpemUgb2Ygc2hpcCwgdGhlIHpvbmVzIGNvdmVyZWQgaW5jcmVhc2UgYnkgMiB1bml0c1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2hlY2tJZk9mZkxpbWl0Wm9uZVdhc0NvcnJlY3RseUltcGxlbWVudGVkLFxuICAgICAgICBnZXRMb2NhdGlvbixcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgY2hlY2tJZkFsbFNoaXBzSGF2ZVN1bmssXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmFuZG9tbHlQbGFjZVNoaXBzLFxuICAgICAgICBtYWtlUmFuZG9tQ29vcmRpbmF0ZXMsXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUdhbWVCb2FyZFxuIiwiY29uc3QgY3JlYXRlUGxheWVyID0gKG5hbWUgPSAncGxheWVyJykgPT4ge1xuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lXG5cbiAgICBjb25zdCBhdHRhY2sgPSAoY29sdW1uLCByb3csIHsgZ2V0TG9jYXRpb24sIHJlY2VpdmVBdHRhY2sgfSkgPT4ge1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGdldExvY2F0aW9uKGNvbHVtbiwgcm93KVxuICAgICAgICBpZiAobG9jYXRpb24uaGFzQmVlbkhpdCA9PT0gZmFsc2UgfHwgKGxvY2F0aW9uLmlzU2hpcCAmJiBsb2NhdGlvbi5nZXRTdGF0dXMoKS5pbmNsdWRlcygndW5oaXQnKSkpIHtcbiAgICAgICAgICAgIHJlY2VpdmVBdHRhY2soY29sdW1uLCByb3cpXG4gICAgICAgICAgICByZXR1cm4gXCJJdCdzIGEgaGl0IVwiXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIGFscmVhZHkgaGl0IHRoaXMgc3BvdCEnXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgYXR0YWNrLFxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVQbGF5ZXJcbiIsImNvbnN0IGNyZWF0ZVNoaXAgPSAobGVuZ3RoLCBuYW1lID0gJ3NoaXAnKSA9PiB7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBBcnJheShsZW5ndGgpLmZpbGwoJ3VuaGl0JylcblxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHN0YXR1cy5sZW5ndGhcblxuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHN0YXR1c1xuXG4gICAgY29uc3QgaGl0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8IGxlbmd0aCkge1xuICAgICAgICAgICAgc3RhdHVzW3Bvc2l0aW9uXSA9ICdoaXQnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzdGF0dXMuZXZlcnkoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gJ2hpdCcpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBnZXRMZW5ndGgsXG4gICAgICAgIGlzU3VuayxcbiAgICAgICAgaGl0LFxuICAgICAgICBnZXRTdGF0dXMsXG4gICAgICAgIGhhc0JlZW5IaXQ6IGZhbHNlLFxuICAgICAgICBpc1NoaXA6IHRydWUsXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNoaXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJjb25zdCBoYW5kbGVBdHRhY2sgPSAoY29sdW1uLCByb3csIGVuZW15Qm9hcmQsIHBsYXllcikgPT5cbiAgICBwbGF5ZXIuYXR0YWNrKGNvbHVtbiwgcm93LCBlbmVteUJvYXJkKVxuXG5jb25zdCBhdHRhY2tFbmVteUNlbGwgPSAoY2VsbCwgY29sdW1uLCByb3csIGVuZW15Qm9hcmQsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGNlbGxMb2NhdGlvbiA9IGVuZW15Qm9hcmQuZ2V0TG9jYXRpb24oY29sdW1uLCByb3cpXG4gICAgaWYgKGNlbGxMb2NhdGlvbi5pc1NoaXApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgIH1cbiAgICBoYW5kbGVBdHRhY2soY29sdW1uLCByb3csIGVuZW15Qm9hcmQsIHBsYXllcilcbn1cblxuY29uc3QgYXR0YWNrUGxheWVyQ2VsbCA9IChjZWxsLCBwbGF5ZXJCb2FyZCwgZW5lbXkpID0+IHtcbiAgICBjb25zdCB7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93IH0gPSBwbGF5ZXJCb2FyZC5tYWtlUmFuZG9tQ29vcmRpbmF0ZXMoKVxuICAgIGlmKGhhbmRsZUF0dGFjayhyYW5kb21Db2x1bW4sIHJhbmRvbVJvdywgcGxheWVyQm9hcmQsIGVuZW15KSA9PT0gJ1lvdSBoYXZlIGFscmVhZHkgaGl0IHRoaXMgc3BvdCEnKSByZXR1cm4gYXR0YWNrUGxheWVyQ2VsbChjZWxsLCBwbGF5ZXJCb2FyZCwgZW5lbXkpXG5cbiAgICByZXR1cm4geyByYW5kb21Db2x1bW4sIHJhbmRvbVJvdyB9XG59XG5cbmNvbnN0IHJlbmRlckVuZW15QXRhY2tzID0gKGNvbHVtbiwgcm93KSA9PiB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuY2VsbFtjb2x1bW49JyR7Y29sdW1ufSddW3Jvdz0nJHtyb3d9J11gXG4gICAgKVxuICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgIH1cbn1cblxuLy8gaHR0cHM6Ly9qc21hbmlmZXN0LmNvbS90aGUtcHVibGlzaC1zdWJzY3JpYmUtcGF0dGVybi1pbi1qYXZhc2NyaXB0L1xuXG5leHBvcnQgY29uc3QgcHViU3ViID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1YnNjcmliZXJzID0ge31cblxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZVtldmVudE5hbWVdKSkge1xuICAgICAgICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKVxuICAgICAgICBjb25zdCBpbmRleCA9IHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ubGVuZ3RoIC0gMVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwdWJsaXNoLFxuICAgICAgICBzdWJzY3JpYmUsXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyUGxheWVyU2hpcHMgPSAoeyBnZXRMb2NhdGlvbiB9KSA9PiB7XG4gICAgY29uc3QgcGxheWVyQm9hcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnBsYXllci1ib2FyZCcpXG5cbiAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCAxMDsgY29sdW1uICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdyArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gcGxheWVyQm9hcmRBcmVhLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYC5jZWxsOm50aC1jaGlsZCgke3JvdyAqIDEwICsgY29sdW1uICsgMX0pYFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2NvbHVtbicsIGNvbHVtbilcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb3cnLCByb3cpXG4gICAgICAgICAgICBpZiAoZ2V0TG9jYXRpb24ocm93LCBjb2x1bW4pLmlzU2hpcCkge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhZGRMaXN0ZW5lcnNUb0VuZW15Qm9hcmQgPSAoXG4gICAgcGxheWVyQm9hcmQsXG4gICAgZW5lbXlCb2FyZCxcbiAgICBwbGF5ZXIsXG4gICAgZW5lbXksXG4gICAgcHNcbikgPT4ge1xuICAgIGNvbnN0IGVuZW15Qm9hcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmVuZW15LWJvYXJkJylcblxuICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDEwOyBjb2x1bW4gKz0gMSkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICAgICAgICAgIC8vIENyZWRpdGluZyBmb3JtdWxhIHRvIGNhbGN1bGF0ZSBudGgtY2hpbGQgdXNpbmcgbmVzdGVkIGxvb3A6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzg4NzI2NjIvbWF0aC10by1kZXRlcm1pbmUtaXRlbS1pbmRleC1iYXNlZC1vbi1jb2wtcm93LXNlbGVjdGlvbi1pbi1ncmlkXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZW5lbXlCb2FyZEFyZWEucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgLmNlbGw6bnRoLWNoaWxkKCR7cm93ICogMTAgKyBjb2x1bW4gKyAxfSlgXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnY29sdW1uJywgY29sdW1uKVxuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3JvdycsIHJvdylcblxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcy5wdWJsaXNoKCdjbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Qm9hcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhdHRhY2sgPSAoe1xuICAgIGNlbGwsXG4gICAgY29sdW1uLFxuICAgIHJvdyxcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBlbmVteUJvYXJkLFxuICAgIHBsYXllcixcbiAgICBlbmVteSxcbn0pID0+IHtcbiAgICAvLyBodW1hbiBwbGF5ZXIgYXR0YWNraW5nIGNvbXB1dGVyXG4gICAgYXR0YWNrRW5lbXlDZWxsKGNlbGwsIGNvbHVtbiwgcm93LCBlbmVteUJvYXJkLCBwbGF5ZXIpXG4gICAgLy8gY29tcHV0ZXIgYXR0YWNraW5nIGh1bWFuXG4gICAgY29uc3QgeyByYW5kb21Db2x1bW4sIHJhbmRvbVJvdyB9ID0gYXR0YWNrUGxheWVyQ2VsbChcbiAgICAgICAgY2VsbCxcbiAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgIGVuZW15XG4gICAgKVxuICAgICByZW5kZXJFbmVteUF0YWNrcyhyYW5kb21Db2x1bW4sIHJhbmRvbVJvdylcbn1cbiIsImltcG9ydCB7IGFkZExpc3RlbmVyc1RvRW5lbXlCb2FyZCwgcmVuZGVyUGxheWVyU2hpcHMscHViU3ViLCBhdHRhY2t9IGZyb20gJy4vZG9tJ1xuXG5pbXBvcnQgY3JlYXRlR2FtZUJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkL2dhbWVib2FyZCdcbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gJy4vc2hpcC9zaGlwJ1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tICcuL3BsYXllci9wbGF5ZXInXG5cbmNvbnN0IHBsYXllckJvYXJkID0gY3JlYXRlR2FtZUJvYXJkKClcbmNvbnN0IGVuZW15Qm9hcmQgPSBjcmVhdGVHYW1lQm9hcmQoKVxuXG5jb25zdCBwbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoKVxuXG5jb25zdCBjb21wdXRlciA9IGNyZWF0ZVBsYXllcigpXG5cbnBsYXllckJvYXJkLnJhbmRvbWx5UGxhY2VTaGlwcygpXG5lbmVteUJvYXJkLnBsYWNlU2hpcCgwLCAwLCAnaG9yaXpvbnRhbCcsIGNyZWF0ZVNoaXAoNSkpXG5lbmVteUJvYXJkLnBsYWNlU2hpcCgzLCA0LCAnaG9yaXpvbnRhbCcsIGNyZWF0ZVNoaXAoMykpXG5lbmVteUJvYXJkLnBsYWNlU2hpcCg2LCA3LCAnaG9yaXpvbnRhbCcsIGNyZWF0ZVNoaXAoMikpXG5lbmVteUJvYXJkLnBsYWNlU2hpcCg5LCAxLCAndmVydGljYWwnLCBjcmVhdGVTaGlwKDMpKVxuZW5lbXlCb2FyZC5wbGFjZVNoaXAoNSwgOSwgJ2hvcml6b250YWwnLCBjcmVhdGVTaGlwKDQpKVxuXG5jb25zdCBwcyA9IHB1YlN1YigpXG5cbmFkZExpc3RlbmVyc1RvRW5lbXlCb2FyZChwbGF5ZXJCb2FyZCwgZW5lbXlCb2FyZCwgcGxheWVyLCBjb21wdXRlciwgcHMpXG5cbnBzLnN1YnNjcmliZSgnY2xpY2snLCBhdHRhY2spXG5cblxucmVuZGVyUGxheWVyU2hpcHMocGxheWVyQm9hcmQpIl0sIm5hbWVzIjpbImNyZWF0ZVNoaXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiZW1wdHlDZWxsIiwiaGFzQmVlbkhpdCIsImlzU2hpcCIsIm9mZkxpbWl0cyIsImdhbWVCb2FyZCIsIkFycmF5IiwiZmlsbCIsInN0cnVjdHVyZWRDbG9uZSIsIm1hcCIsInNoaXBzIiwiZ2V0TG9jYXRpb24iLCJjb2x1bW4iLCJyb3ciLCJtYWtlUmFuZG9tQ29vcmRpbmF0ZXMiLCJyYW5kb21EaXJlY3Rpb24iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Db2x1bW4iLCJyYW5kb21Sb3ciLCJjaGVja0lmT2ZmTGltaXRab25lV2FzQ29ycmVjdGx5SW1wbGVtZW50ZWQiLCJzaGlwTGVuZ3RoIiwiZmxhdCIsImZpbHRlciIsImVsZW1lbnQiLCJsZW5ndGgiLCJyZWNlaXZlQXR0YWNrIiwiY2hlY2tJZkFsbFNoaXBzSGF2ZVN1bmsiLCJldmVyeSIsImNlbGwiLCJnZXRTdGF0dXMiLCJ1bml0IiwicGxhY2VTaGlwIiwicmFuZG9tbHlQbGFjZVNoaXBzIiwic2hpcERldGFpbHMiLCJpIiwicHVzaCIsIm5hbWUiLCJnZXROYW1lIiwiYXR0YWNrIiwibG9jYXRpb24iLCJpbmNsdWRlcyIsInN0YXR1cyIsImdldExlbmd0aCIsImlzU3VuayIsInBvc2l0aW9uIiwiaGl0IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm4iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJoYW5kbGVBdHRhY2siLCJlbmVteUJvYXJkIiwicGxheWVyIiwiYXR0YWNrUGxheWVyQ2VsbCIsInBsYXllckJvYXJkIiwiZW5lbXkiLCJjb21wdXRlciIsInBzIiwic3Vic2NyaWJlcnMiLCJwdWJsaXNoIiwiZXZlbnROYW1lIiwiZGF0YSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiY2FsbGJhY2siLCJzdWJzY3JpYmUiLCJpbmRleCIsInVuc3Vic2NyaWJlIiwic3BsaWNlIiwicHViU3ViIiwiZW5lbXlCb2FyZEFyZWEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25jZSIsImFkZExpc3RlbmVyc1RvRW5lbXlCb2FyZCIsImNsYXNzTGlzdCIsImFkZCIsImF0dGFja0VuZW15Q2VsbCIsImNvbnRhaW5zIiwicmVuZGVyRW5lbXlBdGFja3MiLCJwbGF5ZXJCb2FyZEFyZWEiLCJyZW5kZXJQbGF5ZXJTaGlwcyJdLCJzb3VyY2VSb290IjoiIn0=