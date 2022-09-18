(()=>{"use strict";class e{constructor(){this.board=[],this.createBoard(),this.hits=[],this.misses=[],this.placedShips=[],this.gameOver=!1,this.sunkShips=[]}createBoard(){let e=0;for(let t=0;t<10;t++){this.board[t]=[];for(let n=0;n<10;n++)e++,this.board[t][n]=e}}placeShip(e,t,n){if(n&&!0===this.validPlacement(t,e.length,!0)){for(let n=0;n<e.length;n++){for(let n=0;n<this.board.length;n++)if(this.board[n].includes(t)){let s=this.board[n].indexOf(t);this.board[n][s]=e.name}t+=10}this.placedShips.push(e)}else if(!n&&!0===this.validPlacement(t,e.length,!1)){for(let n=0;n<e.length;n++){for(let n=0;n<this.board.length;n++)if(this.board[n].includes(t)){let s=this.board[n].indexOf(t);this.board[n][s]=e.name}t+=1}this.placedShips.push(e)}}recieveAttack(e,t){let n=e+t;Number.isInteger(this.board[e][t])?this.misses.push(n):(this.hits.push(n),this.placedShips.forEach((s=>{if(s.name===this.board[e][t])return s.hit(n),s.isSunk(),void(s.isSunk()&&this.sunkShips.push(s))})))}isOver(){return 4===this.sunkShips.length}validPlacement(e,t,n){let s=this.convertPosition(e),i=this.getRow(s),r=this.getCol(s);if(n&&i+t>10)return!1;if(!n&&r+t>10)return!1;if(n)for(let e=0;e<t;e++){if(!Number.isInteger(this.board[i][r]))return!1;i++}else for(let e=0;e<t;e++){if(!Number.isInteger(this.board[i][r]))return!1;r++}return!0}randomlyPlaceShips(e){let t,n,s=!1;for(;!s;)t=Math.floor(100*Math.random())+1,n=Math.random()<.5,this.validPlacement(t,e.length,n)?(s=!0,this.placeShip(e,t,n)):s=!1}convertPosition(e){let t,n,s=e.toString();return e<11?(t=e-1,n=0):100===e?(n=9,t=9):e%10==0?(n=parseInt(s.slice(0,1)),t=9):(n=parseInt(s.slice(0,1)),t=parseInt(s.slice(1,2))-1),n.toString()+t.toString()}getCol(e){return parseInt(e.slice(1,2))}getRow(e){return parseInt(e.slice(0,1))}}class t{constructor(t,n){this.gameboard=new e,this.name=t,this.shots=[],this.oponent=n}attack(e,t){let n=this.gameboard.convertPosition(e),s=this.gameboard.getRow(n),i=this.gameboard.getCol(n);this.shots.includes(e)||(this.shots.push(e),t.gameboard.recieveAttack(s,i),t.gameboard.isOver())}randomAttack(e){let t,n=!1;for(;!n;){t=Math.floor(100*Math.random())+1;let s=this.gameboard.convertPosition(t),i=this.gameboard.getRow(s),r=this.gameboard.getCol(s);if(!this.shots.includes(t))return console.log(t),this.shots.push(t),e.gameboard.recieveAttack(i,r),n=!0,t}}}class n{constructor(e,t){this.length=e,this.isHit=[],this.sunk=!1,this.name=t}hit(e){if(!this.isHit.includes(e)&&this.isHit.length<this.length)return this.isHit.push(e),this.isHit}isSunk(){return this.isHit.length===this.length&&(this.sunk=!0,!0)}}function s(e){document.querySelector("body");const s=document.querySelector(".info");null==s||s.classList.remove("info"),null==s||s.classList.add("hide");const r=document.querySelector("#main");r.classList.remove("hide"),r.classList.add("main"),document.querySelector(".grid1");const o=document.querySelector(".grid-container1");document.querySelector(".title-1").textContent=e;const a=document.querySelector(".sunken1"),l=(document.querySelector(".grid2"),document.querySelector(".grid-container2"));document.querySelector(".title-2").textContent="Computer";const d=document.querySelector(".sunken2"),c=document.querySelector(".who-won"),h=document.createElement("button");h.textContent="Restart",h.addEventListener("click",(function(){i()}));let u=new t("human","computer"),m=new t("computer","human"),p=u.gameboard.board,g=m.gameboard.board;const b=[new n(5,"carrier"),new n(4,"destroyer"),new n(3,"submarine"),new n(2,"patrol")];[new n(5,"carrier"),new n(4,"destroyer"),new n(3,"submarine"),new n(2,"patrol")].forEach((e=>{m.gameboard.randomlyPlaceShips(e)})),b.forEach((e=>{u.gameboard.randomlyPlaceShips(e)}));let f=0;for(let e=0;e<p.length;e++)for(let t=0;t<p[e].length;t++){f++;const n=document.createElement("div");n.setAttribute("hposition",f),Number.isInteger(p[e][t])||n.classList.add("ship-here"),n.classList.add("grid-item"),null==o||o.appendChild(n)}for(let t=0;t<g.length;t++)for(let n=0;n<g[t].length;n++){const s=document.createElement("div");s.setAttribute("cposition",g[t][n]),s.classList.add("grid-item"),s.classList.add("ai-grid"),s.addEventListener("click",(function(){if(s.classList.contains("hit")||s.classList.contains("miss")||u.gameboard.isOver()||m.gameboard.isOver())return;if(Number.isInteger(g[t][n]))s.classList.add("miss");else{s.classList.add("hit");let i=!1;if(m.gameboard.recieveAttack(t,n),m.gameboard.placedShips.forEach((e=>{e.name===g[t][n]&&(i=e.sunk)})),i){const s=document.createElement("h2");if(s.textContent=g[t][n],null==d||d.appendChild(s),m.gameboard.isOver()){const t=document.createElement("h1");t.textContent="Winner: "+e+"!",null==c||c.appendChild(t),null==c||c.appendChild(h)}}}let i;i=m.randomAttack(u);const r=document.querySelector(`[hposition="${i}"]`);let o=i,l=u.gameboard.convertPosition(o),b=u.gameboard.getRow(l),f=u.gameboard.getCol(l);if(Number.isInteger(u.gameboard.board[b][f]))null==r||r.classList.add("miss");else{null==r||r.classList.add("hit");let e=!1;if(u.gameboard.recieveAttack(t,n),u.gameboard.placedShips.forEach((t=>{t.name===p[b][f]&&(e=t.sunk)})),e){const e=document.createElement("h2");if(e.textContent=p[b][f],null==a||a.appendChild(e),u.gameboard.isOver()){const e=document.createElement("h1");e.textContent="Winner: Computer!",null==c||c.appendChild(e),null==c||c.appendChild(h)}}}})),null==l||l.appendChild(s)}}function i(){const e=document.querySelector(".info"),t=document.createElement("div");t.classList.add("input-container");const n=document.createElement("label");n.textContent="Enter Name:";const i=document.createElement("input");i.classList.add("name-input");const r=document.createElement("button");r.classList.add("start-button"),r.textContent="Start",t.appendChild(n),t.appendChild(i),t.appendChild(r),null==e||e.appendChild(t),r.addEventListener("click",(function(){if(""!==i.value){const n=i.value;null==e||e.removeChild(t),s(n)}else{const n="To lazy to enter a name";null==e||e.removeChild(t),s(n)}}))}i()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQ08sTUFBTUEsRUFDVEMsY0FDSUMsS0FBS0MsTUFBUSxHQUNiRCxLQUFLRSxjQUNMRixLQUFLRyxLQUFPLEdBQ1pILEtBQUtJLE9BQVMsR0FDZEosS0FBS0ssWUFBYyxHQUNuQkwsS0FBS00sVUFBVyxFQUNoQk4sS0FBS08sVUFBWSxFQUNyQixDQUNBTCxjQUNJLElBQUlNLEVBQVEsRUFDWixJQUFLLElBQUlDLEVBQUksRUFBR0EsRUFBSSxHQUFJQSxJQUFLLENBQ3pCVCxLQUFLQyxNQUFNUSxHQUFLLEdBQ2hCLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJLEdBQUlBLElBQ3BCRixJQUNBUixLQUFLQyxNQUFNUSxHQUFHQyxHQUFLRixDQUUzQixDQUNKLENBQ0FHLFVBQVVDLEVBQU1DLEVBQU9DLEdBQ25CLEdBQUlBLElBQThELElBQWxEZCxLQUFLZSxlQUFlRixFQUFPRCxFQUFLSSxRQUFRLEdBQWdCLENBQ3BFLElBQUssSUFBSVAsRUFBSSxFQUFHQSxFQUFJRyxFQUFLSSxPQUFRUCxJQUFLLENBQ2xDLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJVixLQUFLQyxNQUFNZSxPQUFRTixJQUNuQyxHQUFJVixLQUFLQyxNQUFNUyxHQUFHTyxTQUFTSixHQUFRLENBQy9CLElBQUlLLEVBQVFsQixLQUFLQyxNQUFNUyxHQUFHUyxRQUFRTixHQUNsQ2IsS0FBS0MsTUFBTVMsR0FBR1EsR0FBU04sRUFBS1EsSUFDaEMsQ0FFSlAsR0FBUyxFQUNiLENBQ0FiLEtBQUtLLFlBQVlnQixLQUFLVCxFQUMxQixNQUNLLElBQUtFLElBQzZDLElBQW5EZCxLQUFLZSxlQUFlRixFQUFPRCxFQUFLSSxRQUFRLEdBQWlCLENBQ3pELElBQUssSUFBSVAsRUFBSSxFQUFHQSxFQUFJRyxFQUFLSSxPQUFRUCxJQUFLLENBQ2xDLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJVixLQUFLQyxNQUFNZSxPQUFRTixJQUNuQyxHQUFJVixLQUFLQyxNQUFNUyxHQUFHTyxTQUFTSixHQUFRLENBQy9CLElBQUlLLEVBQVFsQixLQUFLQyxNQUFNUyxHQUFHUyxRQUFRTixHQUNsQ2IsS0FBS0MsTUFBTVMsR0FBR1EsR0FBU04sRUFBS1EsSUFDaEMsQ0FFSlAsR0FBUyxDQUNiLENBQ0FiLEtBQUtLLFlBQVlnQixLQUFLVCxFQUMxQixDQUNKLENBQ0FVLGNBQWNDLEVBQUtDLEdBQ2YsSUFBSUMsRUFBV0YsRUFBTUMsRUFDaEJFLE9BQU9DLFVBQVUzQixLQUFLQyxNQUFNc0IsR0FBS0MsSUFjbEN4QixLQUFLSSxPQUFPaUIsS0FBS0ksSUFiakJ6QixLQUFLRyxLQUFLa0IsS0FBS0ksR0FDZnpCLEtBQUtLLFlBQVl1QixTQUFTaEIsSUFDdEIsR0FBSUEsRUFBS1EsT0FBU3BCLEtBQUtDLE1BQU1zQixHQUFLQyxHQU05QixPQUxBWixFQUFLaUIsSUFBSUosR0FDVGIsRUFBS2tCLGNBQ0RsQixFQUFLa0IsVUFDTDlCLEtBQUtPLFVBQVVjLEtBQUtULEdBRzVCLElBT1osQ0FDQW1CLFNBQ0ksT0FBOEIsSUFBMUIvQixLQUFLTyxVQUFVUyxNQUl2QixDQUNBRCxlQUFlVSxFQUFVVCxFQUFRZ0IsR0FDN0IsSUFBSUMsRUFBY2pDLEtBQUtrQyxnQkFBZ0JULEdBQ25DRixFQUFNdkIsS0FBS21DLE9BQU9GLEdBQ2xCVCxFQUFTeEIsS0FBS29DLE9BQU9ILEdBQ3pCLEdBQUlELEdBQWNULEVBQU1QLEVBQVMsR0FDN0IsT0FBTyxFQUVOLElBQUtnQixHQUFjUixFQUFTUixFQUFTLEdBQ3RDLE9BQU8sRUFFWCxHQUFJZ0IsRUFDQSxJQUFLLElBQUl2QixFQUFJLEVBQUdBLEVBQUlPLEVBQVFQLElBQUssQ0FDN0IsSUFBS2lCLE9BQU9DLFVBQVUzQixLQUFLQyxNQUFNc0IsR0FBS0MsSUFDbEMsT0FBTyxFQUdQRCxHQUVSLE1BR0EsSUFBSyxJQUFJZCxFQUFJLEVBQUdBLEVBQUlPLEVBQVFQLElBQUssQ0FDN0IsSUFBS2lCLE9BQU9DLFVBQVUzQixLQUFLQyxNQUFNc0IsR0FBS0MsSUFDbEMsT0FBTyxFQUdQQSxHQUVSLENBRUosT0FBTyxDQUNYLENBQ0FhLG1CQUFtQnpCLEdBQ2YsSUFDSWEsRUFDQWEsRUFGQUMsR0FBUSxFQUdaLE1BQVFBLEdBQ0pkLEVBQVdlLEtBQUtDLE1BQXNCLElBQWhCRCxLQUFLRSxVQUFrQixFQUV6Q0osRUFEQUUsS0FBS0UsU0FBVyxHQU1oQjFDLEtBQUtlLGVBQWVVLEVBQVViLEVBQUtJLE9BQVFzQixJQUMzQ0MsR0FBUSxFQUNSdkMsS0FBS1csVUFBVUMsRUFBTWEsRUFBVWEsSUFJL0JDLEdBQVEsQ0FHcEIsQ0FDQUwsZ0JBQWdCVCxHQUNaLElBQUlELEVBRUFELEVBREFvQixFQUFNbEIsRUFBU21CLFdBcUJuQixPQW5CSW5CLEVBQVcsSUFDWEQsRUFBU0MsRUFBVyxFQUNwQkYsRUFBTSxHQUVZLE1BQWJFLEdBQ0xGLEVBQU0sRUFDTkMsRUFBUyxHQUVKQyxFQUFXLElBQU8sR0FDdkJGLEVBQU1zQixTQUFTRixFQUFJRyxNQUFNLEVBQUcsSUFDNUJ0QixFQUFTLElBR1RELEVBQU1zQixTQUFTRixFQUFJRyxNQUFNLEVBQUcsSUFDNUJ0QixFQUFTcUIsU0FBU0YsRUFBSUcsTUFBTSxFQUFHLElBQU0sR0FFNUJ2QixFQUFJcUIsV0FDSnBCLEVBQU9vQixVQUd4QixDQUNBUixPQUFPTyxHQUNILE9BQU9FLFNBQVNGLEVBQUlHLE1BQU0sRUFBRyxHQUNqQyxDQUNBWCxPQUFPUSxHQUNILE9BQU9FLFNBQVNGLEVBQUlHLE1BQU0sRUFBRyxHQUNqQyxFQzdKRyxNQUFNQyxFQUNUaEQsWUFBWXFCLEVBQU00QixHQUNkaEQsS0FBS2lELFVBQVksSUFBSW5ELEVBQ3JCRSxLQUFLb0IsS0FBT0EsRUFDWnBCLEtBQUtrRCxNQUFRLEdBQ2JsRCxLQUFLZ0QsUUFBVUEsQ0FDbkIsQ0FDQUcsT0FBTzFCLEVBQVV1QixHQUNiLElBQUlmLEVBQWNqQyxLQUFLaUQsVUFBVWYsZ0JBQWdCVCxHQUM3Q0YsRUFBTXZCLEtBQUtpRCxVQUFVZCxPQUFPRixHQUM1Qm1CLEVBQU1wRCxLQUFLaUQsVUFBVWIsT0FBT0gsR0FDM0JqQyxLQUFLa0QsTUFBTWpDLFNBQVNRLEtBQ3JCekIsS0FBS2tELE1BQU03QixLQUFLSSxHQUNoQnVCLEVBQVFDLFVBQVUzQixjQUFjQyxFQUFLNkIsR0FDakNKLEVBQVFDLFVBQVVsQixTQUk5QixDQUNBc0IsYUFBYUMsR0FDVCxJQUNJN0IsRUFEQThCLEdBQVksRUFFaEIsTUFBUUEsR0FBVyxDQUNmOUIsRUFBV2UsS0FBS0MsTUFBc0IsSUFBaEJELEtBQUtFLFVBQWtCLEVBQzdDLElBQUlULEVBQWNqQyxLQUFLaUQsVUFBVWYsZ0JBQWdCVCxHQUM3Q0YsRUFBTXZCLEtBQUtpRCxVQUFVZCxPQUFPRixHQUM1Qm1CLEVBQU1wRCxLQUFLaUQsVUFBVWIsT0FBT0gsR0FDaEMsSUFBS2pDLEtBQUtrRCxNQUFNakMsU0FBU1EsR0FPckIsT0FOQStCLFFBQVFDLElBQUloQyxHQUNaekIsS0FBS2tELE1BQU03QixLQUFLSSxHQUNoQjZCLEVBQVNMLFVBQVUzQixjQUFjQyxFQUFLNkIsR0FDdENHLEdBQVksRUFHTDlCLENBRWYsQ0FDSixFQ3RDRyxNQUFNaUMsRUFDVDNELFlBQVlpQixFQUFRSSxHQUNoQnBCLEtBQUtnQixPQUFTQSxFQUNkaEIsS0FBSzJELE1BQVEsR0FDYjNELEtBQUs0RCxNQUFPLEVBQ1o1RCxLQUFLb0IsS0FBT0EsQ0FDaEIsQ0FDQVMsSUFBSUosR0FFQSxJQUFLekIsS0FBSzJELE1BQU0xQyxTQUFTUSxJQUFhekIsS0FBSzJELE1BQU0zQyxPQUFTaEIsS0FBS2dCLE9BRTNELE9BREFoQixLQUFLMkQsTUFBTXRDLEtBQUtJLEdBQ1R6QixLQUFLMkQsS0FFcEIsQ0FDQTdCLFNBRUksT0FBSTlCLEtBQUsyRCxNQUFNM0MsU0FBV2hCLEtBQUtnQixTQUMzQmhCLEtBQUs0RCxNQUFPLEdBQ0wsRUFHZixFQ2xCVyxTQUFTQyxFQUFZQyxHQUNuQkMsU0FBU0MsY0FBYyxRQUFwQyxNQUNNQyxFQUFPRixTQUFTQyxjQUFjLFNBQ3BDQyxTQUE0Q0EsRUFBS0MsVUFBVUMsT0FBTyxRQUNsRUYsU0FBNENBLEVBQUtDLFVBQVVFLElBQUksUUFDL0QsTUFBTUMsRUFBT04sU0FBU0MsY0FBYyxTQUNwQ0ssRUFBS0gsVUFBVUMsT0FBTyxRQUN0QkUsRUFBS0gsVUFBVUUsSUFBSSxRQUNJTCxTQUFTQyxjQUFjLFVBQTlDLE1BQ01NLEVBQVFQLFNBQVNDLGNBQWMsb0JBQ3RCRCxTQUFTQyxjQUFjLFlBQy9CTyxZQUFjVCxFQUNyQixNQUFNVSxFQUFVVCxTQUFTQyxjQUFjLFlBRWpDUyxHQURpQlYsU0FBU0MsY0FBYyxVQUNoQ0QsU0FBU0MsY0FBYyxxQkFDdEJELFNBQVNDLGNBQWMsWUFDL0JPLFlBQWMsV0FDckIsTUFBTUcsRUFBVVgsU0FBU0MsY0FBYyxZQUNqQ1csRUFBU1osU0FBU0MsY0FBYyxZQUNoQ1ksRUFBVWIsU0FBU2MsY0FBYyxVQUN2Q0QsRUFBUUwsWUFBYyxVQUN0QkssRUFBUUUsaUJBQWlCLFNBQVMsV0FJOUJDLEdBQ0osSUFDQSxJQUFJQyxFQUFRLElBQUlqQyxFQUFPLFFBQVMsWUFDNUJrQyxFQUFXLElBQUlsQyxFQUFPLFdBQVksU0FDbENtQyxFQUFTRixFQUFNL0IsVUFBVWhELE1BQ3pCa0YsRUFBU0YsRUFBU2hDLFVBQVVoRCxNQVNoQyxNQUFNbUYsRUFBYSxDQVJKLElBQUkxQixFQUFLLEVBQUcsV0FDVixJQUFJQSxFQUFLLEVBQUcsYUFDWixJQUFJQSxFQUFLLEVBQUcsYUFDZixJQUFJQSxFQUFLLEVBQUcsV0FNSixDQUxQLElBQUlBLEVBQUssRUFBRyxXQUNWLElBQUlBLEVBQUssRUFBRyxhQUNaLElBQUlBLEVBQUssRUFBRyxhQUNmLElBQUlBLEVBQUssRUFBRyxXQU9aOUIsU0FBU2hCLElBQ25CcUUsRUFBU2hDLFVBQVVaLG1CQUFtQnpCLEVBQUssSUFFL0N3RSxFQUFXeEQsU0FBU2hCLElBQ2hCb0UsRUFBTS9CLFVBQVVaLG1CQUFtQnpCLEVBQUssSUFFNUMsSUFBSUosRUFBUSxFQUNaLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJeUUsRUFBT2xFLE9BQVFQLElBQy9CLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJd0UsRUFBT3pFLEdBQUdPLE9BQVFOLElBQUssQ0FDdkNGLElBQ0EsTUFBTTZFLEVBQVd0QixTQUFTYyxjQUFjLE9BQ3hDUSxFQUFTQyxhQUFhLFlBQWE5RSxHQUU5QmtCLE9BQU9DLFVBQVV1RCxFQUFPekUsR0FBR0MsS0FDNUIyRSxFQUFTbkIsVUFBVUUsSUFBSSxhQUUzQmlCLEVBQVNuQixVQUFVRSxJQUFJLGFBQ3ZCRSxTQUE4Q0EsRUFBTWlCLFlBQVlGLEVBQ3BFLENBRUosSUFBSyxJQUFJNUUsRUFBSSxFQUFHQSxFQUFJMEUsRUFBT25FLE9BQVFQLElBQy9CLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJeUUsRUFBTzFFLEdBQUdPLE9BQVFOLElBQUssQ0FDdkMsTUFBTTJFLEVBQVd0QixTQUFTYyxjQUFjLE9BQ3hDUSxFQUFTQyxhQUFhLFlBQWFILEVBQU8xRSxHQUFHQyxJQUU3QzJFLEVBQVNuQixVQUFVRSxJQUFJLGFBQ3ZCaUIsRUFBU25CLFVBQVVFLElBQUksV0FDdkJpQixFQUFTUCxpQkFBaUIsU0FBUyxXQUMvQixHQUFJTyxFQUFTbkIsVUFBVXNCLFNBQVMsUUFDNUJILEVBQVNuQixVQUFVc0IsU0FBUyxTQUM1QlIsRUFBTS9CLFVBQVVsQixVQUNoQmtELEVBQVNoQyxVQUFVbEIsU0FDbkIsT0FFSixHQUFLTCxPQUFPQyxVQUFVd0QsRUFBTzFFLEdBQUdDLElBc0I1QjJFLEVBQVNuQixVQUFVRSxJQUFJLFlBdEJVLENBQ2pDaUIsRUFBU25CLFVBQVVFLElBQUksT0FDdkIsSUFBSXRDLEdBQVMsRUFPYixHQU5BbUQsRUFBU2hDLFVBQVUzQixjQUFjYixFQUFHQyxHQUNwQ3VFLEVBQVNoQyxVQUFVNUMsWUFBWXVCLFNBQVNoQixJQUNoQ0EsRUFBS1EsT0FBUytELEVBQU8xRSxHQUFHQyxLQUN4Qm9CLEVBQVNsQixFQUFLZ0QsS0FDbEIsSUFFQTlCLEVBQVEsQ0FDUixNQUFNMkQsRUFBUzFCLFNBQVNjLGNBQWMsTUFHdEMsR0FGQVksRUFBT2xCLFlBQWNZLEVBQU8xRSxHQUFHQyxHQUMvQmdFLFNBQWtEQSxFQUFRYSxZQUFZRSxHQUNsRVIsRUFBU2hDLFVBQVVsQixTQUFVLENBQzdCLE1BQU0yRCxFQUFTM0IsU0FBU2MsY0FBYyxNQUN0Q2EsRUFBT25CLFlBQWMsV0FBYVQsRUFBYSxJQUMvQ2EsU0FBZ0RBLEVBQU9ZLFlBQVlHLEdBQ25FZixTQUFnREEsRUFBT1ksWUFBWVgsRUFDdkUsQ0FDSixDQUNKLENBSUEsSUFBSW5ELEVBQ0pBLEVBQVd3RCxFQUFTNUIsYUFBYTJCLEdBQ2pDLE1BQU1XLEVBQU81QixTQUFTQyxjQUFjLGVBQWV2QyxPQUNuRCxJQUFJbUUsRUFBT25FLEVBQ1BRLEVBQWMrQyxFQUFNL0IsVUFBVWYsZ0JBQWdCMEQsR0FDOUNyRSxFQUFNeUQsRUFBTS9CLFVBQVVkLE9BQU9GLEdBQzdCbUIsRUFBTTRCLEVBQU0vQixVQUFVYixPQUFPSCxHQUNqQyxHQUFLUCxPQUFPQyxVQUFVcUQsRUFBTS9CLFVBQVVoRCxNQUFNc0IsR0FBSzZCLElBc0I3Q3VDLFNBQTRDQSxFQUFLekIsVUFBVUUsSUFBSSxZQXRCWCxDQUNwRHVCLFNBQTRDQSxFQUFLekIsVUFBVUUsSUFBSSxPQUMvRCxJQUFJeUIsR0FBVSxFQU9kLEdBTkFiLEVBQU0vQixVQUFVM0IsY0FBY2IsRUFBR0MsR0FDakNzRSxFQUFNL0IsVUFBVTVDLFlBQVl1QixTQUFTaEIsSUFDN0JBLEVBQUtRLE9BQVM4RCxFQUFPM0QsR0FBSzZCLEtBQzFCeUMsRUFBVWpGLEVBQUtnRCxLQUNuQixJQUVBaUMsRUFBUyxDQUNULE1BQU1KLEVBQVMxQixTQUFTYyxjQUFjLE1BR3RDLEdBRkFZLEVBQU9sQixZQUFjVyxFQUFPM0QsR0FBSzZCLEdBQ2pDb0IsU0FBa0RBLEVBQVFlLFlBQVlFLEdBQ2xFVCxFQUFNL0IsVUFBVWxCLFNBQVUsQ0FDMUIsTUFBTTJELEVBQVMzQixTQUFTYyxjQUFjLE1BQ3RDYSxFQUFPbkIsWUFBYyxvQkFDckJJLFNBQWdEQSxFQUFPWSxZQUFZRyxHQUNuRWYsU0FBZ0RBLEVBQU9ZLFlBQVlYLEVBQ3ZFLENBQ0osQ0FDSixDQUlKLElBQ0FILFNBQThDQSxFQUFNYyxZQUFZRixFQUNwRSxDQUVSLENDNUllLFNBQVNOLElBQ3BCLE1BQU1kLEVBQU9GLFNBQVNDLGNBQWMsU0FDOUI4QixFQUFpQi9CLFNBQVNjLGNBQWMsT0FDOUNpQixFQUFlNUIsVUFBVUUsSUFBSSxtQkFDN0IsTUFBTTJCLEVBQVloQyxTQUFTYyxjQUFjLFNBQ3pDa0IsRUFBVXhCLFlBQWMsY0FDeEIsTUFBTXlCLEVBQVlqQyxTQUFTYyxjQUFjLFNBQ3pDbUIsRUFBVTlCLFVBQVVFLElBQUksY0FDeEIsTUFBTTZCLEVBQWNsQyxTQUFTYyxjQUFjLFVBQzNDb0IsRUFBWS9CLFVBQVVFLElBQUksZ0JBQzFCNkIsRUFBWTFCLFlBQWMsUUFDMUJ1QixFQUFlUCxZQUFZUSxHQUMzQkQsRUFBZVAsWUFBWVMsR0FDM0JGLEVBQWVQLFlBQVlVLEdBQzNCaEMsU0FBNENBLEVBQUtzQixZQUFZTyxHQUM3REcsRUFBWW5CLGlCQUFpQixTQUFTLFdBQ2xDLEdBQXdCLEtBQXBCa0IsRUFBVUUsTUFBYyxDQUN4QixNQUFNOUUsRUFBTzRFLEVBQVVFLE1BQ3ZCakMsU0FBNENBLEVBQUtrQyxZQUFZTCxHQUM3RGpDLEVBQVl6QyxFQUNoQixLQUNLLENBQ0QsTUFBTUEsRUFBTywwQkFDYjZDLFNBQTRDQSxFQUFLa0MsWUFBWUwsR0FDN0RqQyxFQUFZekMsRUFDaEIsQ0FDSixHQUNKLENDM0JBMkQsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXJzLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3NoaXAudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9yZW5kZXJHYW1lQm9hcmRzLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvc3RhcnRHYW1lLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCdcclxuZXhwb3J0IGNsYXNzIEdhbWVCb2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJvYXJkID0gW107XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCb2FyZCgpO1xyXG4gICAgICAgIHRoaXMuaGl0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMubWlzc2VzID0gW107XHJcbiAgICAgICAgdGhpcy5wbGFjZWRTaGlwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN1bmtTaGlwcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQm9hcmQoKSB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFtpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwbGFjZVNoaXAoc2hpcCwgc3RhcnQsIHZlcnRpY2FsKSB7XHJcbiAgICAgICAgaWYgKHZlcnRpY2FsICYmIHRoaXMudmFsaWRQbGFjZW1lbnQoc3RhcnQsIHNoaXAubGVuZ3RoLCB0cnVlKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2pdLmluY2x1ZGVzKHN0YXJ0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmJvYXJkW2pdLmluZGV4T2Yoc3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2pdW2luZGV4XSA9IHNoaXAubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdGFydCArPSAxMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYWNlZFNoaXBzLnB1c2goc2hpcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCF2ZXJ0aWNhbCAmJlxyXG4gICAgICAgICAgICB0aGlzLnZhbGlkUGxhY2VtZW50KHN0YXJ0LCBzaGlwLmxlbmd0aCwgZmFsc2UpID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvYXJkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbal0uaW5jbHVkZXMoc3RhcnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuYm9hcmRbal0uaW5kZXhPZihzdGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbal1baW5kZXhdID0gc2hpcC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0YXJ0ICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wbGFjZWRTaGlwcy5wdXNoKHNoaXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlY2lldmVBdHRhY2socm93LCBjb2x1bW4pIHtcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSByb3cgKyBjb2x1bW47XHJcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpdHMucHVzaChwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMucGxhY2VkU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNoaXAubmFtZSA9PT0gdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdChwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5pc1N1bmsoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1bmtTaGlwcy5wdXNoKHNoaXApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5taXNzZXMucHVzaChwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc092ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3Vua1NoaXBzLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFsaWRQbGFjZW1lbnQocG9zaXRpb24sIGxlbmd0aCwgaXNWZXJ0aWNhbCkge1xyXG4gICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuY29udmVydFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICBsZXQgcm93ID0gdGhpcy5nZXRSb3cobmV3UG9zaXRpb24pO1xyXG4gICAgICAgIGxldCBjb2x1bW4gPSB0aGlzLmdldENvbChuZXdQb3NpdGlvbik7XHJcbiAgICAgICAgaWYgKGlzVmVydGljYWwgJiYgcm93ICsgbGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghaXNWZXJ0aWNhbCAmJiBjb2x1bW4gKyBsZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1ZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcih0aGlzLmJvYXJkW3Jvd11bY29sdW1uXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByb3crKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbisrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmFuZG9tbHlQbGFjZVNoaXBzKHNoaXApIHtcclxuICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgcG9zaXRpb247XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjtcclxuICAgICAgICB3aGlsZSAoIXZhbGlkKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDE7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRQbGFjZW1lbnQocG9zaXRpb24sIHNoaXAubGVuZ3RoLCBkaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlU2hpcChzaGlwLCBwb3NpdGlvbiwgZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnZlcnRQb3NpdGlvbihwb3NpdGlvbikge1xyXG4gICAgICAgIGxldCBjb2x1bW47XHJcbiAgICAgICAgbGV0IHN0ciA9IHBvc2l0aW9uLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IHJvdztcclxuICAgICAgICBpZiAocG9zaXRpb24gPCAxMSkge1xyXG4gICAgICAgICAgICBjb2x1bW4gPSBwb3NpdGlvbiAtIDE7XHJcbiAgICAgICAgICAgIHJvdyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBvc2l0aW9uID09PSAxMDApIHtcclxuICAgICAgICAgICAgcm93ID0gOTtcclxuICAgICAgICAgICAgY29sdW1uID0gOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocG9zaXRpb24gJSAxMCA9PT0gMCkge1xyXG4gICAgICAgICAgICByb3cgPSBwYXJzZUludChzdHIuc2xpY2UoMCwgMSkpO1xyXG4gICAgICAgICAgICBjb2x1bW4gPSA5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcm93ID0gcGFyc2VJbnQoc3RyLnNsaWNlKDAsIDEpKTtcclxuICAgICAgICAgICAgY29sdW1uID0gcGFyc2VJbnQoc3RyLnNsaWNlKDEsIDIpKSAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdHJSb3cgPSByb3cudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgc3RyQ29sID0gY29sdW1uLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gc3RyUm93ICsgc3RyQ29sO1xyXG4gICAgICAgIHJldHVybiBuZXdQb3NpdGlvbjtcclxuICAgIH1cclxuICAgIGdldENvbChzdHIpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoc3RyLnNsaWNlKDEsIDIpKTtcclxuICAgIH1cclxuICAgIGdldFJvdyhzdHIpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoc3RyLnNsaWNlKDAsIDEpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBvcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnNob3RzID0gW107XHJcbiAgICAgICAgdGhpcy5vcG9uZW50ID0gb3BvbmVudDtcclxuICAgIH1cclxuICAgIGF0dGFjayhwb3NpdGlvbiwgb3BvbmVudCkge1xyXG4gICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZ2FtZWJvYXJkLmNvbnZlcnRQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IHJvdyA9IHRoaXMuZ2FtZWJvYXJkLmdldFJvdyhuZXdQb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IGNvbCA9IHRoaXMuZ2FtZWJvYXJkLmdldENvbChuZXdQb3NpdGlvbik7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNob3RzLmluY2x1ZGVzKHBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3RzLnB1c2gocG9zaXRpb24pO1xyXG4gICAgICAgICAgICBvcG9uZW50LmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKHJvdywgY29sKTtcclxuICAgICAgICAgICAgaWYgKG9wb25lbnQuZ2FtZWJvYXJkLmlzT3ZlcigpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdnXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByYW5kb21BdHRhY2sob3Bwb25lbnQpIHtcclxuICAgICAgICBsZXQgdmFsaWRTaG90ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uO1xyXG4gICAgICAgIHdoaWxlICghdmFsaWRTaG90KSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDE7XHJcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZ2FtZWJvYXJkLmNvbnZlcnRQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLmdhbWVib2FyZC5nZXRSb3cobmV3UG9zaXRpb24pO1xyXG4gICAgICAgICAgICBsZXQgY29sID0gdGhpcy5nYW1lYm9hcmQuZ2V0Q29sKG5ld1Bvc2l0aW9uKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3RzLmluY2x1ZGVzKHBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG90cy5wdXNoKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIG9wcG9uZW50LmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKHJvdywgY29sKTtcclxuICAgICAgICAgICAgICAgIHZhbGlkU2hvdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgc3RyOiBzdHJpbmdcclxuICAgICAgICAgICAgICAgIC8vIHN0ciA9IHJvdy50b1N0cmluZygpICsgY29sLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsIG5hbWUpIHtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICB0aGlzLmlzSGl0ID0gW107XHJcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuICAgIGhpdChwb3NpdGlvbikge1xyXG4gICAgICAgIC8vcHVzaCBwb3NpdGlvbiB0byBpc2hpdCBhcnJheVxyXG4gICAgICAgIGlmICghdGhpcy5pc0hpdC5pbmNsdWRlcyhwb3NpdGlvbikgJiYgdGhpcy5pc0hpdC5sZW5ndGggPCB0aGlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzSGl0LnB1c2gocG9zaXRpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0hpdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc1N1bmsoKSB7XHJcbiAgICAgICAgLy9jaGVja3MgZWFjaCBwb3NpdGlvbiBvZiBzaGlwIGZvciBoaXRzIGlmIGFsbCBhcmUgaGl0IGlzIHN1bmtcclxuICAgICAgICBpZiAodGhpcy5pc0hpdC5sZW5ndGggPT09IHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL2ZhY3Rvcmllcy9wbGF5ZXJzXCI7XHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi4vZmFjdG9yaWVzL3NoaXBcIjtcclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi9zdGFydEdhbWVcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyR3JpZHMocGxheWVyTmFtZSkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcclxuICAgIGluZm8gPT09IG51bGwgfHwgaW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5mby5jbGFzc0xpc3QucmVtb3ZlKFwiaW5mb1wiKTtcclxuICAgIGluZm8gPT09IG51bGwgfHwgaW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5mby5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuICAgIGNvbnN0IGdyaWRDb250YWluZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkMVwiKTtcclxuICAgIGNvbnN0IGdyaWQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkLWNvbnRhaW5lcjFcIik7XHJcbiAgICBjb25zdCB0aXRsZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLTFcIik7XHJcbiAgICB0aXRsZTEudGV4dENvbnRlbnQgPSBwbGF5ZXJOYW1lO1xyXG4gICAgY29uc3Qgc3Vua2VuMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Vua2VuMVwiKTtcclxuICAgIGNvbnN0IGdyaWRDb250YWluZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkMlwiKTtcclxuICAgIGNvbnN0IGdyaWQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkLWNvbnRhaW5lcjJcIik7XHJcbiAgICBjb25zdCB0aXRsZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLTJcIik7XHJcbiAgICB0aXRsZTIudGV4dENvbnRlbnQgPSBcIkNvbXB1dGVyXCI7XHJcbiAgICBjb25zdCBzdW5rZW4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW5rZW4yXCIpO1xyXG4gICAgY29uc3Qgd2hvV29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG8td29uXCIpO1xyXG4gICAgY29uc3QgcmVzdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICByZXN0YXJ0LnRleHRDb250ZW50ID0gXCJSZXN0YXJ0XCI7XHJcbiAgICByZXN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gZ3JpZENvbnRhaW5lcjE/LnJlbW92ZUNoaWxkKGdyaWQxKTtcclxuICAgICAgICAvLyBncmlkQ29udGFpbmVyMj8ucmVtb3ZlQ2hpbGQoZ3JpZDIpO1xyXG4gICAgICAgIC8vIHJlbmRlckdyaWRzKHBsYXllck5hbWUpO1xyXG4gICAgICAgIHN0YXJ0R2FtZSgpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgaHVtYW4gPSBuZXcgUGxheWVyKFwiaHVtYW5cIiwgXCJjb21wdXRlclwiKTtcclxuICAgIGxldCBjb21wdXRlciA9IG5ldyBQbGF5ZXIoXCJjb21wdXRlclwiLCBcImh1bWFuXCIpO1xyXG4gICAgbGV0IGhCb2FyZCA9IGh1bWFuLmdhbWVib2FyZC5ib2FyZDtcclxuICAgIGxldCBjQm9hcmQgPSBjb21wdXRlci5nYW1lYm9hcmQuYm9hcmQ7XHJcbiAgICBsZXQgaENhcnJpZXIgPSBuZXcgU2hpcCg1LCBcImNhcnJpZXJcIik7XHJcbiAgICBsZXQgaERlc3Ryb3llciA9IG5ldyBTaGlwKDQsIFwiZGVzdHJveWVyXCIpO1xyXG4gICAgbGV0IGhTdWJtYXJpbmUgPSBuZXcgU2hpcCgzLCBcInN1Ym1hcmluZVwiKTtcclxuICAgIGxldCBoUGF0cm9sID0gbmV3IFNoaXAoMiwgXCJwYXRyb2xcIik7XHJcbiAgICBsZXQgY0NhcnJpZXIgPSBuZXcgU2hpcCg1LCBcImNhcnJpZXJcIik7XHJcbiAgICBsZXQgY0Rlc3Ryb3llciA9IG5ldyBTaGlwKDQsIFwiZGVzdHJveWVyXCIpO1xyXG4gICAgbGV0IGNTdWJtYXJpbmUgPSBuZXcgU2hpcCgzLCBcInN1Ym1hcmluZVwiKTtcclxuICAgIGxldCBjUGF0cm9sID0gbmV3IFNoaXAoMiwgXCJwYXRyb2xcIik7XHJcbiAgICBjb25zdCBodW1hblNoaXBzID0gW2hDYXJyaWVyLCBoRGVzdHJveWVyLCBoU3VibWFyaW5lLCBoUGF0cm9sXTtcclxuICAgIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBbY0NhcnJpZXIsIGNEZXN0cm95ZXIsIGNTdWJtYXJpbmUsIGNQYXRyb2xdO1xyXG4gICAgLy8gYWxsU2hpcHMuZm9yRWFjaChzaGlwID0+IHtcclxuICAgIC8vICAgICBjb21wdXRlci5nYW1lYm9hcmQucmFuZG9tbHlQbGFjZVNoaXBzKHNoaXApO1xyXG4gICAgLy8gICAgIGh1bWFuLmdhbWVib2FyZC5yYW5kb21seVBsYWNlU2hpcHMoc2hpcCk7XHJcbiAgICAvLyB9KVxyXG4gICAgY29tcHV0ZXJTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICAgICAgY29tcHV0ZXIuZ2FtZWJvYXJkLnJhbmRvbWx5UGxhY2VTaGlwcyhzaGlwKTtcclxuICAgIH0pO1xyXG4gICAgaHVtYW5TaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICAgICAgaHVtYW4uZ2FtZWJvYXJkLnJhbmRvbWx5UGxhY2VTaGlwcyhzaGlwKTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaEJvYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoQm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgY29uc3QgZ3JpZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJocG9zaXRpb25cIiwgY291bnQpO1xyXG4gICAgICAgICAgICAvLyBncmlkSXRlbS50ZXh0Q29udGVudCA9IGJvYXJkW2ldW2pdXHJcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihoQm9hcmRbaV1bal0pKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkSXRlbS5jbGFzc0xpc3QuYWRkKFwic2hpcC1oZXJlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdC5hZGQoXCJncmlkLWl0ZW1cIik7XHJcbiAgICAgICAgICAgIGdyaWQxID09PSBudWxsIHx8IGdyaWQxID09PSB2b2lkIDAgPyB2b2lkIDAgOiBncmlkMS5hcHBlbmRDaGlsZChncmlkSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjQm9hcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNCb2FyZFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGdyaWRJdGVtLnNldEF0dHJpYnV0ZShcImNwb3NpdGlvblwiLCBjQm9hcmRbaV1bal0pO1xyXG4gICAgICAgICAgICAvLyBncmlkSXRlbS50ZXh0Q29udGVudCA9IGJvYXJkW2ldW2pdXHJcbiAgICAgICAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdC5hZGQoXCJncmlkLWl0ZW1cIik7XHJcbiAgICAgICAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdC5hZGQoXCJhaS1ncmlkXCIpO1xyXG4gICAgICAgICAgICBncmlkSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyaWRJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICBodW1hbi5nYW1lYm9hcmQuaXNPdmVyKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlci5nYW1lYm9hcmQuaXNPdmVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoY0JvYXJkW2ldW2pdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzU3VuayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyLmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKGksIGopO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyLmdhbWVib2FyZC5wbGFjZWRTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwLm5hbWUgPT09IGNCb2FyZFtpXVtqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTdW5rID0gc2hpcC5zdW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU3Vuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdW5rZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bmtlbi50ZXh0Q29udGVudCA9IGNCb2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vua2VuMiA9PT0gbnVsbCB8fCBzdW5rZW4yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdW5rZW4yLmFwcGVuZENoaWxkKHN1bmtlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wdXRlci5nYW1lYm9hcmQuaXNPdmVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbm5lci50ZXh0Q29udGVudCA9IFwiV2lubmVyOiBcIiArIHBsYXllck5hbWUgKyBcIiFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob1dvbiA9PT0gbnVsbCB8fCB3aG9Xb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdob1dvbi5hcHBlbmRDaGlsZCh3aW5uZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvV29uID09PSBudWxsIHx8IHdob1dvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2hvV29uLmFwcGVuZENoaWxkKHJlc3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEl0ZW0uY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGNvbXB1dGVyLnJhbmRvbUF0dGFjayhodW1hbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2hwb3NpdGlvbj1cIiR7cG9zaXRpb259XCJdYCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gaHVtYW4uZ2FtZWJvYXJkLmNvbnZlcnRQb3NpdGlvbih0ZW1wKTtcclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSBodW1hbi5nYW1lYm9hcmQuZ2V0Um93KG5ld1Bvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBodW1hbi5nYW1lYm9hcmQuZ2V0Q29sKG5ld1Bvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihodW1hbi5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2xdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaXRlbS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc1N1bmsxID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaHVtYW4uZ2FtZWJvYXJkLnJlY2lldmVBdHRhY2soaSwgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgaHVtYW4uZ2FtZWJvYXJkLnBsYWNlZFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXAubmFtZSA9PT0gaEJvYXJkW3Jvd11bY29sXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTdW5rMSA9IHNoaXAuc3VuaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1N1bmsxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bmtlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vua2VuLnRleHRDb250ZW50ID0gaEJvYXJkW3Jvd11bY29sXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vua2VuMSA9PT0gbnVsbCB8fCBzdW5rZW4xID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdW5rZW4xLmFwcGVuZENoaWxkKHN1bmtlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodW1hbi5nYW1lYm9hcmQuaXNPdmVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbm5lci50ZXh0Q29udGVudCA9IFwiV2lubmVyOiBDb21wdXRlciFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob1dvbiA9PT0gbnVsbCB8fCB3aG9Xb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdob1dvbi5hcHBlbmRDaGlsZCh3aW5uZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvV29uID09PSBudWxsIHx8IHdob1dvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2hvV29uLmFwcGVuZENoaWxkKHJlc3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZ3JpZDIgPT09IG51bGwgfHwgZ3JpZDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdyaWQyLmFwcGVuZENoaWxkKGdyaWRJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHJlbmRlckdyaWRzIGZyb20gXCIuL3JlbmRlckdhbWVCb2FyZHNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJyk7XHJcbiAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImlucHV0LWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIkVudGVyIE5hbWU6XCI7XHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ25hbWUtaW5wdXQnKTtcclxuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3RhcnQtYnV0dG9uXCIpO1xyXG4gICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN0YXJ0XCI7XHJcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcclxuICAgIGluZm8gPT09IG51bGwgfHwgaW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5mby5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcik7XHJcbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAobmFtZUlucHV0LnZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICBpbmZvID09PSBudWxsIHx8IGluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGluZm8ucmVtb3ZlQ2hpbGQoaW5wdXRDb250YWluZXIpO1xyXG4gICAgICAgICAgICByZW5kZXJHcmlkcyhuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBcIlRvIGxhenkgdG8gZW50ZXIgYSBuYW1lXCI7XHJcbiAgICAgICAgICAgIGluZm8gPT09IG51bGwgfHwgaW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5mby5yZW1vdmVDaGlsZChpbnB1dENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHJlbmRlckdyaWRzKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4vdWkvc3RhcnRHYW1lXCI7XHJcbnN0YXJ0R2FtZSgpO1xyXG4vLyByZW5kZXJHcmlkcygnampjcmF6eW1hbicpXHJcbiJdLCJuYW1lcyI6WyJHYW1lQm9hcmQiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJib2FyZCIsImNyZWF0ZUJvYXJkIiwiaGl0cyIsIm1pc3NlcyIsInBsYWNlZFNoaXBzIiwiZ2FtZU92ZXIiLCJzdW5rU2hpcHMiLCJjb3VudCIsImkiLCJqIiwicGxhY2VTaGlwIiwic2hpcCIsInN0YXJ0IiwidmVydGljYWwiLCJ2YWxpZFBsYWNlbWVudCIsImxlbmd0aCIsImluY2x1ZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwibmFtZSIsInB1c2giLCJyZWNpZXZlQXR0YWNrIiwicm93IiwiY29sdW1uIiwicG9zaXRpb24iLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJmb3JFYWNoIiwiaGl0IiwiaXNTdW5rIiwiaXNPdmVyIiwiaXNWZXJ0aWNhbCIsIm5ld1Bvc2l0aW9uIiwiY29udmVydFBvc2l0aW9uIiwiZ2V0Um93IiwiZ2V0Q29sIiwicmFuZG9tbHlQbGFjZVNoaXBzIiwiZGlyZWN0aW9uIiwidmFsaWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdHIiLCJ0b1N0cmluZyIsInBhcnNlSW50Iiwic2xpY2UiLCJQbGF5ZXIiLCJvcG9uZW50IiwiZ2FtZWJvYXJkIiwic2hvdHMiLCJhdHRhY2siLCJjb2wiLCJyYW5kb21BdHRhY2siLCJvcHBvbmVudCIsInZhbGlkU2hvdCIsImNvbnNvbGUiLCJsb2ciLCJTaGlwIiwiaXNIaXQiLCJzdW5rIiwicmVuZGVyR3JpZHMiLCJwbGF5ZXJOYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5mbyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm1haW4iLCJncmlkMSIsInRleHRDb250ZW50Iiwic3Vua2VuMSIsImdyaWQyIiwic3Vua2VuMiIsIndob1dvbiIsInJlc3RhcnQiLCJjcmVhdGVFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsImh1bWFuIiwiY29tcHV0ZXIiLCJoQm9hcmQiLCJjQm9hcmQiLCJodW1hblNoaXBzIiwiZ3JpZEl0ZW0iLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImNvbnRhaW5zIiwic3Vua2VuIiwid2lubmVyIiwiaXRlbSIsInRlbXAiLCJpc1N1bmsxIiwiaW5wdXRDb250YWluZXIiLCJuYW1lTGFiZWwiLCJuYW1lSW5wdXQiLCJzdGFydEJ1dHRvbiIsInZhbHVlIiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9