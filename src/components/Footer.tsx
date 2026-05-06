function Footer() {
  return (
    <footer className="py-4 bg-gray-100">
      <div className="custom-container flex items-center justify-center">
        <p>
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;