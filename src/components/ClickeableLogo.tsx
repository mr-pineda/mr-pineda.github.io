const ClickeableLogo = ({
  src,
  alt,
  label,
  onClick,
}: {
  src: string;
  alt: string;
  label: string;
  onClick: () => void;
}) => {
  return (
    <div
      className='flex h-full flex-row items-center transition-transform duration-300 hover:scale-110 hover:font-bold'
      onClick={onClick}
    >
      <img className='mr-5 h-14 w-14 drop-shadow-sm' src={src} alt={alt} />
      <span className='text-2xl'>{label}</span>
    </div>
  );
};

export default ClickeableLogo;
