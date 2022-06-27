(()=>{var e={653:(e,t,o)=>{const r=o(585);e.exports=()=>{const e={hasBeenHit:!1,isShip:!1,offLimits:!1},t=(()=>{const t=Array(10).fill().map((()=>Array(10).fill()));for(let o=0;o<10;o++)for(let r=0;r<10;r++)t[o][r]={...e,column:o,row:r};return t})(),o=[r(5,"Carrier"),r(4,"Battleship"),r(3,"Destroyer"),r(3,"Submarine"),r(2,"Patrol Boat")],n=(e,o)=>t?.[e]?.[o],i=(o,r,n=(()=>Object.assign(e,{offLimits:!0}))())=>(void 0===t?.[o]?.[r]||(t[o][r]=n),!0),l=(e,t)=>{i(e-1,t-1),i(e,t-1)},a=(e,o,r,a)=>{if((e=>!0===e.isShip||!0===e.offLimits)(n(e,o)))return!1;const c=a.getLength();if("vertical"===r){if(((e,o)=>e>=0&&e+o-1<t.length)(o,c)){for(let t=0;t<c;t+=1)i(e,o+t,{...a,position:t}),i(e+1,o+t),i(e-1,o+t);return((e,t,o)=>{l(e,t),i(e,t+o),i(e+1,t+o),i(e-1,t+o),i(e+1,t-1)})(e,o,c),!0}}else if("horizontal"===r&&((e,o)=>e>=0&&e+o-1<t.length)(e,c)){for(let t=0;t<c;t+=1)i(e+t,o,{...a,position:t}),i(e+t,o+1),i(e+t,o-1);return((e,t,o)=>{l(e,t),i(e+o,t),i(e-1,t+1),i(e+o,t+1),i(e+o,t-1)})(e,o,c),!0}return!1},c=()=>{const e=0===Math.floor(2*Math.random())?"vertical":"horizontal",o=Math.floor(Math.random()*(t.flat().filter((e=>!1===e.isShip&&!1===e.offLimits)).length-1)),r=t.flat(),n=r.findIndex(((e,t)=>t===o)),i=r[n];return{elementColumn:i.column,elementRow:i.row,randomDirection:e}};return{checkIfOffLimitZoneWasCorrectlyImplemented:e=>t.flat().filter((e=>!0===e.offLimits)).length===e+2,getLocation:n,receiveAttack:(e,o)=>{t[e][o].hasBeenHit=!0},checkIfAllShipsHaveSunk:()=>{let e=!0;for(let t=0;t<10;t++)for(let o=0;o<10;o++){const r=n(t,o);if(!1!==r.isShip&&r.isShip&&!1===r.isSunk()){e=!1;break}}return e},placeShip:a,randomlyPlaceShips:()=>{const e=[];for(let t=0;t<o.length;t+=1){const r=o[t],{randomColumn:n,randomRow:i,randomDirection:l}=c(r.getLength());a(n,i,l,r)?e.push({randomColumn:n,randomRow:i,randomDirection:l}):t-=1}return e},makeRandomCoordinates:c}}},61:e=>{e.exports=(e="player")=>({getName:()=>e,attack:(e,t,{getLocation:o,receiveAttack:r})=>{const n=o(e,t);return console.log(n),!1===n.hasBeenHit||n.isShip&&!1===n.getStatus().includes("unhit")?(r(e,t),n.hit&&n.hit(n.position),"It's a hit!"):"You have already hit this spot!"}})},585:e=>{e.exports=(e,t="ship")=>{const o=Array(e).fill("unhit");return{name:t,getLength:()=>o.length,isSunk:()=>o.every((e=>"hit"===e)),hit:t=>{t<e&&(o[t]="hit")},getStatus:()=>o,hasBeenHit:!1,isShip:!0}}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=(e,t,o,r)=>{const n=document.querySelector(`.${e}-board > .cell[column='${t}'][row='${o}']`);r.getLocation(t,o).isShip?n.classList.add("hit"):n.classList.add("miss")},t=(e,t,o,r)=>r.attack(e,t,o);var r=o(653),n=o.n(r),i=o(585),l=o.n(i),a=o(61),c=o.n(a);const s=n()(),u=n()(),h=c()(),p=c()();s.placeShip(0,0,"horizontal",l()(5)),s.placeShip(3,4,"horizontal",l()(3)),s.placeShip(6,7,"horizontal",l()(2)),s.placeShip(9,1,"vertical",l()(3)),s.placeShip(5,9,"horizontal",l()(4)),u.placeShip(0,0,"horizontal",l()(5)),u.placeShip(3,4,"horizontal",l()(3)),u.placeShip(6,7,"horizontal",l()(2)),u.placeShip(9,1,"vertical",l()(3)),u.placeShip(5,9,"horizontal",l()(4));const d=(()=>{const e={};return{publish:function(t,o){Array.isArray(e[t])&&e[t].forEach((e=>{e(o)}))},subscribe:function t(o,r){Array.isArray(t[o])||(e[o]=[]),e[o].push(r);const n=e[o].length-1;return{unsubscribe(){e[o].splice(n,1)}}}}})();((e,t,o,r,n)=>{const i=document.querySelector("div.enemy-board");for(let l=0;l<10;l+=1)for(let a=0;a<10;a+=1){const c=i.querySelector(`.cell:nth-child(${10*a+l+1})`);c.setAttribute("column",l),c.setAttribute("row",a),c.addEventListener("click",(()=>{n.publish("click",{cell:c,column:l,row:a,playerBoard:e,enemyBoard:t,player:o,enemy:r})}),{once:!0})}})(s,u,h,p,d),d.subscribe("click",(({cell:o,column:r,row:n,playerBoard:i,enemyBoard:l,player:a,enemy:c})=>{((o,r,n,i)=>{t(o,r,n,i),e("enemy",o,r,n)})(r,n,l,a),((o,r)=>{const{elementColumn:n,elementRow:i}=o.makeRandomCoordinates();t(n,i,o,r),e("player",n,i,o)})(i,c),((e,t)=>{if(e.checkIfAllShipsHaveSunk()){const e=document.querySelector(".modal"),t=document.querySelector(".modal-content > p"),o=document.querySelector(".modal-content > button");e.style.display="block",o.addEventListener("click",(()=>{location.reload()})),t.textContent="You win!"}if(t.checkIfAllShipsHaveSunk()){const e=document.querySelector(".modal"),t=document.querySelector(".modal-content > p"),o=document.querySelector(".modal-content > button");e.style.display="block",t.textContent="You lose!",o.addEventListener("click",(()=>{location.reload()}))}})(i,l)})),(({getLocation:e})=>{const t=document.querySelector("div.player-board");for(let o=0;o<10;o+=1)for(let r=0;r<10;r+=1){const n=t.querySelector(`.cell:nth-child(${10*r+o+1})`);n.setAttribute("column",o),n.setAttribute("row",r),e(r,o).isShip&&n.classList.add("ship")}})(s)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBVSxFQUN4QyxJQUFLLElBQUlDLEVBQU0sRUFBR0EsRUFBTSxHQUFJQSxHQUFPLEVBQUcsQ0FDbEMsTUFBTStCLEVBQU91RixFQUFnQmxDLGNBQ3pCLG1CQUF5QixHQUFOcEYsRUFBV0QsRUFBUyxNQUUzQ2dDLEVBQUt5RSxhQUFhLFNBQVV6RyxHQUM1QmdDLEVBQUt5RSxhQUFhLE1BQU94RyxHQUNyQkcsRUFBWUgsRUFBS0QsR0FBUVIsUUFDekJ3QyxFQUFLc0QsVUFBVUMsSUFBSSxVQ3BDbkNpQyxDQUFrQi9CLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC9zaGlwLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIGVzbGludC1kaXNhYmxlIG5vLW11bHRpLWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5jb25zdCBjcmVhdGVTaGlwID0gcmVxdWlyZSgnLi4vc2hpcC9zaGlwJylcblxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmNvbnN0IGNyZWF0ZUdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBlbXB0eUNlbGwgPSB7IGhhc0JlZW5IaXQ6IGZhbHNlLCBpc1NoaXA6IGZhbHNlLCBvZmZMaW1pdHM6IGZhbHNlIH1cbiAgICBcbiAgICBjb25zdCBpbml0aWFsaXplQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdhbWVCb2FyZCA9IEFycmF5KDEwKS5maWxsKCkubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKCkpXG4gICAgICAgIGZvcihsZXQgaT0gMDsgaSA8IDEwOyBpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqID0wOyBqIDwgMTA7IGorKyl7XG4gICAgICAgICAgICAgICAgZ2FtZUJvYXJkW2ldW2pdID0gey4uLmVtcHR5Q2VsbCwgY29sdW1uOiBpLCByb3c6IGp9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVCb2FyZFxuICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGdhbWVCb2FyZCA9IGluaXRpYWxpemVCb2FyZCgpXG5cbiAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgICAgY3JlYXRlU2hpcCg1LCAnQ2FycmllcicpLFxuICAgICAgICBjcmVhdGVTaGlwKDQsICdCYXR0bGVzaGlwJyksXG4gICAgICAgIGNyZWF0ZVNoaXAoMywgJ0Rlc3Ryb3llcicpLFxuICAgICAgICBjcmVhdGVTaGlwKDMsICdTdWJtYXJpbmUnKSxcbiAgICAgICAgY3JlYXRlU2hpcCgyLCAnUGF0cm9sIEJvYXQnKSxcbiAgICBdXG5cblxuICAgIGNvbnN0IGNyZWF0ZU9mZkxpbWl0TG9jYXRpb24gPSAoKSA9PlxuICAgICAgICBPYmplY3QuYXNzaWduKGVtcHR5Q2VsbCwgeyBvZmZMaW1pdHM6IHRydWUgfSlcblxuICAgIGNvbnN0IGdldExvY2F0aW9uID0gKGNvbHVtbiwgcm93KSA9PiBnYW1lQm9hcmQ/Lltjb2x1bW5dPy5bcm93XVxuXG4gICAgY29uc3Qgc2V0TG9jYXRpb24gPSAoY29sdW1uLCByb3csIHNoaXAgPSBjcmVhdGVPZmZMaW1pdExvY2F0aW9uKCkpID0+IHtcbiAgICAgICAgaWYgKGdhbWVCb2FyZD8uW2NvbHVtbl0/Lltyb3ddID09PSB1bmRlZmluZWQpIHJldHVybiB0cnVlXG4gICAgICAgIGdhbWVCb2FyZFtjb2x1bW5dW3Jvd10gPSBzaGlwXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGNvbnN0IGNoZWNrSWZBbGxTaGlwc0hhdmVTdW5rID0gKCkgPT4ge1xuXG4gICAgICAgIGxldCBoYXZlQWxsU2hpcHNTdW5rID10cnVlICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGdldExvY2F0aW9uKGksIGopXG4gICAgICAgIGlmKGxvY2F0aW9uLmlzU2hpcCA9PT0gZmFsc2UpIGNvbnRpbnVlXG4gICAgICAgIGlmKGxvY2F0aW9uLmlzU2hpcCAmJiBsb2NhdGlvbi5pc1N1bmsoKSA9PT0gZmFsc2Upe1xuICAgICAgICAgICBoYXZlQWxsU2hpcHNTdW5rID0gZmFsc2UgXG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBoYXZlQWxsU2hpcHNTdW5rIFxuICAgIH1cblxuICAgIGNvbnN0IGFkZE9mZkxpbWl0QXJlYUZvclNoaXBzID0gKGNvbHVtbiwgcm93KSA9PiB7XG4gICAgICAgIC8vIHRvcC1sZWZ0XG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiAtIDEsIHJvdyAtIDEpXG4gICAgICAgIC8vIHRvcFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4sIHJvdyAtIDEpXG4gICAgfVxuXG4gICAgY29uc3QgYWRkT2ZmTGltaXRBcmVhRm9ySG9yaXpvbnRhbGx5UG9zaXRpb25lZFNoaXAgPSAoXG4gICAgICAgIGNvbHVtbixcbiAgICAgICAgcm93LFxuICAgICAgICBzaGlwTGVuZ3RoXG4gICAgKSA9PiB7XG4gICAgICAgIC8vIHBvc2l0aW9ucyByZWxhdGl2ZSB0byB0aGUgc2hpcCBpdHNlbGYoaWUuIGEgaG9yaXpvbnRhbCBzaGlwJ3MgYm90dG9tIGlzIHRvIHRoZSByaWdodClcblxuICAgICAgICBhZGRPZmZMaW1pdEFyZWFGb3JTaGlwcyhjb2x1bW4sIHJvdylcbiAgICAgICAgLy8gYm90dG9tXG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIHNoaXBMZW5ndGgsIHJvdylcbiAgICAgICAgLy8gYm90dG9tLWxlZnRcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uIC0gMSwgcm93ICsgMSlcbiAgICAgICAgLy8gYm90dG9tLXJpZ2h0XG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIHNoaXBMZW5ndGgsIHJvdyArIDEpXG4gICAgICAgIC8vIHRvcC1yaWdodFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyBzaGlwTGVuZ3RoLCByb3cgLSAxKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZE9mZkxpbWl0QXJlYUZvclZlcnRpY2FsbHlQb3NpdGlvbmVkU2hpcCA9IChcbiAgICAgICAgY29sdW1uLFxuICAgICAgICByb3csXG4gICAgICAgIHNoaXBMZW5ndGhcbiAgICApID0+IHtcbiAgICAgICAgLy8gcG9zaXRpb25zIHJlbGF0aXZlIHRvIGhvdyB0aGUgdXNlciBzZWVzIGl0KGllLiBhIHZlcnRpY2FsIHNoaXAncyBib3R0b20gaXMgdG8gdGhlIGJvdHRvbSlcblxuICAgICAgICBhZGRPZmZMaW1pdEFyZWFGb3JTaGlwcyhjb2x1bW4sIHJvdylcbiAgICAgICAgLy8gYm90dG9tXG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiwgcm93ICsgc2hpcExlbmd0aClcbiAgICAgICAgLy8gYm90dG9tLXJpZ2h0XG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIDEsIHJvdyArIHNoaXBMZW5ndGgpXG4gICAgICAgIC8vIGJvdHRvbS1sZWZ0XG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiAtIDEsIHJvdyArIHNoaXBMZW5ndGgpXG4gICAgICAgIC8vIHRvcC1yaWdodFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyAxLCByb3cgLSAxKVxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrSWZDb2x1bW5Db29yZGluYXRlSXNWYWxpZCA9IChjb2x1bW4sIHNoaXBMZW5ndGgpID0+XG4gICAgICAgIGNvbHVtbiA+PSAwICYmIGNvbHVtbiArIHNoaXBMZW5ndGggLSAxIDwgZ2FtZUJvYXJkLmxlbmd0aFxuXG4gICAgY29uc3QgY2hlY2tJZlJvd0Nvb3JkaW5hdGVJc1ZhbGlkID0gKHJvdywgc2hpcExlbmd0aCkgPT5cbiAgICAgICAgcm93ID49IDAgJiYgcm93ICsgc2hpcExlbmd0aCAtIDEgPCBnYW1lQm9hcmQubGVuZ3RoXG5cbiAgICBjb25zdCBjaGVja0lmTG9jYXRpb25Jc0FTaGlwT3JPZmZMaW1pdHMgPSAobG9jYXRpb24pID0+IHtcbiAgICAgICAgaWYgKGxvY2F0aW9uLmlzU2hpcCA9PT0gdHJ1ZSB8fCBsb2NhdGlvbi5vZmZMaW1pdHMgPT09IHRydWUpIHJldHVybiB0cnVlXG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKGNvbHVtbiwgcm93LCBkaXJlY3Rpb24sIHNoaXApID0+IHtcbiAgICAgICAgaWYgKGNoZWNrSWZMb2NhdGlvbklzQVNoaXBPck9mZkxpbWl0cyhnZXRMb2NhdGlvbihjb2x1bW4sIHJvdykpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmdldExlbmd0aCgpXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGlmIChjaGVja0lmUm93Q29vcmRpbmF0ZUlzVmFsaWQocm93LCBzaGlwTGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiwgcm93ICsgaSwgey4uLnNoaXAsIHBvc2l0aW9uOiBpfSlcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgMSwgcm93ICsgaSlcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uIC0gMSwgcm93ICsgaSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWRkT2ZmTGltaXRBcmVhRm9yVmVydGljYWxseVBvc2l0aW9uZWRTaGlwKFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgc2hpcExlbmd0aFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tJZkNvbHVtbkNvb3JkaW5hdGVJc1ZhbGlkKGNvbHVtbiwgc2hpcExlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyBpICwgcm93LCB7Li4uc2hpcCwgcG9zaXRpb246IGl9KVxuICAgICAgICAgICAgICAgICAgICAvL3NldExvY2F0aW9uKGNvbHVtbiArIGksIHJvdywgc2hpcClcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgaSwgcm93ICsgMSlcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgaSwgcm93IC0gMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWRkT2ZmTGltaXRBcmVhRm9ySG9yaXpvbnRhbGx5UG9zaXRpb25lZFNoaXAoXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgICAgICBjb25zdCBhdmFpbGFibGVTcGFjZXMgPSAoKSA9PlxuICAgICAgICBnYW1lQm9hcmRcbiAgICAgICAgICAgIC5mbGF0KClcbiAgICAgICAgICAgIC5maWx0ZXIoKGNlbGwpID0+IGNlbGwuaXNTaGlwID09PSBmYWxzZSAmJiBjZWxsLm9mZkxpbWl0cyA9PT0gZmFsc2UpXG4gICAgICAgICAgICAubGVuZ3RoIC0gMVxuXG4gICAgY29uc3QgbWFrZVJhbmRvbUNvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByYW5kb21EaXJlY3Rpb24gPVxuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDAgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnXG4gICAgICAgIGNvbnN0IHJhbmRvbUxvY2F0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlU3BhY2VzKCkpXG5jb25zdCBmbGF0dGVuZWRHYW1lQm9hcmQgPSBnYW1lQm9hcmQuZmxhdCgpXG5cbiAgICAgICAgY29uc3QgZWxlbWVudEluZGV4ID0gZmxhdHRlbmVkR2FtZUJvYXJkLmZpbmRJbmRleCgoY2VsbCwgaW5kZXgpID0+IGluZGV4ID09PSByYW5kb21Mb2NhdGlvbilcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZmxhdHRlbmVkR2FtZUJvYXJkW2VsZW1lbnRJbmRleF1cblxuICAgICAgICBjb25zdCBlbGVtZW50Q29sdW1uID0gZWxlbWVudC5jb2x1bW5cbiAgICAgICAgY29uc3QgZWxlbWVudFJvdyA9IGVsZW1lbnQucm93XG5cbiAgICAgICAgcmV0dXJuIHsgZWxlbWVudENvbHVtbiwgZWxlbWVudFJvdywgcmFuZG9tRGlyZWN0aW9uIH1cbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21seVBsYWNlU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBEZXRhaWxzID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHNoaXBzW2ldXG4gICAgICAgICAgICBjb25zdCB7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfSA9XG4gICAgICAgICAgICAgICAgbWFrZVJhbmRvbUNvb3JkaW5hdGVzKHNoaXAuZ2V0TGVuZ3RoKCkpXG4gICAgICAgICAgICBpZiAocGxhY2VTaGlwKHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24sIHNoaXApKSB7XG4gICAgICAgICAgICAgICAgc2hpcERldGFpbHMucHVzaCh7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaSAtPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBEZXRhaWxzXG4gICAgfVxuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb2x1bW4sIHJvdykgPT4ge1xuICAgICAgICBnYW1lQm9hcmRbY29sdW1uXVtyb3ddLmhhc0JlZW5IaXQgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tJZk9mZkxpbWl0Wm9uZVdhc0NvcnJlY3RseUltcGxlbWVudGVkID0gKHNoaXBMZW5ndGgpID0+XG4gICAgICAgIGdhbWVCb2FyZC5mbGF0KCkuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50Lm9mZkxpbWl0cyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIC5sZW5ndGggPT09XG4gICAgICAgIHNoaXBMZW5ndGggKyAyXG4gICAgLy8gYWRkaW5nIHNoaXBMZW5ndGggcGx1cyB0d28gYmVjYXVzZSBmb3IgZXZlcnkgaW5jcmVhc2UgaW4gdGhlIHNpemUgb2Ygc2hpcCwgdGhlIHpvbmVzIGNvdmVyZWQgaW5jcmVhc2UgYnkgMiB1bml0c1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2hlY2tJZk9mZkxpbWl0Wm9uZVdhc0NvcnJlY3RseUltcGxlbWVudGVkLFxuICAgICAgICBnZXRMb2NhdGlvbixcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgY2hlY2tJZkFsbFNoaXBzSGF2ZVN1bmssXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmFuZG9tbHlQbGFjZVNoaXBzLFxuICAgICAgICBtYWtlUmFuZG9tQ29vcmRpbmF0ZXMsXG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVHYW1lQm9hcmQiLCJjb25zdCBjcmVhdGVQbGF5ZXIgPSAobmFtZSA9ICdwbGF5ZXInKSA9PiB7XG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWVcblxuICAgIGNvbnN0IGF0dGFjayA9IChjb2x1bW4sIHJvdywgeyBnZXRMb2NhdGlvbiwgcmVjZWl2ZUF0dGFjayB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZ2V0TG9jYXRpb24oY29sdW1uLCByb3cpXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuICAgICAgICBpZiAobG9jYXRpb24uaGFzQmVlbkhpdCA9PT0gZmFsc2UgfHwgKGxvY2F0aW9uLmlzU2hpcCAmJiBsb2NhdGlvbi5nZXRTdGF0dXMoKS5pbmNsdWRlcygndW5oaXQnKSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICByZWNlaXZlQXR0YWNrKGNvbHVtbiwgcm93KVxuICAgICAgICAgICAgaWYobG9jYXRpb24uaGl0KXtcblxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhpdChsb2NhdGlvbi5wb3NpdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcIkl0J3MgYSBoaXQhXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnWW91IGhhdmUgYWxyZWFkeSBoaXQgdGhpcyBzcG90ISdcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXROYW1lLFxuICAgICAgICBhdHRhY2ssXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVBsYXllclxuIiwiY29uc3QgY3JlYXRlU2hpcCA9IChsZW5ndGgsIG5hbWUgPSAnc2hpcCcpID0+IHtcblxuICAgIGNvbnN0IHN0YXR1cyA9IEFycmF5KGxlbmd0aCkuZmlsbCgndW5oaXQnKVxuXG4gICAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gc3RhdHVzLmxlbmd0aFxuXG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4gc3RhdHVzXG5cbiAgICBjb25zdCBoaXQgPSAocG9zaXRpb24pID0+IHtcbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBzdGF0dXNbcG9zaXRpb25dID0gJ2hpdCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHN0YXR1cy5ldmVyeSgocG9zaXRpb24pID0+IHBvc2l0aW9uID09PSAnaGl0JylcblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGdldExlbmd0aCxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBoaXQsXG4gICAgICAgIGdldFN0YXR1cyxcbiAgICAgICAgaGFzQmVlbkhpdDogZmFsc2UsXG4gICAgICAgIGlzU2hpcDogdHJ1ZSxcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2hpcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImNvbnN0IHJlbmRlckF0dGFja3MgPSAocGxheWVyLCBjb2x1bW4sIHJvdywgZW5lbXlCb2FyZCkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLiR7cGxheWVyfS1ib2FyZCA+IC5jZWxsW2NvbHVtbj0nJHtjb2x1bW59J11bcm93PScke3Jvd30nXWBcbiAgICApXG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGVuZW15Qm9hcmQuZ2V0TG9jYXRpb24oY29sdW1uLCByb3cpXG4gICAgaWYgKGxvY2F0aW9uLmlzU2hpcCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICB9XG59XG5cbmNvbnN0IGhhbmRsZUF0dGFjayA9IChjb2x1bW4sIHJvdywgZW5lbXlCb2FyZCwgcGxheWVyKSA9PlxuICAgIHBsYXllci5hdHRhY2soY29sdW1uLCByb3csIGVuZW15Qm9hcmQpXG5cbmNvbnN0IGF0dGFja0VuZW15Q2VsbCA9IChjb2x1bW4sIHJvdywgZW5lbXlCb2FyZCwgcGxheWVyKSA9PiB7XG4gICAgaGFuZGxlQXR0YWNrKGNvbHVtbiwgcm93LCBlbmVteUJvYXJkLCBwbGF5ZXIpXG4gICAgcmVuZGVyQXR0YWNrcygnZW5lbXknLCBjb2x1bW4sIHJvdywgZW5lbXlCb2FyZClcbn1cblxuY29uc3QgYXR0YWNrUGxheWVyQ2VsbCA9IChwbGF5ZXJCb2FyZCwgZW5lbXkpID0+IHtcbiAgICBjb25zdCB7IGVsZW1lbnRDb2x1bW4gLCBlbGVtZW50Um93fSA9IHBsYXllckJvYXJkLm1ha2VSYW5kb21Db29yZGluYXRlcygpXG4gICAgaGFuZGxlQXR0YWNrKGVsZW1lbnRDb2x1bW4sIGVsZW1lbnRSb3csIHBsYXllckJvYXJkLCBlbmVteSlcbiAgICByZW5kZXJBdHRhY2tzKCdwbGF5ZXInLCBlbGVtZW50Q29sdW1uLCBlbGVtZW50Um93LCBwbGF5ZXJCb2FyZClcbn1cbi8vIGh0dHBzOi8vanNtYW5pZmVzdC5jb20vdGhlLXB1Ymxpc2gtc3Vic2NyaWJlLXBhdHRlcm4taW4tamF2YXNjcmlwdC9cblxuZXhwb3J0IGNvbnN0IHB1YlN1YiA9ICgpID0+IHtcbiAgICBjb25zdCBzdWJzY3JpYmVycyA9IHt9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVbZXZlbnROYW1lXSkpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSBbXVxuICAgICAgICB9XG4gICAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjaylcbiAgICAgICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmxlbmd0aCAtIDFcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHVibGlzaCxcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlclBsYXllclNoaXBzID0gKHsgZ2V0TG9jYXRpb24gfSkgPT4ge1xuICAgIGNvbnN0IHBsYXllckJvYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5wbGF5ZXItYm9hcmQnKVxuXG4gICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbiArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3cgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHBsYXllckJvYXJkQXJlYS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGAuY2VsbDpudGgtY2hpbGQoJHtyb3cgKiAxMCArIGNvbHVtbiArIDF9KWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjb2x1bW4nLCBjb2x1bW4pXG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm93Jywgcm93KVxuICAgICAgICAgICAgaWYgKGdldExvY2F0aW9uKHJvdywgY29sdW1uKS5pc1NoaXApIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjaGVja0lmR2FtZU92ZXIgPSAocGxheWVyQm9hcmQsIGVuZW15Qm9hcmQpID0+IHtcbiAgICBpZihwbGF5ZXJCb2FyZC5jaGVja0lmQWxsU2hpcHNIYXZlU3VuaygpKXtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICAgICAgY29uc3QgbW9kYWxXaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCA+IHAnKVxuICAgICAgICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCA+IGJ1dHRvbicpXG5cbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgICBwbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIG1vZGFsV2lubmVyLnRleHRDb250ZW50ID0gJ1lvdSB3aW4hJ1xuXG5cbiAgICB9XG4gICAgaWYoZW5lbXlCb2FyZC5jaGVja0lmQWxsU2hpcHNIYXZlU3VuaygpKXtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICAgICAgY29uc3QgbW9kYWxXaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCA+IHAnKVxuICAgICAgICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCA+IGJ1dHRvbicpXG5cbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgICBtb2RhbFdpbm5lci50ZXh0Q29udGVudCA9ICdZb3UgbG9zZSEnXG4gICAgICAgIHBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWRkTGlzdGVuZXJzVG9FbmVteUJvYXJkID0gKFxuICAgIHBsYXllckJvYXJkLFxuICAgIGVuZW15Qm9hcmQsXG4gICAgcGxheWVyLFxuICAgIGVuZW15LFxuICAgIHBzXG4pID0+IHtcbiAgICBjb25zdCBlbmVteUJvYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5lbmVteS1ib2FyZCcpXG5cbiAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCAxMDsgY29sdW1uICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdyArPSAxKSB7XG4gICAgICAgICAgICAvLyBDcmVkaXRpbmcgZm9ybXVsYSB0byBjYWxjdWxhdGUgbnRoLWNoaWxkIHVzaW5nIG5lc3RlZCBsb29wOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84ODcyNjYyL21hdGgtdG8tZGV0ZXJtaW5lLWl0ZW0taW5kZXgtYmFzZWQtb24tY29sLXJvdy1zZWxlY3Rpb24taW4tZ3JpZFxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGVuZW15Qm9hcmRBcmVhLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYC5jZWxsOm50aC1jaGlsZCgke3JvdyAqIDEwICsgY29sdW1uICsgMX0pYFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2NvbHVtbicsIGNvbHVtbilcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb3cnLCByb3cpXG5cbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHMucHVibGlzaCgnY2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteUJvYXJkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXksXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhdHRhY2sgPSAoe1xuICAgIGNlbGwsXG4gICAgY29sdW1uLFxuICAgIHJvdyxcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBlbmVteUJvYXJkLFxuICAgIHBsYXllcixcbiAgICBlbmVteSxcbn0pID0+IHtcbiAgICAvLyBodW1hbiBwbGF5ZXIgYXR0YWNraW5nIGNvbXB1dGVyXG4gICAgYXR0YWNrRW5lbXlDZWxsKGNvbHVtbiwgcm93LCBlbmVteUJvYXJkLCBwbGF5ZXIpXG4gICAgLy8gY29tcHV0ZXIgYXR0YWNraW5nIGh1bWFuXG4gICAgYXR0YWNrUGxheWVyQ2VsbChwbGF5ZXJCb2FyZCwgZW5lbXkpXG5cbiAgICBjaGVja0lmR2FtZU92ZXIocGxheWVyQm9hcmQsIGVuZW15Qm9hcmQpXG5cbn1cbiIsImltcG9ydCB7IGFkZExpc3RlbmVyc1RvRW5lbXlCb2FyZCwgcmVuZGVyUGxheWVyU2hpcHMscHViU3ViLCBhdHRhY2t9IGZyb20gJy4vZG9tJ1xuXG5pbXBvcnQgY3JlYXRlR2FtZUJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkL2dhbWVib2FyZCdcbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gJy4vc2hpcC9zaGlwJ1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tICcuL3BsYXllci9wbGF5ZXInXG5cbmNvbnN0IHBsYXllckJvYXJkID0gY3JlYXRlR2FtZUJvYXJkKClcbmNvbnN0IGVuZW15Qm9hcmQgPSBjcmVhdGVHYW1lQm9hcmQoKVxuXG5jb25zdCBwbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoKVxuXG5jb25zdCBjb21wdXRlciA9IGNyZWF0ZVBsYXllcigpXG5cbnBsYXllckJvYXJkLnBsYWNlU2hpcCgwLCAwLCAnaG9yaXpvbnRhbCcsIGNyZWF0ZVNoaXAoNSkpXG5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoMywgNCwgJ2hvcml6b250YWwnLCBjcmVhdGVTaGlwKDMpKVxucGxheWVyQm9hcmQucGxhY2VTaGlwKDYsIDcsICdob3Jpem9udGFsJywgY3JlYXRlU2hpcCgyKSlcbnBsYXllckJvYXJkLnBsYWNlU2hpcCg5LCAxLCAndmVydGljYWwnLCBjcmVhdGVTaGlwKDMpKVxucGxheWVyQm9hcmQucGxhY2VTaGlwKDUsIDksICdob3Jpem9udGFsJywgY3JlYXRlU2hpcCg0KSlcblxuZW5lbXlCb2FyZC5wbGFjZVNoaXAoMCwgMCwgJ2hvcml6b250YWwnLCBjcmVhdGVTaGlwKDUpKVxuZW5lbXlCb2FyZC5wbGFjZVNoaXAoMywgNCwgJ2hvcml6b250YWwnLCBjcmVhdGVTaGlwKDMpKVxuZW5lbXlCb2FyZC5wbGFjZVNoaXAoNiwgNywgJ2hvcml6b250YWwnLCBjcmVhdGVTaGlwKDIpKVxuZW5lbXlCb2FyZC5wbGFjZVNoaXAoOSwgMSwgJ3ZlcnRpY2FsJywgY3JlYXRlU2hpcCgzKSlcbmVuZW15Qm9hcmQucGxhY2VTaGlwKDUsIDksICdob3Jpem9udGFsJywgY3JlYXRlU2hpcCg0KSlcblxuY29uc3QgcHMgPSBwdWJTdWIoKVxuXG5hZGRMaXN0ZW5lcnNUb0VuZW15Qm9hcmQocGxheWVyQm9hcmQsIGVuZW15Qm9hcmQsIHBsYXllciwgY29tcHV0ZXIsIHBzKVxuXG5wcy5zdWJzY3JpYmUoJ2NsaWNrJywgYXR0YWNrKVxuXG5cblxuXG5yZW5kZXJQbGF5ZXJTaGlwcyhwbGF5ZXJCb2FyZCkiXSwibmFtZXMiOlsiY3JlYXRlU2hpcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbXB0eUNlbGwiLCJoYXNCZWVuSGl0IiwiaXNTaGlwIiwib2ZmTGltaXRzIiwiZ2FtZUJvYXJkIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaSIsImoiLCJjb2x1bW4iLCJyb3ciLCJpbml0aWFsaXplQm9hcmQiLCJzaGlwcyIsImdldExvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJzaGlwIiwiT2JqZWN0IiwiYXNzaWduIiwiY3JlYXRlT2ZmTGltaXRMb2NhdGlvbiIsInVuZGVmaW5lZCIsImFkZE9mZkxpbWl0QXJlYUZvclNoaXBzIiwicGxhY2VTaGlwIiwiZGlyZWN0aW9uIiwibG9jYXRpb24iLCJjaGVja0lmTG9jYXRpb25Jc0FTaGlwT3JPZmZMaW1pdHMiLCJzaGlwTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiY2hlY2tJZlJvd0Nvb3JkaW5hdGVJc1ZhbGlkIiwicG9zaXRpb24iLCJhZGRPZmZMaW1pdEFyZWFGb3JWZXJ0aWNhbGx5UG9zaXRpb25lZFNoaXAiLCJjaGVja0lmQ29sdW1uQ29vcmRpbmF0ZUlzVmFsaWQiLCJhZGRPZmZMaW1pdEFyZWFGb3JIb3Jpem9udGFsbHlQb3NpdGlvbmVkU2hpcCIsIm1ha2VSYW5kb21Db29yZGluYXRlcyIsInJhbmRvbURpcmVjdGlvbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUxvY2F0aW9uIiwiZmxhdCIsImZpbHRlciIsImNlbGwiLCJmbGF0dGVuZWRHYW1lQm9hcmQiLCJlbGVtZW50SW5kZXgiLCJmaW5kSW5kZXgiLCJpbmRleCIsImVsZW1lbnQiLCJlbGVtZW50Q29sdW1uIiwiZWxlbWVudFJvdyIsImNoZWNrSWZPZmZMaW1pdFpvbmVXYXNDb3JyZWN0bHlJbXBsZW1lbnRlZCIsInJlY2VpdmVBdHRhY2siLCJjaGVja0lmQWxsU2hpcHNIYXZlU3VuayIsImhhdmVBbGxTaGlwc1N1bmsiLCJpc1N1bmsiLCJyYW5kb21seVBsYWNlU2hpcHMiLCJzaGlwRGV0YWlscyIsInJhbmRvbUNvbHVtbiIsInJhbmRvbVJvdyIsInB1c2giLCJuYW1lIiwiZ2V0TmFtZSIsImF0dGFjayIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0dXMiLCJpbmNsdWRlcyIsImhpdCIsInN0YXR1cyIsImV2ZXJ5IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm4iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJyZW5kZXJBdHRhY2tzIiwicGxheWVyIiwiZW5lbXlCb2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImhhbmRsZUF0dGFjayIsInBsYXllckJvYXJkIiwiY29tcHV0ZXIiLCJwcyIsInN1YnNjcmliZXJzIiwicHVibGlzaCIsImV2ZW50TmFtZSIsImRhdGEiLCJpc0FycmF5IiwiZm9yRWFjaCIsImNhbGxiYWNrIiwic3Vic2NyaWJlIiwidW5zdWJzY3JpYmUiLCJzcGxpY2UiLCJwdWJTdWIiLCJlbmVteSIsImVuZW15Qm9hcmRBcmVhIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uY2UiLCJhZGRMaXN0ZW5lcnNUb0VuZW15Qm9hcmQiLCJhdHRhY2tFbmVteUNlbGwiLCJhdHRhY2tQbGF5ZXJDZWxsIiwibW9kYWwiLCJtb2RhbFdpbm5lciIsInBsYXlBZ2FpbkJ1dHRvbiIsInN0eWxlIiwiZGlzcGxheSIsInJlbG9hZCIsInRleHRDb250ZW50IiwiY2hlY2tJZkdhbWVPdmVyIiwicGxheWVyQm9hcmRBcmVhIiwicmVuZGVyUGxheWVyU2hpcHMiXSwic291cmNlUm9vdCI6IiJ9