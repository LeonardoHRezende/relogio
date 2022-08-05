import axios from "axios";

const simulacao = async (req, res) => {

  try {

    const { method, query, body } = req;
    
    const cidade = body.cidade ? body.cidade : null
    
    switch (method) {
      case 'POST':

        var config = {
          method: 'post',
          url: `https://nominatim.openstreetmap.org/search/?city=sao%20paulo&format=json`
        };

        const retorno_analise = await axios(config)

          .then(function (response) {
              var obj_retorno = {
              message: response.data ? response.data : null,
              status: response.status ? response.status : null
            }
            return obj_retorno;
          })
          .catch(function (error) {

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