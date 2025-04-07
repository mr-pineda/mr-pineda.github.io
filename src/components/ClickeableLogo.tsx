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
    <div className='flex h-full flex-row items-center' onClick={onClick}>
      <img className='mr-5 h-full' src={src} alt={alt} />
      <span className='text-2xl'>{label}</span>
    </div>
  );
};

export default ClickeableLogo;
