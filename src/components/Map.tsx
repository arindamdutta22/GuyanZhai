
import React from 'react';

const Map = () => {
  // The address of the shop
  const address = "1F., No. 9, Sanmin St., Tamsui Dist., New Taipei City 251024, Taiwan";
  
  // Encode the address for the URL
  const encodedAddress = encodeURIComponent(address);
  
  // Create a Google Maps embed URL with the specific place ID for 古硯齋 KU YAN CHAI
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=古硯齋+KU+YAN+CHAI&center=25.1717446,121.4388506&zoom=17`;
  
  // Create a directions URL that opens Google Maps with the specific place information
  const directionsUrl = `https://www.google.com/maps/place/古硯齋+KU+YAN+CHAI/@25.1717446,121.4388506,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a554555007ed:0x4f484d4738be5683!8m2!3d25.1717446!4d121.4388506!16s%2Fg%2F11kwsnvrtv?entry=ttu`;
  
  return (
    <div className="mt-8">
      <div className="relative">
        <iframe
          title="Shop Location"
          width="100%"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={mapUrl}
          className="rounded-lg"
        ></iframe>
        <div className="absolute top-0 left-0 w-full h-full bg-transparent" onClick={() => {
          window.open(directionsUrl, '_blank');
        }} style={{ cursor: 'pointer' }}></div>
      </div>
      <p className="text-white/80 text-xs mt-2 text-center">
        Click on the map for directions to 古硯齋 KU YAN CHAI
      </p>
    </div>
  );
};

export default Map;
