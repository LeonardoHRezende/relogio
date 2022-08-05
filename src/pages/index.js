import Image from 'next/image'

import { useEffect, useState } from 'react'

import { BiMap } from "react-icons/bi";

import axios from "axios";

import LightCloud from '../assets/img/Sun.png'
import HeavyRain from '../assets/img/Raining.png'
import Clouds from '../assets/img/clouds.png'
import ThunderStorm from '../assets/img/Storm.png'
import MoonLight from '../assets/img/Moon.png'
import MoonRain from '../assets/img/MoonRain.png'
import SunRain from '../assets/img/SunRain.png'

function Home({ dados }) {

  const response = dados ? dados : null
  const [data, setData] = useState(response);

  const [hora, setHora] = useState('00')
  const [minuto, setMinuto] = useState('00')
  const [segundos, setSegundos] = useState('00')

  var tempt = Math.round(data.current.temp)

  var daily = data.daily ? data.daily : []

  var unix_timestamp = daily[0].dt
  var date = new Date(unix_timestamp * 1000);
  var weekDay = parseInt(date.getDay());
  var diaSemana = ''
  weekDay == 1 ? diaSemana = 'Segunda-Feira' :
    weekDay == 2 ? diaSemana = 'Terça-feira' :
      weekDay == 3 ? diaSemana = 'Quarta-feira' :
        weekDay == 4 ? diaSemana = 'Quinta-feira' :
          weekDay == 5 ? diaSemana = 'Sexta-feira' :
            weekDay == 6 ? diaSemana = 'Sábado' :
              weekDay == 0 ? diaSemana = 'Domingo' : null;

  daily[0].dayOneWeekly = diaSemana
  const [dayOne, setDayOne] = useState(daily[0]);
  var dayOneImage = ''

  if (dayOne.weather[0].main == 'Clouds' && hora >= 5) {
    var dayOneImage = Clouds

  }
  else if (dayOne.weather[0].main == 'Clouds' && hora >= 18) {
     dayOneImage = Clouds
  }
  else if (dayOne.weather[0].id == 521 && hora >= 5) {
     dayOneImage = HeavyRain
  }
  else if (dayOne.weather[0].id == 521 && hora >= 18) {
     dayOneImage = HeavyRain
  }
  else if (dayOne.weather[0].main == 'Rain' && hora >= 5) {
     dayOneImage = SunRain
  }
  else if (dayOne.weather[0].main == 'Rain' && hora >= 18) {
     dayOneImage = MoonRain
  }
  else if (dayOne.weather[0].main == 'Thunderstorm' && hora >= 5) {
     dayOneImage = ThunderStorm
  }
  else if (dayOne.weather[0].main == 'Thunderstorm' && hora >= 18) {
     dayOneImage = ThunderStorm
  }
  else if (dayOne.weather[0].main == 'Clear' && hora >= 5) {
     dayOneImage = LightCloud
  }
  else if (dayOne.weather[0].main == 'Clear' && hora >= 18) {
     dayOneImage = MoonLight
  }
  else {

  }

  var unix_timestamp = daily[1].dt
  var date = new Date(unix_timestamp * 1000);
  var weekDay = parseInt(date.getDay());
  var diaSemana = ''
  weekDay == 1 ? diaSemana = 'Segunda-Feira' :
    weekDay == 2 ? diaSemana = 'Terça-feira' :
      weekDay == 3 ? diaSemana = 'Quarta-feira' :
        weekDay == 4 ? diaSemana = 'Quinta-feira' :
          weekDay == 5 ? diaSemana = 'Sexta-feira' :
            weekDay == 6 ? diaSemana = 'Sábado' :
              weekDay == 0 ? diaSemana = 'Domingo' : null;
  daily[1].dayTwoWeekly = diaSemana
  const [dayTwo, setDayTwo] = useState(daily[1]);
  var dayTwoImage = ''

  if (dayTwo.weather[0].main == 'Clouds' && hora >= 5) {
    var dayTwoImage = Clouds

  }
  else if (dayTwo.weather[0].main == 'Clouds' && hora >= 18) {
     dayTwoImage = Clouds
  }
  else if (dayTwo.weather[0].id == 521 && hora >= 5) {
     dayTwoImage = HeavyRain
  }
  else if (dayTwo.weather[0].id == 521 && hora >= 18) {
     dayTwoImage = HeavyRain
  }
  else if (dayTwo.weather[0].main == 'Rain' && hora >= 5) {
     dayTwoImage = SunRain
  }
  else if (dayTwo.weather[0].main == 'Rain' && hora >= 18) {
     dayTwoImage = MoonRain
  }
  else if (dayTwo.weather[0].main == 'Thunderstorm' && hora >= 5) {
     dayTwoImage = ThunderStorm
  }
  else if (dayTwo.weather[0].main == 'Thunderstorm' && hora >= 18) {
     dayTwoImage = ThunderStorm
  }
  else if (dayTwo.weather[0].main == 'Clear' && hora >= 5) {
     dayTwoImage = LightCloud 
  }
  else if (dayTwo.weather[0].main == 'Clear' && hora >= 18) {
     dayTwoImage = MoonLight
  }
  else {

  }

  var unix_timestamp = daily[2].dt
  var date = new Date(unix_timestamp * 1000);
  var weekDay = parseInt(date.getDay());
  var diaSemana = ''
  weekDay == 1 ? diaSemana = 'Segunda-Feira' :
    weekDay == 2 ? diaSemana = 'Terça-feira' :
      weekDay == 3 ? diaSemana = 'Quarta-feira' :
        weekDay == 4 ? diaSemana = 'Quinta-feira' :
          weekDay == 5 ? diaSemana = 'Sexta-feira' :
            weekDay == 6 ? diaSemana = 'Sábado' :
              weekDay == 0 ? diaSemana = 'Domingo' : null;
  daily[2].dayThreeWeekly = diaSemana
  const [dayThree, setDayThree] = useState(daily[2]);
  var dayThreeImage = ''

  if (dayThree.weather[0].main == 'Clouds' && hora >= 5) {
    var dayThreeImage = Clouds

  }
  else if (dayThree.weather[0].main == 'Clouds' && hora >= 18) {
     dayThreeImage = Clouds
  }
  else if (dayThree.weather[0].id == 521 && hora >= 5) {
     dayThreeImage = HeavyRain
  }
  else if (dayThree.weather[0].id == 521 && hora >= 18) {
     dayThreeImage = HeavyRain
  }
  else if (dayThree.weather[0].main == 'Rain' && hora >= 5) {
     dayThreeImage = SunRain
  }
  else if (dayThree.weather[0].main == 'Rain' && hora >= 18) {
     dayThreeImage = MoonRain
  }
  else if (dayThree.weather[0].main == 'Thunderstorm' && hora >= 5) {
     dayThreeImage = ThunderStorm
  }
  else if (dayThree.weather[0].main == 'Thunderstorm' && hora >= 18) {
     dayThreeImage = ThunderStorm
  }
  else if (dayThree.weather[0].main == 'Clear' && hora >= 5) {
     dayThreeImage = LightCloud 
  }
  else if (dayThree.weather[0].main == 'Clear' && hora >= 18) {
     dayThreeImage = MoonLight
  }
  else {

  }

  var unix_timestamp = daily[3].dt
  var date = new Date(unix_timestamp * 1000);
  var weekDay = parseInt(date.getDay());
  var diaSemana = ''
  weekDay == 1 ? diaSemana = 'Segunda-Feira' :
    weekDay == 2 ? diaSemana = 'Terça-feira' :
      weekDay == 3 ? diaSemana = 'Quarta-feira' :
        weekDay == 4 ? diaSemana = 'Quinta-feira' :
          weekDay == 5 ? diaSemana = 'Sexta-feira' :
            weekDay == 6 ? diaSemana = 'Sábado' :
              weekDay == 0 ? diaSemana = 'Domingo' : null;
  daily[3].dayFourWeekly = diaSemana
  const [dayFour, setDayFour] = useState(daily[3]);
  var dayFourImage = ''

  if (dayFour.weather[0].main == 'Clouds' && hora >= 5) {
    var dayFourImage = Clouds

  }
  else if (dayFour.weather[0].main == 'Clouds' && hora >= 18) {
     dayFourImage = Clouds
  }
  else if (dayFour.weather[0].id == 521 && hora >= 5) {
     dayFourImage = Clouds
  }
  else if (dayFour.weather[0].id == 521 && hora >= 18) {
     dayFourImage = Clouds
  }
  else if (dayFour.weather[0].main == 'Rain' && hora >= 5) {
     dayFourImage = Clouds
  }
  else if (dayFour.weather[0].main == 'Rain' && hora >= 18) {
     dayFourImage = Clouds
  }
  else if (dayFour.weather[0].main == 'Thunderstorm' && hora >= 5) {
     dayFourImage = Clouds
  }
  else if (dayFour.weather[0].main == 'Thunderstorm' && hora >= 18) {
     dayFourImage = Clouds
  }
  else if (dayFour.weather[0].main == 'Clear' && hora >= 5) {
     dayFourImage = Clouds
  }
  else if (dayFour.weather[0].main == 'Clear' && hora >= 18) {
     dayFourImage = Clouds
  }
  else {

  }

  var unix_timestamp = daily[4].dt
  var date = new Date(unix_timestamp * 1000);
  var weekDay = parseInt(date.getDay());
  var diaSemana = ''
  weekDay == 1 ? diaSemana = 'Segunda-Feira' :
    weekDay == 2 ? diaSemana = 'Terça-feira' :
      weekDay == 3 ? diaSemana = 'Quarta-feira' :
        weekDay == 4 ? diaSemana = 'Quinta-feira' :
          weekDay == 5 ? diaSemana = 'Sexta-feira' :
            weekDay == 6 ? diaSemana = 'Sábado' :
              weekDay == 0 ? diaSemana = 'Domingo' : null;
  daily[4].dayFiveWeekly = diaSemana
  const [dayFive, setDayFive] = useState(daily[4]);
  var dayFiveImage = ''

  if (dayFive.weather[0].main == 'Clouds' && hora >= 5) {
    var dayFiveImage = Clouds

  }
  else if (dayFive.weather[0].main == 'Clouds' && hora >= 18) {
     dayFiveImage = Clouds
  }
  else if (dayFive.weather[0].id == 521 && hora >= 5) {
     dayFiveImage = Clouds
  }
  else if (dayFive.weather[0].id == 521 && hora >= 18) {
     dayFiveImage = Clouds
  }
  else if (dayFive.weather[0].main == 'Rain' && hora >= 5) {
     dayFiveImage = Clouds
  }
  else if (dayFive.weather[0].main == 'Rain' && hora >= 18) {
     dayFiveImage = Clouds
  }
  else if (dayFive.weather[0].main == 'Thunderstorm' && hora >= 5) {
     dayFiveImage = Clouds
  }
  else if (dayFive.weather[0].main == 'Thunderstorm' && hora >= 18) {
     dayFiveImage = Clouds
  }
  else if (dayFive.weather[0].main == 'Clear' && hora >= 5) {
     dayFiveImage = Clouds
  }
  else if (dayFive.weather[0].main == 'Clear' && hora >= 18) {
     dayFiveImage = Clouds
  }
  else {

  }

  var unix_timestamp = daily[5].dt
  var date = new Date(unix_timestamp * 1000);
  var weekDay = parseInt(date.getDay());
  var diaSemana = ''
  weekDay == 1 ? diaSemana = 'Segunda-Feira' :
    weekDay == 2 ? diaSemana = 'Terça-feira' :
      weekDay == 3 ? diaSemana = 'Quarta-feira' :
        weekDay == 4 ? diaSemana = 'Quinta-feira' :
          weekDay == 5 ? diaSemana = 'Sexta-feira' :
            weekDay == 6 ? diaSemana = 'Sábado' :
              weekDay == 0 ? diaSemana = 'Domingo' : null;
  daily[5].daySixWeekly = diaSemana
  const [daySix, setDaySix] = useState(daily[5]);
  var daySixImage = ''

  if (daySix.weather[0].main == 'Clouds') {
    var daySixImage = Clouds
  }
  else if (daySix.weather[0].id == 521 && hora >= 5) {
     daySixImage = HeavyRain
  }
  else if (daySix.weather[0].id == 521 && hora >= 18) {
     daySixImage = HeavyRain
  }
  else if (daySix.weather[0].main == 'Rain' && hora >= 5) {
     daySixImage = SunRain
  }
  else if (daySix.weather[0].main == 'Rain' && hora >= 18) {
     daySixImage = MoonRain
  }
  else if (daySix.weather[0].main == 'Thunderstorm' && hora >= 5) {
     daySixImage = ThunderStorm
  }
  else if (daySix.weather[0].main == 'Thunderstorm' && hora >= 18) {
     daySixImage = ThunderStorm
  }
  else if (daySix.weather[0].main == 'Clear' && hora >= 5) {
     daySixImage = LightCloud
  }
  else if (daySix.weather[0].main == 'Clear' && hora >= 18) {
     daySixImage = MoonLight
  }
  else {

  }

  const [search, setSearch] = useState(null);
  const [lon, setLon] = useState(null);
  const [lat, setLat] = useState(null);

  function mudaHoras() {
    setInterval(() => {
      var date = new Date()
      var hours = date.getHours()
      var minutes = date.getMinutes()
      var seconds = date.getSeconds()

      hours == 0 ? hours == '00' : null
      hours <= 9 && hours >= 1 ? minutes = '0' + minutes : null

      minutes == 0 ? minutes == '00' : null
      minutes <= 9 && minutes >= 1 ? minutes = '0' + minutes : null

      seconds == 0 ? seconds == '00' : null
      seconds <= 9 && seconds >= 1 ? seconds = '0' + seconds : null

      hours != hora ? setHora(hours) : null
      minutes != minuto ? setMinuto(minutes) : null
      seconds != segundos ? setSegundos(seconds) : null
    }, 1000)


  }

  useEffect (()=>{
    mudaHoras()
  },[])


  function buscarCidade() {



    var data = {
      cidade: search
    }

    var config = {
      method: 'post',
      url: '/api/consulta-clima',
      data: data
    };

    // axios(config)

    //   .then(function (response) {

    //     var status = response.data.status ? response.data.status : null
    //     var data = response.data.message ? response.data.message : null

    //     if (status == 200 && data) {

    //     }
    //     else {

    //     }

    //   })

    //   .catch(function (error) {

    //   });
  }

  return (
    <>
      <section className="bg">
        <div className="container h100">

          <div className="row">

            {/* Clima */}
            <div className="clima">

              <div className="row">

                <div className="d-flex flex-row justify-content-center my-5">
                  <div className="col-3">
                    <input type="text"
                      className=""
                      name="nome"
                      value={'Texto'}
                      required
                      onChange={event => setSearch(event.target.value)} />
                  </div>

                  <div className="col-3">
                    <button className="btn btn-primary"
                      onClick={buscarCidade(search)}>
                      Buscar
                    </button>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-center my-3">
                  <BiMap className="text-white me-2" size={30}></BiMap><h2 className='fw-semibold text-center text-white fs-4'>São Paulo, Brasil</h2>
                </div>

                <div className="col-2">
                  <div className={hora >= 18 ? 'card principal text-bg-light mb-3 py-5 text-center night' : hora <= 5 ? 'card principal text-bg-light mb-3 py-5 text-center night' : 'card principal text-bg-light mb-3 py-5 text-center day'}>
                    <div className="card-body">
                      <p className="card-text text-white">{dayOne.dayOneWeekly}</p>
                      <Image src={dayOneImage ? dayOneImage : LightCloud} width={100} height={100}></Image>
                      <p className="card-text text-white">Agora: {tempt ? tempt : 0}ºc</p>
                      <div className="d-flex flex-row justify-content-center gap-2">
                        <p className="card-text text-white">Min: {Math.round(dayOne ? dayOne.temp.min : '')}ºc</p>
                        <p className="card-text text-white">Max: {Math.round(dayOne ? dayOne.temp.max : '')}ºc</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-10">
                  <div className="row">

                    <div className="col">
                      <div className={hora >= 18 ? 'card secundario text-bg-light mb-3 py-5 text-center night' : hora <= 5 ? 'card secundario text-bg-light mb-3 py-5 text-center night' : 'card secundario text-bg-light mb-3 py-5 text-center day'}>
                        <div className="card-body">
                          <p className="card-text text-white">{dayTwo.dayTwoWeekly}</p>
                          <Image src={dayTwoImage ? dayOneImage : LightCloud} width={80} height={80}></Image>
                          <div className="d-flex flex-row justify-content-center gap-2">
                            <p className="card-text text-white">Min: {Math.round(dayTwo ? dayTwo.temp.min : '')}ºc</p>
                            <p className="card-text text-white">Max :{Math.round(dayTwo ? dayOne.temp.max : '')}ºc</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className={hora >= 18 ? 'card secundario text-bg-light mb-3 py-5 text-center night' : hora <= 5 ? 'card secundario text-bg-light mb-3 py-5 text-center night' : 'card secundario text-bg-light mb-3 py-5 text-center day'}>
                        <div className="card-body">
                          <p className="card-text text-white">{dayThree.dayThreeWeekly}</p>
                          <Image src={dayThreeImage ? dayOneImage : LightCloud} width={80} height={80}></Image>
                          <div className="d-flex flex-row justify-content-center gap-2">
                            <p className="card-text text-white">Min: {Math.round(dayThree ? dayThree.temp.min : '')}ºc</p>
                            <p className="card-text text-white">Max :{Math.round(dayThree ? dayOne.temp.max : '')}ºc</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className={hora >= 18 ? 'card secundario text-bg-light mb-3 py-5 text-center night' : hora <= 5 ? 'card secundario text-bg-light mb-3 py-5 text-center night' : 'card secundario text-bg-light mb-3 py-5 text-center day'}>
                        <div className="card-body">
                          <p className="card-text text-white">{dayFour.dayFourWeekly}</p>
                          <Image src={dayFourImage ? dayOneImage : LightCloud} width={80} height={80}></Image>
                          <div className="d-flex flex-row justify-content-center gap-2">
                            <p className="card-text text-white">Min: {Math.round(dayFour ? dayFour.temp.min : '')}ºc</p>
                            <p className="card-text text-white">Max :{Math.round(dayFour ? dayOne.temp.max : '')}ºc</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className={hora >= 18 ? 'card secundario text-bg-light mb-3 py-5 text-center night' : hora <= 5 ? 'card secundario text-bg-light mb-3 py-5 text-center night' : 'card secundario text-bg-light mb-3 py-5 text-center day'}>
                        <div className="card-body">
                          <p className="card-text text-white">{dayFive.dayFiveWeekly}</p>
                          <Image src={dayFiveImage ? dayOneImage : LightCloud} width={80} height={80}></Image>
                          <div className="d-flex flex-row justify-content-center gap-2">
                            <p className="card-text text-white">Min: {Math.round(dayFive ? dayFive.temp.min : '')}ºc</p>
                            <p className="card-text text-white">Max :{Math.round(dayFive ? dayOne.temp.max : '')}ºc</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className={hora >= 18 ? 'card secundario text-bg-light mb-3 py-5 text-center night' : hora <= 5 ? 'card secundario text-bg-light mb-3 py-5 text-center night' : 'card secundario text-bg-light mb-3 py-5 text-center day'}>
                        <div className="card-body">
                          <p className="card-text text-white">{daySix.daySixWeekly}</p>
                          <Image src={daySixImage ? dayOneImage : LightCloud} width={90} height={72}></Image>
                          <div className="d-flex flex-row justify-content-center gap-2 mt-2">
                            <p className="card-text text-white">Min: {Math.round(daySix ? daySix.temp.min : '')}ºc</p>
                            <p className="card-text text-white">Max :{Math.round(daySix ? dayOne.temp.max : '')}ºc</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Horas */}
                    <div className="row justify-content-center horas ms-2 mt-5 align-items-center">

                      <div className="col-4">
                        <div className="card text-bg-light night text-center mb-3">
                          <div className="card-body">
                            <p className="card-text text-white">{hora}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-1">
                        <h1 className="fs-1 pb-3 text-center">:</h1>
                      </div>
                      <div className="col-4">
                        <div className="card text-bg-light night text-center mb-3">
                          <div className="card-body">
                            <p className="card-text text-white">{minuto}</p>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>

  )
}

export async function getServerSideProps(context) {

  var data = {
    lon: -46.6388,
    lat: -23.5489
  }

  var config = {
    method: 'post',
    url: process.env.SERVER_API + '/api/consulta-clima',
    data: data
  };

  const retorno = await axios(config)

    .then(function (response) {
      const consulta_simulacao = response && response.data.message

      return consulta_simulacao;

    })
    .catch(function (error) {
      const status = error.response && error.response.status
      const data = error.response && error.response.statusText
      const erro = {
        status: status,
        data: data,
      }
      return erro;

    })

  return {
    props: { dados: retorno },
  }

}
export default Home;