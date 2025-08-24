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
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-3xl p-8 hover:border-gray-500/50 transition-all duration-500">
            <div className="p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-slate-50">
              <div className="border-4 border-gray-800 p-6">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">CERTIFICATE OF COMPLETION</h4>
                  <p className="text-gray-600">Digital Marketing Professional Program</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700 mb-2">This is to certify that</p>
                  <h5 className="text-3xl font-bold text-gray-800 mb-2">Mr. ABC Kumar</h5>
                  <p className="text-gray-700">has successfully completed the comprehensive Digital Marketing Program</p>
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="text-left">
                    <div className="w-32 h-16 bg-gray-200 rounded mb-2 flex items-center justify-center">
                      <span className="text-xs text-gray-600">OFFICIAL SEAL</span>
                    </div>
                    <p className="text-xs text-gray-600">Reg.N0-001980034</p>
                  </div>
                  
                  <div className="text-center">
                    <h6 className="text-xl font-bold text-gray-800 mb-1">Ai Digital BrainVizo</h6>
                    <p className="text-sm text-gray-600 mb-4">Authorized Learning Partner</p>
                    <div className="border-t border-gray-400 pt-2">
                      <p className="text-xs text-gray-600">Director Signature</p>
                    </div>
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