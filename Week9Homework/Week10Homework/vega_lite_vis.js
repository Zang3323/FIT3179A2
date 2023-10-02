var map = "birth_rate_of_world_map.vg.json";
vegaEmbed('#worldmapbirthrate', map).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var donut = "gender_donut_chart.vg.json";
vegaEmbed('#genderdonutchart', donut).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var lifeex = "life_expectancy_chart.vg.json";
vegaEmbed('#lifechart', lifeex).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var oldyoung = "old_to_young_comparison.vg.json";
vegaEmbed('#oldyoung', oldyoung).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);