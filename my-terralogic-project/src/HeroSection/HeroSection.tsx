import React from "react";

const HeroSection = () => {
  return(
   <div>
    <div className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white">
      <img src="/assets (1)/asset 2.jpeg" alt="hero" className="absolute inset-0 w-full h-full " />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-50 text-center space-y-6">
        <h1 className="text-5xl font-bold">
          Launch your Tech Career
          <br/>
          <span className="block mt-2">with us</span>
        </h1>
        <p className="text-xl font-normal">
          Get hands-on training and a direct pathway to a career at<br />
            Terralogic Academy.
        </p>
        <button className="mt-4 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xl rounded-full font-semibold shadow-lg transition">
            Get started &rarr;
          </button>

      </div>
    </div>
    <div className="relative w-full overflow-hidden bg-blue-50 py-3">
  <div className="animate-scroll whitespace-nowrap text-blue-600 font-semibold">
    <span className="mx-4">Real-World Projects • Internship • Opportunities • Career Growth • Expert Mentorship • Hands-On Learning • Industry Experts</span>
    
  </div>
  
</div>
<style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .animate-scroll {
          display: inline-block;
          animation: scroll 25s linear infinite;
        }
      `}</style>
</div>
  )
}
           
      
        
      
    
  
  


    


export default HeroSection