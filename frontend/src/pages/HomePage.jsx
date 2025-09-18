import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-3 flex items-center justify-center gap-2">
            <span className="text-3xl">🔗</span>
            Link Shortener
          </h1>
          <p className="text-slate-400 text-lg">Create short, memorable links in seconds</p>
        </div>

        {/* URL Form Section */}
        <div className="px-6 py-8 bg-slate-700/50">
          <UrlForm />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="bg-slate-700/30 rounded-lg p-5 backdrop-blur-sm">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="text-white font-medium mb-1">Lightning Fast</h3>
            <p className="text-slate-400 text-sm">Shorten links instantly</p>
          </div>
          <div className="bg-slate-700/30 rounded-lg p-5 backdrop-blur-sm">
            <div className="text-2xl mb-2">🛡️</div>
            <h3 className="text-white font-medium mb-1">Secure Links</h3>
            <p className="text-slate-400 text-sm">Enterprise-grade security</p>
          </div>
          <div className="bg-slate-700/30 rounded-lg p-5 backdrop-blur-sm">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="text-white font-medium mb-1">Analytics</h3>
            <p className="text-slate-400 text-sm">Track your link performance</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="p-6 border-t border-slate-700">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center">
              <span className="text-xl">👤</span>
            </div>
            <div>
              <p className="text-slate-300">"The fastest and most reliable URL shortener I've ever used."</p>
              <p className="text-slate-500 text-sm mt-1">John Doe, Software Engineer</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-800 p-4 text-center border-t border-slate-700">
          <p className="text-slate-400 text-sm">
            Powered by modern technology • Available 24/7
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
