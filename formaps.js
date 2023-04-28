// const ceps = ['08255-440','08255-260','08215-550']
// const resultados = await Formaps(ceps)
// console.log(resultados);

var Formaps = async (ceps)=>{
  
    const {Client} = require("@googlemaps/google-maps-services-js");
  var Latitude = [];
  var Longitude = [];
  
  
for await (const cep of ceps) {

    const args = {
        params: {
          key: 'minhachave',
          address: cep + ' br ',
        }
      };
    const client = new Client();
  const teste = await client.geocode(args).then(gcResponse => {
    Latitude.push(gcResponse.data.results[0].geometry.location.lat)
    Longitude.push(gcResponse.data.results[0].geometry.location.lng)
    // console.log(Latitude)
  }).catch(error=>{
    Latitude.push('Erro')
    Longitude.push('Erro')
  });
  
  };
  
  return [Latitude,Longitude]

  
  }
  
   module.exports = Formaps;