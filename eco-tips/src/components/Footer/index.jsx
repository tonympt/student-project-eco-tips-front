function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="w-screen p-2 bg-white shadow-top border-t-2 fixed bottom-0 ">
      <p className="text-center text-xs ">
        @Eco-Tips -
        {date}
      </p>
    </footer>
  );
}

export default Footer;
