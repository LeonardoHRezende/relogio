import axios from "axios";

const simulacao = async (req, res) => {

  try {

    const { method, query, body } = req;

    switch (method) {
      case 'POST':

        var config = {
          method: 'post',
          url: 'https://api.openweathermap.org/data/2.5/onecall?lat=-22.978889&lon=-49.87056&exclude=hourly,minutely&lang=pt_br&appid=e8e4da9dfdcba0f7a2447f2028d333e1&units=metric'
        };

        const retorno_analise = await axios(config)

          .then(function (response) {
            console.log(response.data )
              var obj_retorno = {
              message: response.data ? response.data : null,
              status: response.status ? response.status : null
            }
            return obj_retorno;
          })
          .catch(function (error) {
            console.log(error.response.data)
            var obj_retorno = {
              message: error.response.data ? error.response.data : null,
              status: error.response.status ? error.response.status : null
            }
            return obj_retorno;
          });
        res.status(200).json(retorno_analise);
        break;

      default:
        res.status(405).json({ response: 'Metodo não suportado!' });
    }

  }
  catch {
    res.status(500).json({ response: 'Error!' });
  }

}

export default simulacao;