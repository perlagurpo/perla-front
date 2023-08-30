import ContactForm from "@/components/contact/contactForm";

export default function ContactPage () {

  

  return(
    <div className="flex flex-col min-w-screen min-h-screen items-center bg-perla-black">
      <h2 className="text-6xl pt-10">Contact Us</h2>
      <div className="min-w-full px-[30%] py-[5%]">
        <ContactForm />
      </div>  
    </div>
  );

}