export default function Contact() {
  return (
    <div id="contact" className="p-10 bg-bg text-center">
      <h2 className="text-2xl font-bold">Contact Us</h2>

      <div className="mt-6 flex justify-center gap-4">
        <a href="tel:+919491468423" className="bg-cta px-4 py-2 rounded text-white">Call</a>
        <a href="https://wa.me/919491468423?text=I need tax help"
           className="bg-green-600 px-4 py-2 rounded text-white">WhatsApp</a>
        <a href="mailto:jmraoassociates@gmail.com"
           className="bg-secondary px-4 py-2 rounded text-white">Email</a>
      </div>
    </div>
  );
}