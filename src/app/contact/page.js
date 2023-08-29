import ContactForm from "@/components/contact/contactForm";

export default function ContactPage () {

  

  return(
    <div className="flex flex-col min-w-screen min-h-screen items-center">
      <h2>Contact Us</h2>
      <div className="py-10">
        <ContactForm />
      </div>
      
    </div>
  );

}