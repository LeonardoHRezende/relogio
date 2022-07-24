import Image from 'next/image'

import { useEffect, useState } from 'react'

import axios from "axios";


import LightCloud from '../assets/img/LightCloud.png'
import HeavyRain from '../assets/img/HeavyRain.png'
import Clear from '../assets/img/Clear.png'
import Shower from '../assets/img/Shower.png'
import ThunderStorm from '../assets/img/ThunderStorm.png'
import HeavyCloud from '../assets/img/HeavyCloud.png'

export default function Home() {

  const [hora, setHora] = useState('00')
  const [minuto, setMinuto] = useState('00')
  const [segundos, setSegundos] = useState('00')

  const [temp, setTemp] = useState(0);
  const [dayOne, setDayOne] = useState('');
  const [dayTwo, setDayTwo] = useState('');
  const [dayThree, setDayThree] = useState('');
  const [dayFour, setDayFour] = useState('');
  const [dayFive, setDayFive] = useState('');
  const [daySix, setDaySix] = useState('');

  let unix_timestamp = dayOne.dt
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(unix_timestamp * 1000);




  function mudaHoras() {

    var date = new Date()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()

    hours == 0 ? hours == '00' : null
    hours < 9 && hours >= 1 ? minutes = '0' + minutes : null

    minutes == 0 ? minutes == '00' : null
    minutes < 9 && minutes >= 1 ? minutes = '0' + minutes : null

    seconds == 0 ? seconds == '00' : null
    seconds < 9 && seconds >= 1 ? seconds = '0' + seconds : null

    hours != hora ? setHora(hours) : null
    minutes != minuto ? setMinuto(minutes) : null
    seconds != segundos ? setSegundos(seconds) : null

  }

  useEffect(() => {
    consultarClima()
    setInterval(() => {
      mudaHoras()
    }, 1000)
  }, []);

  function consultarClima() {

    var data = {
      lon: -46.6388,
      lat: -23.5489,
    }

    var config = {
      method: 'post',
      url: '/api/consulta-clima',
      data: data
    };

    axios(config)

      .then(function (response) {

        var status = response.data.status ? response.data.status : null
        var data = response.data.message ? response.data.message : null

        console.log(data)
        if (status == 200 && data) {
          var temp = Math.round(data.current.temp)
          var daily = data.daily
          
          setTemp(temp)
          setDayOne(daily[0])
          setDayTwo(daily[1])
          setDayThree(daily[2])
          setDayFour(daily[3])
          setDayFive(daily[4])
          setDaySix(daily[5])

        }
        else {

        }

      })

      .catch(function (error) {

      });

  }
  return (
    <>
      <section className="bg">
        <div className="container">

          <div className="row padding-20">

            <div className="row">
              <p className="text-white text-center"> São Paulo, SP, Brasil</p>
            </div>

            {/* Clima */}
            <div className="clima">

              <div className="row">

                <div className="col-2">
                  <div className="card principal text-bg-light mb-3 py-5 text-center">
                    <div className="card-body">
                      <Image src={LightCloud} width={80} height={80}></Image>
                      <p className="card-text">{temp}ºc</p>
                    </div>
                  </div>
                </div>

                <div className="col-10">
                  <div className="row">

                    <div className="col">
                      <div className="card secundario text-center text-bg-light">
                        <div className="card-body">
                        <Image src={HeavyRain} width={60} height={60}></Image>
                          <p className="card-text">{temp}ºc</p>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="card secundario text-center text-bg-light">
                        <div className="card-body">
                        <Image src={Clear} width={60} height={60}></Image>
                          <p className="card-text">{temp}ºc</p>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="card secundario text-center text-bg-light">
                        <div className="card-body">
                        <Image src={Shower} width={60} height={60}></Image>
                          <p className="card-text">{temp}ºc</p>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="card secundario text-center text-bg-light">
                        <div className="card-body">
                        <Image src={ThunderStorm} width={60} height={60}></Image>
                          <p className="card-text">{temp}ºc</p>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="card secundario text-center text-bg-light">
                        <div className="card-body">
                        <Image src={HeavyCloud} width={60} height={50}></Image>
                          <p className="card-text">{temp}ºc</p>
                        </div>
                      </div>
                    </div>
                    {/* Horas */}
                    <div className="row justify-content-center horas ms-2 mt-5">

                      <div className="col-4">
                        <div className="card text-bg-light text-center mb-3">
                          <div className="card-body">
                            <p className="card-text">{hora}</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="card text-bg-light text-center mb-3">
                          <div className="card-body">
                            <p className="card-text">{minuto}</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="card text-bg-light text-center mb-3">
                          <div className="card-body">
                            <p className="card-text">{segundos}</p>
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
