import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const AlbumShowcase = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Latest Release
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        {/* Album Card */}
        <Card className="bg-gradient-to-br from-purple-900/30 to-black border-purple-500/30 overflow-hidden max-w-4xl mx-auto backdrop-blur-sm">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Album Art */}
              <div className="relative aspect-square bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center p-8">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-4 border-white/30">
                    <svg 
                      className="w-24 h-24 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-sm font-medium text-white/80 mb-2">XCamBeats</p>
                    <h3 className="text-3xl font-bold text-white">Inhale the Pollon</h3>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"></div>
              </div>

              {/* Album Info */}
              <div className="p-8 md:p-12 flex flex-col justify-center bg-black/40">
                <div className="mb-8">
                  <h3 className="text-4xl font-bold mb-2">Inhale the Pollon</h3>
                  <p className="text-purple-300 text-lg mb-6">2024 Album</p>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Experience the latest sonic journey from XCamBeats. A blend of atmospheric beats, 
                    hypnotic rhythms, and immersive soundscapes that transport you to another dimension.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-sm">
                      Electronic
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-sm">
                      Ambient
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-sm">
                      Beats
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold"
                  >
                    <svg 
                      className="w-5 h-5 mr-2" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Listen Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-6 text-lg"
                  >
                    View Tracks
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats or Additional Info */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">12</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Tracks</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">45:32</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Duration</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">2024</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Release</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Vibes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbumShowcase;
