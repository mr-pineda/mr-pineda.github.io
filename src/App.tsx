import { useState } from 'react';

type Stack = 'front' | 'mobile' | 'scripting' | 'microcontrollers' | 'iot';
const App = () => {
  const [currentStack, setCurrentStack] = useState<null | Stack>(null);

  const toggleStack = (stack: Stack) => {
    if (currentStack !== stack) {
      setCurrentStack(stack);
    } else {
      setCurrentStack(null);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-blue-500 p-4 text-white'>
        <h1 className='text-2xl font-bold'>Felipe Pineda</h1>
      </header>

      <main className='container mx-auto p-4'>
        <section className='mb-8 flex flex-row'>
          <div>
            <h2 className='mb-4 text-xl font-semibold'>Sobre mí</h2>
            <p>
              Ingeniero Electrónico y desarrollador Front-End con experiencia en
              el desarrollo de aplicaciones móviles, de escritorio, programación
              de microcontroladores e integración de tecnologías IoT.
            </p>
          </div>
          <img
            className='h-80 rounded-full bg-blue-900'
            src='/assets/img/my-photo.jpeg'
            alt='Mi foto'
          />
        </section>

        <section className='container mb-8'>
          <h2 className='mb-4 text-xl font-semibold'>
            Stack principal de trabajo
          </h2>
          <div className='flex h-24 w-full flex-row justify-between'>
            <img
              className='cursor-pointer'
              src='/assets/logos/react.svg'
              alt='Logo React'
              onClick={() => toggleStack('front')}
            />
            <img
              className='cursor-pointer'
              src='/assets/logos/react-native.svg'
              alt='Logo React Native'
              onClick={() => toggleStack('mobile')}
            />
            <img
              className='cursor-pointer'
              src='/assets/logos/python.svg'
              alt='Logo Lenguaje Python'
              onClick={() => toggleStack('scripting')}
            />
            <img
              className='cursor-pointer'
              src='/assets/logos/c.svg'
              alt='Logo Lenguaje C'
              onClick={() => toggleStack('microcontrollers')}
            />
            <img
              className='cursor-pointer'
              src='/assets/logos/lora.svg'
              alt='Logo LoRa'
              onClick={() => toggleStack('iot')}
            />
          </div>
        </section>

        {currentStack === 'front' && (
          <section className='my-8'>
            <h2 className='mb-4 text-xl font-semibold'>Desarrollo Front-End</h2>
            <p>
              En el desarrollo Front-End, utiliza tecnologías modernas como Vite
              para la configuración y construcción de proyectos, React para la
              creación de interfaces de usuario dinámicas, MongoDB como base de
              datos para manejar datos de manera eficiente, y TailwindCSS para
              diseñar interfaces atractivas y responsivas de forma rápida.
            </p>
            <div className='mt-5 flex h-14 flex-row'>
              <img
                className='ml-10'
                src='/assets/logos/react.svg'
                alt='Logo React'
              />
              <img
                className='ml-10'
                src='/assets/logos/vite.svg'
                alt='Logo Vite'
              />
              <img
                className='ml-10'
                src='/assets/logos/mongodb.svg'
                alt='Logo MongoDB'
              />
              <img
                className='ml-10'
                src='/assets/logos/TailwindCSS.svg'
                alt='Logo TailwindCSS'
              />
              <img
                className='ml-10'
                src='/assets/logos/html5.svg'
                alt='Logo HTML5'
              />
              <img
                className='ml-10'
                src='/assets/logos/css3.svg'
                alt='Logo CSS3'
              />
              <img
                className='ml-10'
                src='/assets/logos/javascript.svg'
                alt='Logo Javascript'
              />
              <img
                className='ml-10'
                src='/assets/logos/typescript.svg'
                alt='Logo Typescript'
              />
            </div>
          </section>
        )}

        {currentStack === 'mobile' && (
          <section className='my-8'>
            <h2 className='mb-4 text-xl font-semibold'>
              Desarrollo móvil & escritorio
            </h2>
            <p>
              Desarrollo de aplicaciones móviles y de escritorio utilizando
              React Native, integrando funcionalidades específicas como
              comunicación bluetooth y NFC. Segun los requerimientos del
              proyecto se puede trabajar en conjunto con Android Studio y/o
              Visual Studio para el desarrollo de módulos nativos, permitiendo
              la creación de funcionalidades personalizadas y optimizadas en la
              aplicación, destacanadose la integración del lector de huellas
              digitales "DigitalPersona".
            </p>
            <div className='mt-5 flex h-14 flex-row'>
              <img
                className='ml-10'
                src='/assets/logos/react-native.svg'
                alt='Logo React Native'
              />
              <img
                className='ml-10'
                src='/assets/logos/aStudio.svg'
                alt='Logo Android Studio'
              />
              <img
                className='ml-10'
                src='/assets/logos/VStudio.svg'
                alt='Logo Visual Studio'
              />
              <img
                className='ml-10'
                src='/assets/logos/kotlin.svg'
                alt='Logo Lenguaje Kotlin'
              />
              <img
                className='ml-10'
                src='/assets/logos/cs.svg'
                alt='Logo Lenguaje C#'
              />
              <img
                className='ml-10'
                src='/assets/logos/cpp.svg'
                alt='Logo Lenguaje C++'
              />
            </div>
          </section>
        )}

        {currentStack === 'scripting' && (
          <section className='my-8'>
            <h2 className='mb-4 text-xl font-semibold'>Análisis de datos</h2>
            <p>
              Uso de Python y MATLAB para analisis de datos y señales. Con
              Python, desarrolla soluciones para análisis de datos,
              visualización y proyectos de machine learning utilizando
              bibliotecas como Pandas, NumPy, Matplotlib y Scikit-learn. En
              MATLAB, trabaja en procesamiento de señales y simulaciones. En
              ambas tecnologías se aplican técnicas avanzadas de machine
              learning y optimización.
            </p>
            <div className='mt-5 flex h-14 flex-row'>
              <img
                className='ml-10'
                src='/assets/logos/python.svg'
                alt='Logo Lenguaje Python'
              />
              <img
                className='ml-10'
                src='/assets/logos/matlab.svg'
                alt='Logo MatLab'
              />
            </div>
          </section>
        )}

        {currentStack === 'microcontrollers' && (
          <section className='my-8'>
            <h2 className='mb-4 text-xl font-semibold'>
              Programación de microcontroladores
            </h2>
            <p>
              Programación de microcontroladores más conocidos como Arduino,
              ESP32 y PIC usando entornos de desarrollo como el IDE de Arduino,
              ESP-IDF para ESP32 y MPLAB para microcontroladores PIC,
              desarrollando soluciones eficientes y personalizadas para
              proyectos de automatización, control y comunicación.
            </p>
            <div className='mt-5 flex h-14 flex-row'>
              <img
                className='ml-10'
                src='/assets/logos/c.svg'
                alt='Logo Lenguaje C'
              />
              <img
                className='ml-10'
                src='/assets/logos/cpp.svg'
                alt='Logo Lenguaje C++'
              />
              <img
                className='ml-10'
                src='/assets/logos/arduino.svg'
                alt='Logo Arduino'
              />
              <img
                className='ml-10'
                src='/assets/logos/espressif.svg'
                alt='Logo Espressif'
              />
              <img
                className='ml-10'
                src='/assets/logos/mplab.webp'
                alt='Logo MPLAB X'
              />
            </div>
          </section>
        )}

        {currentStack === 'iot' && (
          <section className='my-8'>
            <h2 className='mb-4 text-xl font-semibold'>Proyectos de IoT</h2>
            <p>
              Participa en la integración de dispositivos IoT para el monitoreo
              de variables a nivel industrial. Uso de LoRa como tecnología
              principal, debido a su gran variedad de sensores y su amplio
              alcance, que en conjunto con el servidor LoRaWAN "The Things
              Network", permiten una rápida integración y gran escalabilidad de
              cualquier tipo de proyecto.
            </p>
            <div className='mt-5 flex h-14 flex-row'>
              <img
                className='ml-10'
                src='/assets/logos/lora.svg'
                alt='Logo Lora'
              />
              <img
                className='ml-10'
                src='/assets/logos/lorawan.svg'
                alt='Logo LoraWan'
              />
              <img
                className='ml-10'
                src='/assets/logos/ttn.svg'
                alt='Logo The Things Network'
              />
            </div>
          </section>
        )}

        <section className='mb-8'>
          <h2 className='mb-4 text-xl font-semibold'>Proyectos</h2>
          <p className='text-center'>
            Pronto se integrarán el listado de proyectos ...
          </p>
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

      <footer className='bg-gray-200 p-4 text-center'>
        <p>&copy; {new Date().getFullYear()} Felipe Pineda</p>
      </footer>
    </div>
  );
};

export default App;
