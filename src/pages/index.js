import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'

export default function Home() {

  const [hora, setHora] = useState('00')
  const [minuto, setMinuto] = useState('00')
  const [segundos, setSegundos] = useState('00')

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

    console.log(hours, minutes, seconds)
  }

  useEffect(() => {
    setInterval(() => {
      mudaHoras()
    }, 1000)
  }, []);

  return (
    <>
      <section className="bg">
        <div className="container">
          <div className="d-flex flex-row gap-1">

            <div className="col-4">
              <div className="card text-bg-light mb-3">
                <div className="card-body">
                  <p className="card-text">{hora}</p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card text-bg-light mb-3">
                <div className="card-body">
                  <p className="card-text">{minuto}</p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card text-bg-light mb-3">
                <div className="card-body">
                  <p className="card-text">{segundos}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>

  )
}
