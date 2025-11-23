import { Button } from "@/components/ui/button";

export function ContactCTA() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="cta"
      className="py-20 md:py-28 bg-gradient-to-br from-accent via-accent/95 to-primary relative overflow-hidden"
      data-testid="section-cta"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          data-testid="text-cta-heading"
        >
          Ready to Go Solar?
        </h2>
        <p className="text-lg sm:text-xl text-white/95 mb-10 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have made the switch to clean, renewable energy.
          Start your solar journey today!
        </p>
        <Button
          size="lg"
          className="bg-white hover:bg-white/95 text-primary font-semibold text-lg px-8 py-6 h-auto rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          onClick={scrollToContact}
          data-testid="button-schedule-assessment"
        >
          <i className="fas fa-calendar-check mr-2"></i>
          Schedule Free Assessment
        </Button>
      </div>
    </section>
  );
}
