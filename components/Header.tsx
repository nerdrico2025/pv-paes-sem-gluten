import React from 'react';

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const YouTubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.25,4,12,4,12,4S5.75,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.75,2,12,2,12s0,4.25,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.75,20,12,20,12,20s6.25,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.25,22,12,22,12S22,7.75,21.582,6.186z M10,15.5V8.5l6,3.5L10,15.5z"/>
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
);

const VideoIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
);

const Header = () => {
    return (
        <header className="bg-[#f3827c] text-white shadow-md sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <button className="p-2 lg:hidden">
                            <MenuIcon />
                        </button>
                        <a href="#" className="flex items-center space-x-3">
                            <img src="https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/logo_chefglutenfree-red.png" alt="ChefGlutenFree Logo" className="h-10" />
                            <span className="text-2xl font-bold">ChefGlutenFree</span>
                        </a>
                    </div>

                    <div className="hidden lg:flex flex-1 items-center justify-center mx-8 space-x-8">
                        <div className="flex items-center space-x-2">
                           <YouTubeIcon />
                           <div>
                             <p className="font-bold">37.500</p>
                             <p className="text-xs text-[#fdd5bb]">inscritos</p>
                           </div>
                        </div>
                         <div className="border-l border-white/30 h-8"></div>
                        <div className="flex items-center space-x-2">
                           <UsersIcon />
                           <div>
                             <p className="font-bold">2500+</p>
                             <p className="text-xs text-[#fdd5bb]">leitores</p>
                           </div>
                        </div>
                         <div className="border-l border-white/30 h-8"></div>
                        <div className="flex items-center space-x-2">
                           <VideoIcon />
                           <div>
                             <p className="font-bold">821</p>
                             <p className="text-xs text-[#fdd5bb]">vídeos publicados</p>
                           </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                       {/* Itens removidos conforme solicitado */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;