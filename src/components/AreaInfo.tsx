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
      <h2 className='mb-4 text-xl font-semibold'>{title}</h2>
      <p>{children}</p>
      <div className='mt-5 flex h-14 flex-row'>
        {techList.map((tech, idx) => (
          <img className='ml-10' key={idx} src={tech.src} alt={tech.alt} />
        ))}
      </div>
    </section>
  );
};

export default AreaInfo;
