import React from 'react';
import resumePDF from '../../public/SinghResume.pdf';



const ResumeCom = () => {
  return (
    <>
    
    <div className="min-h-screen from-black via-gray-900 to-black flex flex-col items-center justify-center px-4  text-white">
      {/* <h2 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-8 text-center">
        My Resume
      </h2> */}

      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-md rounded-xl shadow-lg border border-white/10 p-4">
        <iframe
          src={resumePDF}
          title="My Resume"
          className="w-full h-[70vh] rounded-sm"
        />
      </div>

      {/* <a
        href={resumePDF}
        download="Mahaveer_Singh_Resume.pdf"
        className="mt-8 bg-purple-600 hover:bg-white hover:text-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
      >
        Download
      </a> */}
    </div>
    </>
  );
};

export default ResumeCom
