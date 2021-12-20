$(document).ready(function(){

$("form").submit(function(e){

    e.preventDefault()

    let valueInput = $("#pokemon_input").val();

    $.ajax({

        url: "https://pokeapi.co/api/v2/pokemon/" + valueInput,
        success: function(data) {

         let nombre = data.name;
         let imagen = data.sprites.front_default;
         let peso = data.weight;
        
          
         $('#pokeInfo').html(`
         
         <div class="text-center pb-5">
                <h3> ${nombre} </h3>
                <img src= ${imagen} />
                <h4>Peso: ${peso} </h4>
        </div>
         `)

         let estadisticas = []

data.stats.forEach(function(s){
    estadisticas.push({
        label: s.stat.name,
        y: s.base_stat,
    })
})

let config = {

animationEnabled : true,
title: {

    text: "Estadísticas"
},
axisY: {
    title: "Valor"
},

data:[{

    type:"column",
    dataPoints: estadisticas
}],


}
 let chart = new CanvasJS.Chart("pokeStats", config);
 
 chart.render();


        }
    })
})

})

