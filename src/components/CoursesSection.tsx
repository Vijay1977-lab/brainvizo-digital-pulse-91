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

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Digital Marketing Basic */}
          <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-3xl p-8 hover:border-gray-500/50 transition-all duration-500 hover:transform hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Digital Marketing Basic</h3>
              <div className="text-center mb-4">
                <span className="text-gray-400 line-through text-lg">15000Rs</span>
                <span className="text-white text-3xl font-bold ml-2">4999Rs</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {['Website Development', 'Facebook Advertising', 'Video Editing Mastery', 'YouTube Marketing', 'Instagram Mastery', 'Canva Designing', 'Drop Shipping'].map(skill => 
                <div key={skill} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-300">{skill}</span>
                </div>
              )}
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              CHOOSE PLAN
            </button>
          </div>

          {/* Digital Marketing Advance - Popular */}
          <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-blue-500/50 rounded-3xl p-8 hover:border-blue-500/70 transition-all duration-500 hover:transform hover:scale-105 relative">
            <div className="absolute -top-3 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              POPULAR
            </div>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Digital Marketing Advance</h3>
              <div className="text-center mb-4">
                <span className="text-gray-400 line-through text-lg">25000Rs</span>
                <span className="text-white text-3xl font-bold ml-2">9999Rs</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {['Search Engine Optimisation (SEO)', 'Google My Business (GMB)', 'Business Branding', 'Affiliate Marketing', 'Blogging Mastery', 'Funnel Creation', 'Google Ads'].map(skill => 
                <div key={skill} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-300">{skill}</span>
                </div>
              )}
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              CHOOSE PLAN
            </button>
          </div>

          {/* Digital Marketing Mastery */}
          <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-3xl p-8 hover:border-gray-500/50 transition-all duration-500 hover:transform hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Digital Marketing Mastery</h3>
              <div className="text-center mb-4">
                <span className="text-gray-400 line-through text-lg">35000Rs</span>
                <span className="text-white text-3xl font-bold ml-2">14999Rs</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {['Instagram Mastery', 'Google Analytics', 'Course Creation', 'Email Marketing', 'Search Console', 'Studio Setup', 'Automation'].map(skill => 
                <div key={skill} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-300">{skill}</span>
                </div>
              )}
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              CHOOSE PLAN
            </button>
          </div>
        </div>

        {/* Certificate Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Industry-Recognized Certificate</h3>
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-2xl p-4 hover:border-gray-500/50 transition-all duration-500">
            <div className="relative bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 overflow-hidden">
              
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
                <div className="text-center mb-4">
                  <h4 className="text-3xl font-bold text-gray-800 mb-2 tracking-widest">CERTIFICATE</h4>
                  <p className="text-lg text-yellow-600 font-semibold tracking-wide">OF COMPLETION</p>
                  <p className="text-base text-gray-700 mt-2 font-medium">Ai Digital Marketing Course</p>
                </div>
                
                {/* Recipient */}
                <div className="text-center mb-4">
                  <h5 className="text-2xl font-bold text-gray-800 mb-2">Mr Mridul</h5>
                  <div className="w-16 h-0.5 bg-yellow-400 mx-auto mb-2"></div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    This certificate is given to Mr Mridul<br/>
                    for completing his Ai Digital Marketing Course
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-end mt-6">
                  <div className="text-left">
                    <p className="text-yellow-600 font-semibold text-sm">Reg. ID - DMC1990</p>
                  </div>
                  
                  {/* Gold Seal */}
                  <div className="flex-shrink-0">
                    <div className="relative w-12 h-12 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-md"></div>
                      <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
                      <div className="absolute inset-2 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-yellow-600 rounded-full"></div>
                      </div>
                      {/* Seal ribbons */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-0.5 h-4 bg-gradient-to-b from-yellow-400 to-yellow-600 transform rotate-12"></div>
                        <div className="w-0.5 h-4 bg-gradient-to-b from-yellow-400 to-yellow-600 transform -rotate-12 -ml-0.5"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Signature */}
                  <div className="text-right">
                    <div className="mb-1">
                      <p className="text-lg text-gray-700 font-script italic">Vijay Kumar</p>
                      <div className="w-16 h-0.5 bg-gray-400 ml-auto"></div>
                    </div>
                    <p className="text-yellow-600 font-semibold text-sm">Founder</p>
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