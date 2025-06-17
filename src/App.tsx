import { useState } from 'react';
import ClickeableLogo from './components/ClickeableLogo';
import AreaInfo from './components/AreaInfo';
import {
  frontInfo,
  mobileInfo,
  scriptingInfo,
  microInfo,
  iotInfo,
} from './utils/constants';

type workArea = 'front' | 'ui' | 'scripting' | 'microcontrollers' | 'iot';
const App = () => {
  const [currentStack, setCurrentStack] = useState<null | workArea>(null);

  const toggleStack = (stack: workArea) => {
    if (currentStack !== stack) {
      setCurrentStack(stack);
    } else {
      setCurrentStack(null);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-100 via-green-100 to-gray-100'>
      <main className='container mx-auto px-2 pt-1'>
        <h1 className='mt-8 bg-gradient-to-r from-blue-700 via-green-600 to-teal-500 bg-clip-text text-center text-5xl font-extrabold text-transparent drop-shadow-lg md:text-7xl lg:mr-3 lg:inline-block lg:text-start'>
          Felipe Pineda
        </h1>
        <p className='text-center text-lg font-bold text-balance text-gray-700 md:text-2xl lg:inline-block'>
          Ingeniero Electrónico & Desarrollador Front-End
        </p>
        <section className='mt-10 mb-8 flex flex-col-reverse items-center justify-between md:flex-row md:gap-4'>
          <div className='gap-4 lg:text-xl'>
            <h2 className='text-xl font-semibold lg:text-3xl'>Sobre mí</h2>
            <p className='mt-3 text-justify'>
              Soy ingeniero Electrónico y desarrollador Front-End con
              experiencia en el desarrollo de aplicaciones móviles, de
              escritorio, programación de microcontroladores e integración de
              tecnologías IoT.
            </p>

            <p className='mt-3 text-justify'>
              Disfruto del aprendizaje constante, experimentar con nuevas
              tecnologías y plantearme desafíos de programación. Poseo
              experiencia trabajando con JS/TS, pero me gustan los paradigmas de
              programación de lenguajes de más bajo nivel como C y Assembly.
            </p>

            <p className='mt-3 text-justify'>
              Ademas de la informática, soy un aficionado al ballroom y al
              modelismo a escala.
            </p>
            <div className='mt-5 flex h-14 flex-row justify-between lg:w-1/2'>
              <img
                className='drop-shadow-lg transition-transform duration-300 hover:scale-110'
                src='/assets/logos/linux.svg'
                alt='Logo Linux'
              />
              <img
                className='drop-shadow-lg transition-transform duration-300 hover:scale-110'
                src='/assets/logos/windows.svg'
                alt='Logo Windows'
              />
              <img
                className='drop-shadow-lg transition-transform duration-300 hover:scale-110'
                src='/assets/logos/vscode.svg'
                alt='Logo Visual Studio Code'
              />
              <img
                className='drop-shadow-lg transition-transform duration-300 hover:scale-110'
                src='/assets/logos/git.svg'
                alt='Logo Git'
              />
              <img
                className='drop-shadow-lg transition-transform duration-300 hover:scale-110'
                src='/assets/logos/github-mark.svg'
                alt='Logo GitHub'
              />
            </div>
          </div>
          <img
            className='h-48 w-48 rounded-full object-cover shadow-xl transition-transform duration-300 hover:scale-105 md:h-80 md:w-80'
            src='/assets/img/my-photo.jpeg'
            alt='Mi foto'
          />
        </section>

        <section className='container mb-8'>
          <h2 className='mb-4 text-xl font-semibold lg:text-3xl'>
            Áreas de trabajo
          </h2>
          <div className='flex h-fit w-full cursor-pointer flex-col items-center justify-between gap-4 lg:flex-row'>
            <ClickeableLogo
              src='/assets/logos/react.svg'
              alt='Logo React'
              label='Front-End'
              onClick={() => toggleStack('front')}
            />
            <ClickeableLogo
              src='/assets/logos/react-native.svg'
              alt='Logo React Native'
              label='Aplicaciones'
              onClick={() => toggleStack('ui')}
            />
            <ClickeableLogo
              src='/assets/logos/python.svg'
              alt='Logo Lenguaje Python'
              label='Scripting'
              onClick={() => toggleStack('scripting')}
            />
            <ClickeableLogo
              src='/assets/logos/c.svg'
              alt='Logo Lenguaje C'
              label='Microcontroladores'
              onClick={() => toggleStack('microcontrollers')}
            />
            <ClickeableLogo
              src='/assets/logos/lora.svg'
              alt='Logo LoRa'
              label='IoT'
              onClick={() => toggleStack('iot')}
            />
          </div>
        </section>

        {currentStack === 'front' && (
          <AreaInfo {...frontInfo}>
            En el desarrollo Front-End, utilizo tecnologías modernas como Vite
            para la configuración y construcción de proyectos, React para la
            creación de interfaces de usuario dinámicas, MongoDB como base de
            datos para manejar datos de manera eficiente, y TailwindCSS para
            diseñar interfaces atractivas y responsivas de forma rápida.
          </AreaInfo>
        )}

        {currentStack === 'ui' && (
          <AreaInfo {...mobileInfo}>
            Desarrollo de aplicaciones móviles y de escritorio utilizando React
            Native, integrando funcionalidades específicas como comunicación
            bluetooth y NFC. Segun los requerimientos del proyecto se puede
            trabajar en conjunto con Android Studio y/o Visual Studio para el
            desarrollo de módulos nativos, permitiendo la creación de
            funcionalidades personalizadas y optimizadas en la aplicación,
            destacanadose la integración del lector de huellas digitales
            "DigitalPersona".
          </AreaInfo>
        )}

        {currentStack === 'scripting' && (
          <AreaInfo {...scriptingInfo}>
            Uso de Python y MATLAB para analisis de datos y señales. Con Python,
            desarrolla soluciones para análisis de datos, visualización y
            proyectos de machine learning utilizando bibliotecas como Pandas,
            NumPy, Matplotlib y Scikit-learn. En MATLAB, trabaja en
            procesamiento de señales y simulaciones. En ambas tecnologías se
            aplican técnicas avanzadas de machine learning y optimización.
          </AreaInfo>
        )}

        {currentStack === 'microcontrollers' && (
          <AreaInfo {...microInfo}>
            Programación de microcontroladores más conocidos como Arduino, ESP32
            y PIC usando entornos de desarrollo como el IDE de Arduino, ESP-IDF
            para ESP32 y MPLAB para microcontroladores PIC, desarrollando
            soluciones eficientes y personalizadas para proyectos de
            automatización, control y comunicación.
          </AreaInfo>
        )}

        {currentStack === 'iot' && (
          <AreaInfo {...iotInfo}>
            Integración de dispositivos IoT para el monitoreo de variables a
            nivel industrial. Uso de LoRa como tecnología principal, debido a su
            gran variedad de sensores y su amplio alcance, que en conjunto con
            el servidor LoRaWAN "The Things Network", permiten una rápida
            integración y gran escalabilidad de cualquier tipo de proyecto.
          </AreaInfo>
        )}

        <section className='mb-8'>
          <h2 className='mb-4 text-xl font-semibold'>Proyectos</h2>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='rounded-lg border border-gray-300 bg-white p-4 shadow-md'>
              <img
                className='mb-4 h-40 w-full rounded-lg object-cover'
                src='/assets/img/fasic_SSPD.png'
                alt='Project 1'
              />
              <h3 className='mb-2 text-lg font-semibold'>
                Aceleración en algoritmo de segmentación
              </h3>
              <p className='text-sm text-gray-600'>
                Este proyecto consiste en la aceleración de un algoritmo de
                segmentación de fibras neuronales desarrollado originalmente en
                Python. Se reescribió en C, modificando el acceso a la memoria y
                eliminando computos inecesarios, logrando un tiempo de ejecución
                hasta 4000 veces menor que el algoritmo original.
              </p>
              <a
                href='https://github.com/mr-pineda/MT_UdeC_filtrado_fibras'
                className='mt-4 inline-block text-blue-500 hover:underline'
              >
                Repositorio
              </a>
            </div>

            <div className='rounded-lg border border-gray-300 bg-white p-4 shadow-md'>
              <img
                className='mb-4 h-40 w-full rounded-lg object-cover'
                src='/assets/img/abpro.png'
                alt='Project 2'
              />
              <h3 className='mb-2 text-lg font-semibold'>Demo web Hospital</h3>
              <p className='text-sm text-gray-600'>
                Template de una pagina web para un hospital ficticio,
                desarrollado en React y TailwindCSS. Principalmente tiene
                funcionalidades informativas.{' '}
                <span className='font-bold'>
                  Este proyecto aún está en desarrollo.
                </span>
              </p>
              <a
                href='https://github.com/mr-pineda/m6_abpro'
                className='mt-4 block text-blue-500 hover:underline'
              >
                Repositorio
              </a>
              <a
                href='https://mr-pineda.github.io/m6_abpro/'
                className='mt-4 block text-blue-500 hover:underline'
              >
                Visitar página
              </a>
            </div>

            <div className='rounded-lg border border-gray-300 bg-white p-4 shadow-md'>
              {/* <img
                className='mb-4 h-40 w-full rounded-lg object-cover'
                src='/assets/projects/project2.jpg'
                alt='Project 2'
              /> */}
              <div className='mb-4 h-40 w-full rounded-lg bg-gray-400 object-cover'></div>
              <h3 className='mb-2 text-lg font-semibold'>
                Pronto más proyectos
              </h3>
              <p className='text-sm text-gray-600'>...</p>
              {/* <a
                href='#'
                className='mt-4 inline-block text-blue-500 hover:underline'
              >
                Ver más
              </a> */}
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col items-center bg-white/60 p-4 shadow-inner'>
        <h2 className='mb-4 text-xl font-semibold'>Contacto</h2>
        <p className='flex items-center gap-2 pb-2'>
          <svg
            className='h-5 w-5 text-blue-600'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
          >
            <rect width='20' height='16' x='2' y='4' rx='2' />
            <path d='M22 6 12 13 2 6' />
          </svg>
          <a href='mailto:fpineda.eln@gmail.com' className='hover:underline'>
            fpineda.eln@gmail.com
          </a>
        </p>
        <p className='flex items-center gap-2 pb-2'>
          <svg
            className='h-5 w-5 text-blue-700'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z' />
          </svg>
          <a
            href='https://www.linkedin.com/in/fpinedas'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline'
          >
            linkedin.com/in/fpinedas
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
