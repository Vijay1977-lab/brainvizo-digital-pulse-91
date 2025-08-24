import React from 'react';
const CoursesSection = () => {
  return <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Learn Ai-Powered Digital Marketing</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive training programs designed to make you a digital marketing expert
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* 4-Month Professional Certification */}
          <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-3xl p-8 hover:border-gray-500/50 transition-all duration-500 hover:transform hover:scale-105">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">4-Month Professional Certification</h3>
              <p className="text-gray-300">Foundation to Advanced Marketing Skills</p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-semibold text-gray-200 mb-4">Course Highlights:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['WordPress Development', 'Facebook Ads Management', 'Instagram Ads Strategy', 'YouTube Marketing', 'Canva Design', 'Google Business Profile', 'Drop Shipping', 'Content Creation'].map(skill => <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>)}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-700/50 rounded-2xl p-4 mb-6">
                <p className="text-gray-300">
                  <strong className="text-white">Career Scope:</strong> Start your freelance journey, work with agencies, or launch your own brand.
                </p>
              </div>
              <p className="text-gray-400 font-semibold">Includes Internship & Industry Certificate on Completion</p>
            </div>
          </div>

          {/* 6-Month Advanced AI-Driven Program */}
          <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-3xl p-8 hover:border-gray-500/50 transition-all duration-500 hover:transform hover:scale-105">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">6-Month Advanced Ai-Driven Program</h3>
              <p className="text-gray-300">Complete Digital Marketing Mastery</p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-semibold text-gray-200 mb-4">Advanced Skills:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['SEO & Content Marketing', 'Google Ads & PPC', 'Marketing Automation', 'Email Marketing', 'Video Editing', 'Freelancing Business', 'WhatsApp Marketing'].map(skill => <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>)}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-700/50 rounded-2xl p-4 mb-6">
                <p className="text-gray-300">
                  <strong className="text-white">Career Scope:</strong> Lead marketing teams, start your agency, or become a marketing consultant.
                </p>
              </div>
              <p className="text-gray-400 font-semibold">Includes Internship & Industry Certificate on Completion</p>
            </div>
          </div>
        </div>

        {/* Certificate Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Industry-Recognized Certificate</h3>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-3xl p-8 hover:border-gray-500/50 transition-all duration-500">
            <div className="relative bg-gradient-to-br from-yellow-50 to-white p-12 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 overflow-hidden">
              
              {/* Decorative flowing lines */}
              <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
                <svg viewBox="0 0 200 200" className="w-full h-full text-yellow-400">
                  <path d="M20,50 Q50,20 80,50 Q110,80 140,50 Q170,20 200,50" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse"/>
                  <path d="M10,70 Q40,40 70,70 Q100,100 130,70 Q160,40 190,70" stroke="currentColor" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                  <path d="M0,90 Q30,60 60,90 Q90,120 120,90 Q150,60 180,90" stroke="currentColor" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: '1s'}}/>
                </svg>
              </div>

              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 rotate-180">
                <svg viewBox="0 0 200 200" className="w-full h-full text-yellow-400">
                  <path d="M20,50 Q50,20 80,50 Q110,80 140,50 Q170,20 200,50" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse"/>
                  <path d="M10,70 Q40,40 70,70 Q100,100 130,70 Q160,40 190,70" stroke="currentColor" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                  <path d="M0,90 Q30,60 60,90 Q90,120 120,90 Q150,60 180,90" stroke="currentColor" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: '1s'}}/>
                </svg>
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <h4 className="text-5xl font-bold text-gray-800 mb-3 tracking-widest">CERTIFICATE</h4>
                  <p className="text-2xl text-yellow-600 font-semibold tracking-wide">OF COMPLETION</p>
                  <p className="text-xl text-gray-700 mt-4 font-medium">Ai Digital Marketing Course</p>
                </div>
                
                {/* Recipient */}
                <div className="text-center mb-8">
                  <h5 className="text-4xl font-bold text-gray-800 mb-4">Mr Mridul</h5>
                  <div className="w-24 h-0.5 bg-yellow-400 mx-auto mb-4"></div>
                  <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                    This certificate is given to Mr Mridul<br/>
                    for completing his Ai Digital Marketing Course
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-end mt-12">
                  <div className="text-left">
                    <p className="text-yellow-600 font-semibold text-lg mb-2">Reg. ID - DMC1990</p>
                  </div>
                  
                  {/* Gold Seal */}
                  <div className="flex-shrink-0">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg"></div>
                      <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
                      <div className="absolute inset-4 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      </div>
                      {/* Seal ribbons */}
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                        <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 transform rotate-12"></div>
                        <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 transform -rotate-12 -ml-1"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Signature */}
                  <div className="text-right">
                    <div className="mb-2">
                      <p className="text-2xl text-gray-700 font-script italic">Vijay Kumar</p>
                      <div className="w-24 h-0.5 bg-gray-400 ml-auto"></div>
                    </div>
                    <p className="text-yellow-600 font-semibold">Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CoursesSection;