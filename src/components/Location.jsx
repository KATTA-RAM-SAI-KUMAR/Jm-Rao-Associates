export default function Location() {
  return (
    <div className="py-16 bg-white text-center">
      
      <h2 className="text-3xl font-bold mb-6">Our Location</h2>

      <p className="text-gray-600 mb-6">
        Flat No. 101, Sainadh Residency, Steamer Road,  
        Narasapuram - 534275
      </p>

      {/* Google Maps Embed */}
      <div className="flex justify-center">
        <iframe
          title="location"
          src="https://www.google.com/maps?q=Narasapuram&output=embed"
          className="w-[90%] md:w-[600px] h-[300px] rounded-xl shadow-lg"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
}