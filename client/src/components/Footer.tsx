export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-foreground text-background py-16"
      data-testid="footer-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Surya Mitra Solar Logo" 
                className="h-12 w-auto object-contain"
              />
              <span className="text-xl font-bold">Surya Mitra Solar</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Powering a sustainable future with clean, reliable, and affordable solar energy solutions across India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-contact-heading">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:pratikshelkepatil2305@gmail.com"
                className="flex items-center text-background/80 hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <i className="fas fa-envelope mr-3"></i>
                pratikshelkepatil2305@gmail.com
              </a>
              <a
                href="tel:+919011254516"
                className="flex items-center text-background/80 hover:text-primary transition-colors"
                data-testid="link-phone"
              >
                <i className="fas fa-phone mr-3"></i>
                +91 9011254516
              </a>
              <div className="flex items-start text-background/80">
                <i className="fas fa-location-dot mr-3 mt-1"></i>
                <span>Kharadi, Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70 text-sm" data-testid="text-copyright">
            &copy; {currentYear} Surya Mitra Solar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
