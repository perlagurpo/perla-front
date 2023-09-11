import ContactForm from "@/components/contact/contactForm";

export default function ContactScene() {

  return(
    <div style={{ width: '100vw', display: 'flex', 'flex-direction': 'row', justifyContent: 'right' }}>
      <div style={{ 'flex-basis': 'right' }}>
        <ContactForm />
      </div>
    </div>
  );
}