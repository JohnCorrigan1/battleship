(()=>{"use strict";class t{constructor(){this.board=[],this.createBoard(),this.hits=[],this.misses=[],this.placedShips=[],this.gameOver=!1}createBoard(){let t=0;for(let e=0;e<10;e++){this.board[e]=[];for(let i=0;i<10;i++)t++,this.board[e][i]=t}}placeShip(t,e,i){if(i&&this.validPlacement(e,t.length,!0)){for(let i=0;i<t.length;i++){for(let i=0;i<this.board.length;i++)if(this.board[i].includes(e)){let s=this.board[i].indexOf(e);this.board[i][s]=t.name}e+=10}this.placedShips.push(t)}else if(!i&&this.validPlacement(e,t.length,!1)){for(let i=0;i<t.length;i++){for(let i=0;i<this.board.length;i++)if(this.board[i].includes(e)){let s=this.board[i].indexOf(e);this.board[i][s]=t.name}e+=1}this.placedShips.push(t)}}recieveAttack(t){let e,i,s=t.toString();t<11?(e=t-1,i=0):(i=parseInt(s.slice(0,1)),e=parseInt(s.slice(1,2))-1),Number.isInteger(this.board[i][e])?this.misses.push(t):(this.hits.push(t),this.placedShips.forEach((s=>{if(s.name===this.board[i][e])return s.hit(t),void s.isSunk()})))}isOver(){for(let t=0;t<this.placedShips.length;t++)if(this.placedShips[t].sunk=!1)return!1;return!0}validPlacement(t,e,i){let s,r,o=t.toString();return t<11?(s=t-1,r=0):(r=parseInt(o.slice(0,1)),s=parseInt(o.slice(1,2))-1),!!(i&&r+e-1<10)||!i&&s+e-1<10}randomlyPlaceShips(t){let e=!1;for(;!e;){let i,s=Math.floor(100*Math.random())+1;if(i=Math.random()<.5,this.validPlacement(s,t.length,i))return this.placeShip(t,s,i),void(e=!0)}}}class e{constructor(e,i){this.gameboard=new t,this.name=e,this.shots=[],this.oponent=i}attack(t,e){this.shots.includes(t)||(this.shots.push(t),e.gameboard.recieveAttack(t),e.gameboard.isOver())}randomAttack(t){let e,i=!1;for(;!i;)e=Math.floor(100*Math.random())+1,this.shots.includes(e)||(console.log(e),this.shots.push(e),t.gameboard.recieveAttack(e),i=!0)}}!function(t){document.querySelector("body");const i=document.querySelector(".grid-container1");document.querySelector(".tile-1"),document.querySelector(".title-1").textContent="jjcrazyman";const s=document.querySelector(".grid-container2");document.querySelector(".title-2"),document.querySelector(".title-2").textContent="Computer";let r=new e("human","computer"),o=(new e("computer","human"),r.gameboard.board);for(let t=0;t<o.length;t++)for(let e=0;e<o[t].length;e++){const s=document.createElement("div");s.setAttribute("position",o[t][e]),s.classList.add("grid-item"),null==i||i.appendChild(s)}for(let t=0;t<o.length;t++)for(let e=0;e<o[t].length;e++){const i=document.createElement("div");i.setAttribute("position",o[t][e]),i.classList.add("grid-item"),null==s||s.appendChild(i)}}()})();