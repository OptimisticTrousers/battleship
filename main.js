(()=>{var e={653:(e,t,r)=>{const o=r(585);e.exports=()=>{const e={hasBeenHit:!1,isShip:!1,offLimits:!1},t=Array(10).fill(structuredClone(e)).map((()=>Array(10).fill(structuredClone(e)))),r=[o(5,"Carrier"),o(4,"Battleship"),o(3,"Destroyer"),o(3,"Submarine"),o(2,"Patrol Boat")],n=(e,r)=>t?.[e]?.[r],i=(r,o,n=(()=>Object.assign(e,{offLimits:!0}))())=>(void 0===t?.[r]?.[o]||(t[r][o]=n),!0),a=(e,t)=>{i(e-1,t-1),i(e,t-1)},s=(e,r)=>e>=0&&e+r-1<t.length,l=(e,r)=>e>=0&&e+r-1<t.length,c=e=>!0===e.isShip||!0===e.offLimits,u=e=>{const t=0===Math.floor(2*Math.random())?"vertical":"horizontal",r=Math.floor(10*Math.random()),o=Math.floor(10*Math.random());return s(r,e)&&l(o,e)?{randomColumn:r,randomRow:o,randomDirection:t}:u(e)};return{checkIfOffLimitZoneWasCorrectlyImplemented:e=>t.flat().filter((e=>!0===e.offLimits)).length===e+2,getLocation:n,receiveAttack:(e,r)=>{t[e][r].hasBeenHit=!0},checkIfAllShipsHaveSunk:()=>t.flat().every((e=>!1===e.isShip||!0===e.isShip&&!0===e.hasBeenHit&&e.getStatus().every((e=>"hit"===e)))),placeShip:(e,t,r,o)=>{const u=o.getLength();if("vertical"===r){if(l(t,u)){for(let r=0;r<u;r+=1){if(!1!==c(n(e,t+r)))return!1;i(e,t+r,o),i(e+1,t+r),i(e-1,t+r)}return((e,t,r)=>{a(e,t),i(e,t+r),i(e+1,t+r),i(e-1,t+r),i(e+1,t-1)})(e,t,u),!0}}else if("horizontal"===r&&s(e,u)){for(let r=0;r<u;r+=1){if(c(e+r))return!1;i(e+r,t,o),i(e+r,t+1),i(e+r,t-1)}return((e,t,r)=>{a(e,t),i(e+r,t),i(e-1,t+1),i(e+r,t+1),i(e+r,t-1)})(e,t,u),!0}return!1},randomlyPlaceShips:()=>{const e=[];for(let t=0;t<r.length;t+=1){const o=r[t],{randomColumn:n,randomRow:i,randomDirection:a}=u(o.getLength());e.push({randomColumn:n,randomRow:i,randomDirection:a})}return e},makeRandomCoordinates:u}}},61:e=>{e.exports=(e="player")=>({getName:()=>e,attack:(e,t,{getLocation:r,receiveAttack:o})=>{const n=r(e,t);return!1===n.hasBeenHit||n.isShip&&n.getStatus().includes("unhit")?(o(e,t),"It's a hit!"):"You have already hit this spot!"}})},585:e=>{e.exports=(e,t="ship")=>{const r=Array(e).fill("unhit");return{name:t,getLength:()=>r.length,isSunk:()=>r.every((e=>"hit"===e)),hit:t=>{t<e&&(r[t]="hit")},getStatus:()=>r,hasBeenHit:!1,isShip:!0}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=(e,t,r)=>{const o=document.querySelector(`.${e}-board > .cell[column='${t}'][row='${r}']`);o.classList.contains("ship")?o.classList.add("hit"):o.classList.add("miss")},t=(e,t,r,o)=>o.attack(e,t,r);var o=r(653),n=r.n(o),i=(r(585),r(61)),a=r.n(i);const s=n()(),l=n()(),c=a()(),u=a()();s.randomlyPlaceShips(),l.randomlyPlaceShips();const h=(()=>{const e={};return{publish:function(t,r){Array.isArray(e[t])&&e[t].forEach((e=>{e(r)}))},subscribe:function t(r,o){Array.isArray(t[r])||(e[r]=[]),e[r].push(o);const n=e[r].length-1;return{unsubscribe(){e[r].splice(n,1)}}}}})();((e,t,r,o,n)=>{const i=document.querySelector("div.enemy-board");for(let a=0;a<10;a+=1)for(let s=0;s<10;s+=1){const l=i.querySelector(`.cell:nth-child(${10*s+a+1})`);l.setAttribute("column",a),l.setAttribute("row",s),l.addEventListener("click",(()=>{n.publish("click",{cell:l,column:a,row:s,playerBoard:e,enemyBoard:t,player:r,enemy:o})}),{once:!0})}})(s,l,c,u,h),h.subscribe("click",(({cell:r,column:o,row:n,playerBoard:i,enemyBoard:a,player:s,enemy:l})=>{((r,o,n,i)=>{t(r,o,n,i),e("enemy",r,o)})(o,n,a,s),((r,o)=>{const{randomColumn:n,randomRow:i}=r.makeRandomCoordinates();t(n,n,r,o),e("player",n,i)})(i,l)})),(({getLocation:e})=>{const t=document.querySelector("div.player-board");for(let r=0;r<10;r+=1)for(let o=0;o<10;o+=1){const n=t.querySelector(`.cell:nth-child(${10*o+r+1})`);n.setAttribute("column",r),n.setAttribute("row",o),e(o,r).isShip&&n.classList.add("ship")}})(s)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxRQUFTLENBQ2hCdEQsT0FDQTdCLFNBQ0FDLE1BQ0E4RSxjQUNBRCxhQUNBUCxTQUNBdUIsWUFHUixDQUFFSSxNQUFNLE1DNUV4QkMsQ0FBeUJwQixFQUFhRCxFQUFZLEVBQVFFLEVBQVVDLEdBRXBFQSxFQUFHUSxVQUFVLFNEZ0ZTLEVBQ2xCNUQsT0FDQTdCLFNBQ0FDLE1BQ0E4RSxjQUNBRCxhQUNBUCxTQUNBdUIsWUF4R29CLEVBQUM5RixFQUFRQyxFQUFLNkUsRUFBWVAsS0FDOUNNLEVBQWE3RSxFQUFRQyxFQUFLNkUsRUFBWVAsR0FDdENELEVBQWMsUUFBU3RFLEVBQVFDLElBeUcvQm1HLENBQWdCcEcsRUFBUUMsRUFBSzZFLEVBQVlQLEdBdEdwQixFQUFDUSxFQUFhZSxLQUNuQyxNQUFNLGFBQUUxRSxFQUFZLFVBQUVDLEdBQWMwRCxFQUFZaEUsd0JBQ2hEOEQsRUFBYXpELEVBQWNBLEVBQWMyRCxFQUFhZSxHQUN0RHhCLEVBQWMsU0FBVWxELEVBQWNDLElBcUd0Q2dGLENBQWlCdEIsRUFBYWUsTUFsRUQsR0FBRy9GLGtCQUNoQyxNQUFNdUcsRUFBa0I5QixTQUFTQyxjQUFjLG9CQUUvQyxJQUFLLElBQUl6RSxFQUFTLEVBQUdBLEVBQVMsR0FBSUEsR0FBVSxFQUN4QyxJQUFLLElBQUlDLEVBQU0sRUFBR0EsRUFBTSxHQUFJQSxHQUFPLEVBQUcsQ0FDbEMsTUFBTTRCLEVBQU95RSxFQUFnQjdCLGNBQ3pCLG1CQUF5QixHQUFOeEUsRUFBV0QsRUFBUyxNQUUzQzZCLEVBQUttRSxhQUFhLFNBQVVoRyxHQUM1QjZCLEVBQUttRSxhQUFhLE1BQU8vRixHQUNyQkYsRUFBWUUsRUFBS0QsR0FBUVQsUUFDekJzQyxFQUFLNkMsVUFBVUUsSUFBSSxVQ2xDbkMyQixDQUFrQnhCLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC9zaGlwLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbmNvbnN0IGNyZWF0ZVNoaXAgPSByZXF1aXJlKCcuLi9zaGlwL3NoaXAnKVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuY29uc3QgY3JlYXRlR2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVtcHR5Q2VsbCA9IHsgaGFzQmVlbkhpdDogZmFsc2UsIGlzU2hpcDogZmFsc2UsIG9mZkxpbWl0czogZmFsc2UgfVxuICAgIGNvbnN0IGdhbWVCb2FyZCA9IEFycmF5KDEwKVxuICAgICAgICAuZmlsbChzdHJ1Y3R1cmVkQ2xvbmUoZW1wdHlDZWxsKSlcbiAgICAgICAgLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChzdHJ1Y3R1cmVkQ2xvbmUoZW1wdHlDZWxsKSkpXG5cbiAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgICAgY3JlYXRlU2hpcCg1LCAnQ2FycmllcicpLFxuICAgICAgICBjcmVhdGVTaGlwKDQsICdCYXR0bGVzaGlwJyksXG4gICAgICAgIGNyZWF0ZVNoaXAoMywgJ0Rlc3Ryb3llcicpLFxuICAgICAgICBjcmVhdGVTaGlwKDMsICdTdWJtYXJpbmUnKSxcbiAgICAgICAgY3JlYXRlU2hpcCgyLCAnUGF0cm9sIEJvYXQnKSxcbiAgICBdXG5cbiAgICBjb25zdCBjaGVja0lmQWxsU2hpcHNIYXZlU3VuayA9ICgpID0+XG4gICAgICAgIGdhbWVCb2FyZC5mbGF0KCkuZXZlcnkoXG4gICAgICAgICAgICAoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmlzU2hpcCA9PT0gZmFsc2UpIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuaXNTaGlwID09PSB0cnVlICYmIGNlbGwuaGFzQmVlbkhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2VsbC5nZXRTdGF0dXMoKS5ldmVyeSgodW5pdCkgPT4gdW5pdCA9PT0gJ2hpdCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAocG9zaXRpb24uaXNTaGlwID09PSBmYWxzZSkgfHxcbiAgICAgICAgICAgIC8vIChwb3NpdGlvbi5pc1NoaXAgPT09IHRydWUgJiYgcG9zaXRpb24uaGFzQmVlbkhpdCA9PT0gdHJ1ZSlcbiAgICAgICAgKVxuXG4gICAgY29uc3QgY3JlYXRlT2ZmTGltaXRMb2NhdGlvbiA9ICgpID0+XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1wdHlDZWxsLCB7IG9mZkxpbWl0czogdHJ1ZSB9KVxuXG4gICAgY29uc3QgZ2V0TG9jYXRpb24gPSAoY29sdW1uLCByb3cpID0+IGdhbWVCb2FyZD8uW2NvbHVtbl0/Lltyb3ddXG5cbiAgICBjb25zdCBzZXRMb2NhdGlvbiA9IChjb2x1bW4sIHJvdywgc2hpcCA9IGNyZWF0ZU9mZkxpbWl0TG9jYXRpb24oKSkgPT4ge1xuICAgICAgICBpZiAoZ2FtZUJvYXJkPy5bY29sdW1uXT8uW3Jvd10gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWVcbiAgICAgICAgZ2FtZUJvYXJkW2NvbHVtbl1bcm93XSA9IHNoaXBcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBhZGRPZmZMaW1pdEFyZWFGb3JTaGlwcyA9IChjb2x1bW4sIHJvdykgPT4ge1xuICAgICAgICAvLyB0b3AtbGVmdFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gLSAxLCByb3cgLSAxKVxuICAgICAgICAvLyB0b3BcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uLCByb3cgLSAxKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZE9mZkxpbWl0QXJlYUZvckhvcml6b250YWxseVBvc2l0aW9uZWRTaGlwID0gKFxuICAgICAgICBjb2x1bW4sXG4gICAgICAgIHJvdyxcbiAgICAgICAgc2hpcExlbmd0aFxuICAgICkgPT4ge1xuICAgICAgICAvLyBwb3NpdGlvbnMgcmVsYXRpdmUgdG8gdGhlIHNoaXAgaXRzZWxmKGllLiBhIGhvcml6b250YWwgc2hpcCdzIGJvdHRvbSBpcyB0byB0aGUgcmlnaHQpXG5cbiAgICAgICAgYWRkT2ZmTGltaXRBcmVhRm9yU2hpcHMoY29sdW1uLCByb3cpXG4gICAgICAgIC8vIGJvdHRvbVxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyBzaGlwTGVuZ3RoLCByb3cpXG4gICAgICAgIC8vIGJvdHRvbS1sZWZ0XG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiAtIDEsIHJvdyArIDEpXG4gICAgICAgIC8vIGJvdHRvbS1yaWdodFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyBzaGlwTGVuZ3RoLCByb3cgKyAxKVxuICAgICAgICAvLyB0b3AtcmlnaHRcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgc2hpcExlbmd0aCwgcm93IC0gMSlcbiAgICB9XG5cbiAgICBjb25zdCBhZGRPZmZMaW1pdEFyZWFGb3JWZXJ0aWNhbGx5UG9zaXRpb25lZFNoaXAgPSAoXG4gICAgICAgIGNvbHVtbixcbiAgICAgICAgcm93LFxuICAgICAgICBzaGlwTGVuZ3RoXG4gICAgKSA9PiB7XG4gICAgICAgIC8vIHBvc2l0aW9ucyByZWxhdGl2ZSB0byBob3cgdGhlIHVzZXIgc2VlcyBpdChpZS4gYSB2ZXJ0aWNhbCBzaGlwJ3MgYm90dG9tIGlzIHRvIHRoZSBib3R0b20pXG5cbiAgICAgICAgYWRkT2ZmTGltaXRBcmVhRm9yU2hpcHMoY29sdW1uLCByb3cpXG4gICAgICAgIC8vIGJvdHRvbVxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4sIHJvdyArIHNoaXBMZW5ndGgpXG4gICAgICAgIC8vIGJvdHRvbS1yaWdodFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyAxLCByb3cgKyBzaGlwTGVuZ3RoKVxuICAgICAgICAvLyBib3R0b20tbGVmdFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gLSAxLCByb3cgKyBzaGlwTGVuZ3RoKVxuICAgICAgICAvLyB0b3AtcmlnaHRcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgMSwgcm93IC0gMSlcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0lmQ29sdW1uQ29vcmRpbmF0ZUlzVmFsaWQgPSAoY29sdW1uLCBzaGlwTGVuZ3RoKSA9PlxuICAgICAgICBjb2x1bW4gPj0gMCAmJiBjb2x1bW4gKyBzaGlwTGVuZ3RoIC0gMSA8IGdhbWVCb2FyZC5sZW5ndGhcblxuICAgIGNvbnN0IGNoZWNrSWZSb3dDb29yZGluYXRlSXNWYWxpZCA9IChyb3csIHNoaXBMZW5ndGgpID0+XG4gICAgICAgIHJvdyA+PSAwICYmIHJvdyArIHNoaXBMZW5ndGggLSAxIDwgZ2FtZUJvYXJkLmxlbmd0aFxuXG4gICAgY29uc3QgY2hlY2tJZkxvY2F0aW9uSXNBU2hpcE9yT2ZmTGltaXRzID0gKGxvY2F0aW9uKSA9PiB7XG4gICAgICAgIGlmIChsb2NhdGlvbi5pc1NoaXAgPT09IHRydWUgfHwgbG9jYXRpb24ub2ZmTGltaXRzID09PSB0cnVlKSByZXR1cm4gdHJ1ZVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChjb2x1bW4sIHJvdywgZGlyZWN0aW9uLCBzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmdldExlbmd0aCgpXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGlmIChjaGVja0lmUm93Q29vcmRpbmF0ZUlzVmFsaWQocm93LCBzaGlwTGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrSWZMb2NhdGlvbklzQVNoaXBPck9mZkxpbWl0cyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRMb2NhdGlvbihjb2x1bW4sIHJvdyArIGkpXG4gICAgICAgICAgICAgICAgICAgICAgICApID09PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiwgcm93ICsgaSwgc2hpcClcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIDEsIHJvdyArIGkpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gLSAxLCByb3cgKyBpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhZGRPZmZMaW1pdEFyZWFGb3JWZXJ0aWNhbGx5UG9zaXRpb25lZFNoaXAoXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGlmIChjaGVja0lmQ29sdW1uQ29vcmRpbmF0ZUlzVmFsaWQoY29sdW1uLCBzaGlwTGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2hlY2tJZkxvY2F0aW9uSXNBU2hpcE9yT2ZmTGltaXRzKGNvbHVtbiArIGksIHJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIGksIHJvdywgc2hpcClcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIGksIHJvdyArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyBpLCByb3cgLSAxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhZGRPZmZMaW1pdEFyZWFGb3JIb3Jpem9udGFsbHlQb3NpdGlvbmVkU2hpcChcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgIHNoaXBMZW5ndGhcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3QgbWFrZVJhbmRvbUNvb3JkaW5hdGVzID0gKHNoaXBMZW5ndGgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uID1cbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJ1xuICAgICAgICBjb25zdCByYW5kb21Db2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgY29uc3QgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIGlmICghY2hlY2tJZkNvbHVtbkNvb3JkaW5hdGVJc1ZhbGlkKHJhbmRvbUNvbHVtbiwgc2hpcExlbmd0aCkpXG4gICAgICAgICAgICByZXR1cm4gbWFrZVJhbmRvbUNvb3JkaW5hdGVzKHNoaXBMZW5ndGgpXG4gICAgICAgIGlmICghY2hlY2tJZlJvd0Nvb3JkaW5hdGVJc1ZhbGlkKHJhbmRvbVJvdywgc2hpcExlbmd0aCkpXG4gICAgICAgICAgICByZXR1cm4gbWFrZVJhbmRvbUNvb3JkaW5hdGVzKHNoaXBMZW5ndGgpXG4gICAgICAgIHJldHVybiB7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfVxuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbWx5UGxhY2VTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcERldGFpbHMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gc2hpcHNbaV1cbiAgICAgICAgICAgIGNvbnN0IHsgcmFuZG9tQ29sdW1uLCByYW5kb21Sb3csIHJhbmRvbURpcmVjdGlvbiB9ID1cbiAgICAgICAgICAgICAgICBtYWtlUmFuZG9tQ29vcmRpbmF0ZXMoc2hpcC5nZXRMZW5ndGgoKSlcbiAgICAgICAgICAgIHNoaXBEZXRhaWxzLnB1c2goeyByYW5kb21Db2x1bW4sIHJhbmRvbVJvdywgcmFuZG9tRGlyZWN0aW9uIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBEZXRhaWxzXG4gICAgfVxuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb2x1bW4sIHJvdykgPT4ge1xuICAgICAgICBnYW1lQm9hcmRbY29sdW1uXVtyb3ddLmhhc0JlZW5IaXQgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tJZk9mZkxpbWl0Wm9uZVdhc0NvcnJlY3RseUltcGxlbWVudGVkID0gKHNoaXBMZW5ndGgpID0+XG4gICAgICAgIGdhbWVCb2FyZC5mbGF0KCkuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50Lm9mZkxpbWl0cyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIC5sZW5ndGggPT09XG4gICAgICAgIHNoaXBMZW5ndGggKyAyXG4gICAgLy8gYWRkaW5nIHNoaXBMZW5ndGggcGx1cyB0d28gYmVjYXVzZSBmb3IgZXZlcnkgaW5jcmVhc2UgaW4gdGhlIHNpemUgb2Ygc2hpcCwgdGhlIHpvbmVzIGNvdmVyZWQgaW5jcmVhc2UgYnkgMiB1bml0c1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2hlY2tJZk9mZkxpbWl0Wm9uZVdhc0NvcnJlY3RseUltcGxlbWVudGVkLFxuICAgICAgICBnZXRMb2NhdGlvbixcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgY2hlY2tJZkFsbFNoaXBzSGF2ZVN1bmssXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmFuZG9tbHlQbGFjZVNoaXBzLFxuICAgICAgICBtYWtlUmFuZG9tQ29vcmRpbmF0ZXMsXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUdhbWVCb2FyZFxuIiwiY29uc3QgY3JlYXRlUGxheWVyID0gKG5hbWUgPSAncGxheWVyJykgPT4ge1xuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lXG5cbiAgICBjb25zdCBhdHRhY2sgPSAoY29sdW1uLCByb3csIHsgZ2V0TG9jYXRpb24sIHJlY2VpdmVBdHRhY2sgfSkgPT4ge1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGdldExvY2F0aW9uKGNvbHVtbiwgcm93KVxuICAgICAgICBpZiAobG9jYXRpb24uaGFzQmVlbkhpdCA9PT0gZmFsc2UgfHwgKGxvY2F0aW9uLmlzU2hpcCAmJiBsb2NhdGlvbi5nZXRTdGF0dXMoKS5pbmNsdWRlcygndW5oaXQnKSkpIHtcbiAgICAgICAgICAgIHJlY2VpdmVBdHRhY2soY29sdW1uLCByb3cpXG4gICAgICAgICAgICByZXR1cm4gXCJJdCdzIGEgaGl0IVwiXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIGFscmVhZHkgaGl0IHRoaXMgc3BvdCEnXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgYXR0YWNrLFxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVQbGF5ZXJcbiIsImNvbnN0IGNyZWF0ZVNoaXAgPSAobGVuZ3RoLCBuYW1lID0gJ3NoaXAnKSA9PiB7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBBcnJheShsZW5ndGgpLmZpbGwoJ3VuaGl0JylcblxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHN0YXR1cy5sZW5ndGhcblxuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHN0YXR1c1xuXG4gICAgY29uc3QgaGl0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8IGxlbmd0aCkge1xuICAgICAgICAgICAgc3RhdHVzW3Bvc2l0aW9uXSA9ICdoaXQnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzdGF0dXMuZXZlcnkoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gJ2hpdCcpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBnZXRMZW5ndGgsXG4gICAgICAgIGlzU3VuayxcbiAgICAgICAgaGl0LFxuICAgICAgICBnZXRTdGF0dXMsXG4gICAgICAgIGhhc0JlZW5IaXQ6IGZhbHNlLFxuICAgICAgICBpc1NoaXA6IHRydWUsXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNoaXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJjb25zdCByZW5kZXJBdHRhY2tzID0gKHBsYXllciwgY29sdW1uLCByb3cpID0+IHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC4ke3BsYXllcn0tYm9hcmQgPiAuY2VsbFtjb2x1bW49JyR7Y29sdW1ufSddW3Jvdz0nJHtyb3d9J11gXG4gICAgKVxuICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgIH1cbn1cblxuY29uc3QgaGFuZGxlQXR0YWNrID0gKGNvbHVtbiwgcm93LCBlbmVteUJvYXJkLCBwbGF5ZXIpID0+XG4gICAgcGxheWVyLmF0dGFjayhjb2x1bW4sIHJvdywgZW5lbXlCb2FyZClcblxuY29uc3QgYXR0YWNrRW5lbXlDZWxsID0gKGNvbHVtbiwgcm93LCBlbmVteUJvYXJkLCBwbGF5ZXIpID0+IHtcbiAgICBoYW5kbGVBdHRhY2soY29sdW1uLCByb3csIGVuZW15Qm9hcmQsIHBsYXllcilcbiAgICByZW5kZXJBdHRhY2tzKCdlbmVteScsIGNvbHVtbiwgcm93KVxufVxuXG5jb25zdCBhdHRhY2tQbGF5ZXJDZWxsID0gKHBsYXllckJvYXJkLCBlbmVteSkgPT4ge1xuICAgIGNvbnN0IHsgcmFuZG9tQ29sdW1uLCByYW5kb21Sb3cgfSA9IHBsYXllckJvYXJkLm1ha2VSYW5kb21Db29yZGluYXRlcygpXG4gICAgaGFuZGxlQXR0YWNrKHJhbmRvbUNvbHVtbiwgcmFuZG9tQ29sdW1uLCBwbGF5ZXJCb2FyZCwgZW5lbXkpXG4gICAgcmVuZGVyQXR0YWNrcygncGxheWVyJywgcmFuZG9tQ29sdW1uLCByYW5kb21Sb3cpXG59XG4vLyBodHRwczovL2pzbWFuaWZlc3QuY29tL3RoZS1wdWJsaXNoLXN1YnNjcmliZS1wYXR0ZXJuLWluLWphdmFzY3JpcHQvXG5cbmV4cG9ydCBjb25zdCBwdWJTdWIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSB7fVxuXG4gICAgZnVuY3Rpb24gcHVibGlzaChldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3Vic2NyaWJlW2V2ZW50TmFtZV0pKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdID0gW11cbiAgICAgICAgfVxuICAgICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spXG4gICAgICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5sZW5ndGggLSAxXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIHN1YnNjcmliZSxcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQbGF5ZXJTaGlwcyA9ICh7IGdldExvY2F0aW9uIH0pID0+IHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYucGxheWVyLWJvYXJkJylcblxuICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDEwOyBjb2x1bW4gKz0gMSkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBwbGF5ZXJCb2FyZEFyZWEucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgLmNlbGw6bnRoLWNoaWxkKCR7cm93ICogMTAgKyBjb2x1bW4gKyAxfSlgXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnY29sdW1uJywgY29sdW1uKVxuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3JvdycsIHJvdylcbiAgICAgICAgICAgIGlmIChnZXRMb2NhdGlvbihyb3csIGNvbHVtbikuaXNTaGlwKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFkZExpc3RlbmVyc1RvRW5lbXlCb2FyZCA9IChcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBlbmVteUJvYXJkLFxuICAgIHBsYXllcixcbiAgICBlbmVteSxcbiAgICBwc1xuKSA9PiB7XG4gICAgY29uc3QgZW5lbXlCb2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuZW5lbXktYm9hcmQnKVxuXG4gICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbiArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3cgKz0gMSkge1xuICAgICAgICAgICAgLy8gQ3JlZGl0aW5nIGZvcm11bGEgdG8gY2FsY3VsYXRlIG50aC1jaGlsZCB1c2luZyBuZXN0ZWQgbG9vcDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODg3MjY2Mi9tYXRoLXRvLWRldGVybWluZS1pdGVtLWluZGV4LWJhc2VkLW9uLWNvbC1yb3ctc2VsZWN0aW9uLWluLWdyaWRcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBlbmVteUJvYXJkQXJlYS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGAuY2VsbDpudGgtY2hpbGQoJHtyb3cgKiAxMCArIGNvbHVtbiArIDF9KWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjb2x1bW4nLCBjb2x1bW4pXG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm93Jywgcm93KVxuXG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBzLnB1Ymxpc2goJ2NsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlCb2FyZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGF0dGFjayA9ICh7XG4gICAgY2VsbCxcbiAgICBjb2x1bW4sXG4gICAgcm93LFxuICAgIHBsYXllckJvYXJkLFxuICAgIGVuZW15Qm9hcmQsXG4gICAgcGxheWVyLFxuICAgIGVuZW15LFxufSkgPT4ge1xuICAgIC8vIGh1bWFuIHBsYXllciBhdHRhY2tpbmcgY29tcHV0ZXJcbiAgICBhdHRhY2tFbmVteUNlbGwoY29sdW1uLCByb3csIGVuZW15Qm9hcmQsIHBsYXllcilcbiAgICAvLyBjb21wdXRlciBhdHRhY2tpbmcgaHVtYW5cbiAgICBhdHRhY2tQbGF5ZXJDZWxsKHBsYXllckJvYXJkLCBlbmVteSlcbn1cbiIsImltcG9ydCB7IGFkZExpc3RlbmVyc1RvRW5lbXlCb2FyZCwgcmVuZGVyUGxheWVyU2hpcHMscHViU3ViLCBhdHRhY2t9IGZyb20gJy4vZG9tJ1xuXG5pbXBvcnQgY3JlYXRlR2FtZUJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkL2dhbWVib2FyZCdcbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gJy4vc2hpcC9zaGlwJ1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tICcuL3BsYXllci9wbGF5ZXInXG5cbmNvbnN0IHBsYXllckJvYXJkID0gY3JlYXRlR2FtZUJvYXJkKClcbmNvbnN0IGVuZW15Qm9hcmQgPSBjcmVhdGVHYW1lQm9hcmQoKVxuXG5jb25zdCBwbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoKVxuXG5jb25zdCBjb21wdXRlciA9IGNyZWF0ZVBsYXllcigpXG5cbnBsYXllckJvYXJkLnJhbmRvbWx5UGxhY2VTaGlwcygpXG5lbmVteUJvYXJkLnJhbmRvbWx5UGxhY2VTaGlwcygpXG4vL3BsYXllckJvYXJkLnBsYWNlU2hpcCgwLCAwLCAnaG9yaXpvbnRhbCcsIGNyZWF0ZVNoaXAoNSkpXG4vL3BsYXllckJvYXJkLnBsYWNlU2hpcCgzLCA0LCAnaG9yaXpvbnRhbCcsIGNyZWF0ZVNoaXAoMykpXG4vL3BsYXllckJvYXJkLnBsYWNlU2hpcCg2LCA3LCAnaG9yaXpvbnRhbCcsIGNyZWF0ZVNoaXAoMikpXG4vL3BsYXllckJvYXJkLnBsYWNlU2hpcCg5LCAxLCAndmVydGljYWwnLCBjcmVhdGVTaGlwKDMpKVxuLy9wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoNSwgOSwgJ2hvcml6b250YWwnLCBjcmVhdGVTaGlwKDQpKVxuXG4vL2VuZW15Qm9hcmQucGxhY2VTaGlwKDAsIDAsICdob3Jpem9udGFsJywgY3JlYXRlU2hpcCg1KSlcbi8vZW5lbXlCb2FyZC5wbGFjZVNoaXAoMywgNCwgJ2hvcml6b250YWwnLCBjcmVhdGVTaGlwKDMpKVxuLy9lbmVteUJvYXJkLnBsYWNlU2hpcCg2LCA3LCAnaG9yaXpvbnRhbCcsIGNyZWF0ZVNoaXAoMikpXG4vL2VuZW15Qm9hcmQucGxhY2VTaGlwKDksIDEsICd2ZXJ0aWNhbCcsIGNyZWF0ZVNoaXAoMykpXG4vL2VuZW15Qm9hcmQucGxhY2VTaGlwKDUsIDksICdob3Jpem9udGFsJywgY3JlYXRlU2hpcCg0KSlcblxuY29uc3QgcHMgPSBwdWJTdWIoKVxuXG5hZGRMaXN0ZW5lcnNUb0VuZW15Qm9hcmQocGxheWVyQm9hcmQsIGVuZW15Qm9hcmQsIHBsYXllciwgY29tcHV0ZXIsIHBzKVxuXG5wcy5zdWJzY3JpYmUoJ2NsaWNrJywgYXR0YWNrKVxuXG5cbnJlbmRlclBsYXllclNoaXBzKHBsYXllckJvYXJkKSJdLCJuYW1lcyI6WyJjcmVhdGVTaGlwIiwibW9kdWxlIiwiZXhwb3J0cyIsImVtcHR5Q2VsbCIsImhhc0JlZW5IaXQiLCJpc1NoaXAiLCJvZmZMaW1pdHMiLCJnYW1lQm9hcmQiLCJBcnJheSIsImZpbGwiLCJzdHJ1Y3R1cmVkQ2xvbmUiLCJtYXAiLCJzaGlwcyIsImdldExvY2F0aW9uIiwiY29sdW1uIiwicm93Iiwic2V0TG9jYXRpb24iLCJzaGlwIiwiT2JqZWN0IiwiYXNzaWduIiwiY3JlYXRlT2ZmTGltaXRMb2NhdGlvbiIsInVuZGVmaW5lZCIsImFkZE9mZkxpbWl0QXJlYUZvclNoaXBzIiwiY2hlY2tJZkNvbHVtbkNvb3JkaW5hdGVJc1ZhbGlkIiwic2hpcExlbmd0aCIsImxlbmd0aCIsImNoZWNrSWZSb3dDb29yZGluYXRlSXNWYWxpZCIsImNoZWNrSWZMb2NhdGlvbklzQVNoaXBPck9mZkxpbWl0cyIsImxvY2F0aW9uIiwibWFrZVJhbmRvbUNvb3JkaW5hdGVzIiwicmFuZG9tRGlyZWN0aW9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQ29sdW1uIiwicmFuZG9tUm93IiwiY2hlY2tJZk9mZkxpbWl0Wm9uZVdhc0NvcnJlY3RseUltcGxlbWVudGVkIiwiZmxhdCIsImZpbHRlciIsImVsZW1lbnQiLCJyZWNlaXZlQXR0YWNrIiwiY2hlY2tJZkFsbFNoaXBzSGF2ZVN1bmsiLCJldmVyeSIsImNlbGwiLCJnZXRTdGF0dXMiLCJ1bml0IiwicGxhY2VTaGlwIiwiZGlyZWN0aW9uIiwiZ2V0TGVuZ3RoIiwiaSIsImFkZE9mZkxpbWl0QXJlYUZvclZlcnRpY2FsbHlQb3NpdGlvbmVkU2hpcCIsImFkZE9mZkxpbWl0QXJlYUZvckhvcml6b250YWxseVBvc2l0aW9uZWRTaGlwIiwicmFuZG9tbHlQbGFjZVNoaXBzIiwic2hpcERldGFpbHMiLCJwdXNoIiwibmFtZSIsImdldE5hbWUiLCJhdHRhY2siLCJpbmNsdWRlcyIsInN0YXR1cyIsImlzU3VuayIsInBvc2l0aW9uIiwiaGl0IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm4iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJyZW5kZXJBdHRhY2tzIiwicGxheWVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJoYW5kbGVBdHRhY2siLCJlbmVteUJvYXJkIiwicGxheWVyQm9hcmQiLCJjb21wdXRlciIsInBzIiwic3Vic2NyaWJlcnMiLCJwdWJsaXNoIiwiZXZlbnROYW1lIiwiZGF0YSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiY2FsbGJhY2siLCJzdWJzY3JpYmUiLCJpbmRleCIsInVuc3Vic2NyaWJlIiwic3BsaWNlIiwicHViU3ViIiwiZW5lbXkiLCJlbmVteUJvYXJkQXJlYSIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmNlIiwiYWRkTGlzdGVuZXJzVG9FbmVteUJvYXJkIiwiYXR0YWNrRW5lbXlDZWxsIiwiYXR0YWNrUGxheWVyQ2VsbCIsInBsYXllckJvYXJkQXJlYSIsInJlbmRlclBsYXllclNoaXBzIl0sInNvdXJjZVJvb3QiOiIifQ==