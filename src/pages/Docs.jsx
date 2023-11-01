import React from 'react'
import { HomeIcon } from '@heroicons/react/24/outline'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

function Docs() {
  return (
    <div className='shadow-md w-full'>
        <div className='md:px-10 py-4 px-7'>
          <div className='flex text-2xl cursor-pointer items-center gap-5'>
            <HomeIcon className='w-7 h-7 text-black-600'/>
            <a href="/">
            <span className='text-black-600 hover:text-blue-700 hover:bg-gray-200 rounded-lg'>Home</span>
            </a>
            <div className='flex text-2xl cursor-pointer items-center gap-5'>
            <DocumentTextIcon className='w-7 h-7 text-black-600'/>
            <a href="/docs">
            <span className='text-black-600 hover:text-blue-700 hover:bg-gray-200 rounded-lg'>Documentation</span>
            </a>
          </div>
          </div>
        </div>
        <div className='pt-12'>
      <div className='flex-none shadow-2xl md:mx-40 p-5 rounded-xl'>
        <span className='text-xl text-black-600'>
        <center className='mb-20 text-5xl'>Térinformatika II. Projekt</center>
        <div className='break-after-column text-2xl mb-8'>Ez az interaktív webtérkép Leaflet alkalmazásával lett fejlesztve React és Vite segítségével, 
        Visual Studio Code fejlesztői környezetben. Az általam választott település Kisvárda, mivel itt nőttem fel, illetve itt végeztem tanulmányaimat az egyetem előtt. 
        Az oldalon található navigációs sávban található Home és Documentation mellett egy Error nevezetű oldal is implementálva lett, így jelezve a felhasználónak, hogy hibás URL-t gépelt be.
        A koordinátákat a <a href='https://geojson.io/' target="_blank" className='hover:text-blue-700 hover:underline cursor-pointer italic'>geojson.io</a> oldal segítségével kaptam meg, így pontosan lehetett meghatározni a város különféle helyeit. Formázáshoz a <a href='https://tailwindcss.com/' target="_blank" className='hover:text-blue-700 hover:underline cursor-pointer italic'>tailwindcss</a> oldal dokumentációját használtam, ezáltal egy letisztultabb kinézetű projektet hoztam létre.
        Az interaktív webtérkép számos nevezetes kisvárdai helyszínt mutat meg UI és Vector Layerek 
        (<span className='italic'>Marker, Polygon, Polyline, Circle, Rectangle, etc.</span>) segítségével, amelyek a <a href="https://leafletjs.com/reference.html" target="_blank" className='hover:text-blue-700 hover:underline cursor-pointer italic'>Leaflet</a> dokumentációjában megtalálhatóak. 
        </div>
        <div>Készítette: Berencsi Csaba</div>
        <div>Neptun kód: YKS33Y</div>
        <div className='mt-6'>Utolsó módosítás: 2023.11.01.</div>
        </span>
      </div>
      </div>
      </div>
  )
}

export default Docs