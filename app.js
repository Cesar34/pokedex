//iniciamos la funcion a dar click al boton
function inicio(x) {

     const xhr = new XMLHttpRequest();
	//abrimos la conexion
     xhr.open('GET', 'pokedex.json', true);

     xhr.onload = function() {
     	//estado donde todo esta bien 
          if(this.status === 200) {
                  const pokes =  JSON.parse( this.responseText );
                    
                  let htmlTemplate = '';                   

                   //selection de tipo de pokemon 
                   pokes.types.forEach(function(pokemon) {
                    htmlTemplate += `                           
                      <option value="${pokemon.id}">${pokemon.name}</option>
                    `;
              })
              document.getElementById('fil_tipo').innerHTML = htmlTemplate;
               tipo(x);
                  
          }
     }
     xhr.send();
}

function myFunction(){
     var x = document.getElementById("fil_tipo");
     var i = x.selectedIndex;
     tipo(x.options[i].value);
}

function tipo(x) {

     const xhr = new XMLHttpRequest();
	//abrimos la conexion
     xhr.open('GET', 'pokedex.json', true);

     xhr.onload = function() {
     	//estado donde todo esta bien 
          if(this.status === 200) {
                  const pokes =  JSON.parse( this.responseText );
                    
                    let htmlTemplate = '';
                   //Llenamos la tabla con los imagenes de los pokemon 
                   pokes.pokemons.forEach(function(pokemon) {
                         if( x == pokemon.type[0] || x == pokemon.type[1]){
                              htmlTemplate += `
                              <div class="pokemon" onclick="PokInformacion(${pokemon.id})">
                                   <h1>CP ${pokemon.cp}</h1>
                                   <br>
                                   <img src="${pokemon.sprite}" class="imgPok" >
                                   <br>
                                   <p>${pokemon.name}</p>
                                   <div style="background-color: green; height: 5px;"></div>
                              </div>
                              `;
                         }
                         else
                         if(x == 0){
                              htmlTemplate += `
                              <div class="pokemon" onclick="PokInformacion(${pokemon.id})">
                                   <h1>CP ${pokemon.cp}</h1>
                                   <br>
                                   <img src="${pokemon.sprite}" class="imgPok" >
                                   <br>
                                   <p>${pokemon.name}</p>
                                   <div style="background-color: green; height: 5px;"></div>
                              </div>
                              `;
                         }
                   })
                   document.getElementById('tipos').innerHTML = htmlTemplate;
                     
          }
     }

     xhr.send();
}

function PokInformacion(x){
     
     const xhr = new XMLHttpRequest();
	//abrimos la conexion
     xhr.open('GET', 'pokedex.json', true);

     xhr.onload = function() {
     	//estado donde todo esta bien 
          if(this.status === 200) {

               const pokes =  JSON.parse( this.responseText );
               var tipo1 = pokes.pokemons[x-1].type[0]
               var tipo2 = pokes.pokemons[x-1].type[1]
               
               let htmlTemplate = '';
               pokes.pokemons.forEach(function(pokemon) {
                    if( x == pokemon.id){
                         htmlTemplate += `
                         <div class="cont_inf">
                              <p style="font-size: 40px; top: -90px; left: -90px;">CP${pokemon.cp}</p>
                              <br>
                              <img src="${pokemon.sprite}">
                              <br>
                              <p style="font-size: 40px; top: -500px; left: -100px;">${pokemon.name}</p>
                              <p style="font-size: 15px; top: -530px; left: -50px;">${pokemon.hp}/${pokemon.hp}hp</p>
                              `;
                              if(pokemon.type.length == 1){ 
                                   htmlTemplate += `<button style="background-color: ${pokes.types[tipo1].color}; top: -750px; left: -100px;">${pokes.types[tipo1].name}</button>`;
                                   htmlTemplate += `<p style="font-size: 15px; top: -810px; left: -100px;">Attack${pokemon.attack}/Defense${pokemon.defense}</p>`;
                              }else if(pokemon.type.length == 2){
                                   htmlTemplate += `<button style="background-color: ${pokes.types[tipo1].color}; top: -750px; left: -100px;">${pokes.types[tipo1].name}</button>`;
                                   htmlTemplate += `<button style="background-color: ${pokes.types[tipo2].color}; top: -1044px; left: -20px;">${pokes.types[tipo2].name}</button>`;
                                   htmlTemplate += `<p style="font-size: 15px; top: -1100px; left: -100px;">Attack${pokemon.attack}/Defense${pokemon.defense}</p>`;
                              }
                              `</div>`
                    }
              })
               document.getElementById('Informacion').innerHTML = htmlTemplate; 

          }
     }

     xhr.send();
}
