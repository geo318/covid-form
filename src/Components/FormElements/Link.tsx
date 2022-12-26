const Link = ({ href, text }: { href: string; text?: string }) => (
  <a href={href} target='_blank' rel='noreferrer' className='text-[#1289AE]'>
    {text || href}
  </a>
);

export default Link;
