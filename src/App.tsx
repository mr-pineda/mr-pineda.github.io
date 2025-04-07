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

type workArea = 'front' | 'mobile' | 'scripting' | 'microcontrollers' | 'iot';
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
    <div className='min-h-screen bg-gray-100'>
      <main className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold'>Felipe Pineda</h1>
        <section className='container mb-8 flex flex-row'>
          <div>
            <h2 className='mt-10 mb-4 text-xl font-semibold'>Sobre mí</h2>
            <p>
              Ingeniero Electrónico y desarrollador Front-End con experiencia en
              el desarrollo de aplicaciones móviles, de escritorio, programación
              de microcontroladores e integración de tecnologías IoT.
            </p>
            <h2 className='mt-10 mb-4 text-xl font-semibold'>
              Entorno de desarrollo y herramientas
            </h2>
            <div className='mt-5 flex h-14 flex-row'>
              <img
                className='ml-10'
                src='/assets/logos/linux.svg'
                alt='Logo Linux'
              />
              <img
                className='ml-10'
                src='/assets/logos/windows.svg'
                alt='Logo Windows'
              />
              <img
                className='ml-10'
                src='/assets/logos/vscode.svg'
                alt='Logo Visual Studio Code'
              />
              <img
                className='ml-10'
                src='/assets/logos/git.svg'
                alt='Logo Git'
              />
              <img
                className='ml-10'
                src='/assets/logos/github-mark.svg'
                alt='Logo GitHub'
              />
            </div>
          </div>
          <img
            className='h-80 rounded-full bg-blue-900'
            src='/assets/img/my-photo.jpeg'
            alt='Mi foto'
          />
        </section>

        <section className='container mb-8'>
          <h2 className='mb-4 text-xl font-semibold'>Áreas de trabajo</h2>
          <div className='flex h-24 w-full cursor-pointer flex-row justify-between'>
            <ClickeableLogo
              src='/assets/logos/react.svg'
              alt='Logo React'
              label='Front-End'
              onClick={() => toggleStack('front')}
            />
            <ClickeableLogo
              src='/assets/logos/react-native.svg'
              alt='Logo React Native'
              label='Mobile'
              onClick={() => toggleStack('mobile')}
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
            En el desarrollo Front-End, utiliza tecnologías modernas como Vite
            para la configuración y construcción de proyectos, React para la
            creación de interfaces de usuario dinámicas, MongoDB como base de
            datos para manejar datos de manera eficiente, y TailwindCSS para
            diseñar interfaces atractivas y responsivas de forma rápida.
          </AreaInfo>
        )}

        {currentStack === 'mobile' && (
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

        <section>
          <h2 className='mb-4 text-xl font-semibold'>Contacto</h2>
          <p>
            email:{' '}
            <a href='mailto:fpineda.eln@gmail.com'>fpineda.eln@gmail.com</a>
          </p>
          <p>
            linkedin:{' '}
            <a href='https://www.linkedin.com/in/fpinedas' target='_blank'>
              linkedin.com/in/fpinedas
            </a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
