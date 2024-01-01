import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer bg-primary">
        <h3 className="text-center text-white">Yogesh Chandra &copy; {(new Date()).getFullYear()}</h3>
      </div>
    </>
  );
};

export default Footer;
