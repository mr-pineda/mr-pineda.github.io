const AreaInfo = ({
  title,
  techList,
  children,
}: {
  title: string;
  techList: { src: string; alt: string }[];
  children?: React.ReactNode;
}) => {
  return (
    <section className='my-8'>
      <h2 className='mb-4 text-xl font-semibold lg:text-3xl'>{title}</h2>
      <p className='text-justify text-balance lg:text-xl'>{children}</p>
      <div className='mt-5 grid grid-cols-3 justify-items-center gap-4 sm:grid-cols-5 lg:grid-cols-9'>
        {techList.map((tech, idx) => (
          <img
            className='h-14 object-contain'
            key={idx}
            src={tech.src}
            alt={tech.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default AreaInfo;
