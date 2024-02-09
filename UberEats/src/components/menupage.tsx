import './menupage.css'


interface MenuPageProps {
    isOpen: boolean;
    onClose: () => void;
  }
export const MenuPage: React.FC<MenuPageProps> = ({ isOpen, onClose }) => {
    /* useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
          if (isOpen && !target.closest('.menu-page')) {
            onClose();
          }
        };
        document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]); */
  const handleButtonClick = () => {
    onClose(); // Call onClose when the close button is clicked
  };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    /* const unusedVariable = onClose; */
  return (
    <div className={`menu-page ${isOpen ? 'open' : ''}`}>
            <i className='bx bx-menu-alt-right close-button' onClick={handleButtonClick}></i>
            <button className='login-signup black'>Sign up</button>
            <button className='login-signup grey'>Log in</button>
            <a href="#">Create a business account</a>
            <a href="#">Add your restaurant</a>
            <a href="#">Sign up to deliver</a>
            <div className='app-banner'>
                <div><span className='white'>Uber</span><span className='green'>Eats</span></div>
                <p>There's more to love in the app.</p>
            </div>
            <div className='apps'>
                <button><i className='bx bxl-apple'></i>  iPhone</button>
                <button><i className='bx bxl-android'></i>  Android</button>
            </div>
        </div>
  )
}
