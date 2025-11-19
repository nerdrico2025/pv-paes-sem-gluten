import React from 'react';

const VideoSection = () => {
  const videoUrl = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
  const thumbnailUrl = "https://picsum.photos/seed/videothumb/800/450";

  return (
    <div id="videos" className="space-y-4">
      <h2 className="text-2xl font-bold border-b pb-2">Vídeos para este produto</h2>
      <div className="max-w-2xl">
        <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg">
          <video
            src={videoUrl}
            controls
            poster={thumbnailUrl}
            className="w-full h-full object-contain"
            preload="metadata"
            title="Demonstração do livro Pães Sem Glúten"
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
        <div className="mt-2">
            <p className="font-semibold text-gray-800">Análise do cliente: Ótimas receitas de pão que mal parecem sem glúten</p>
            <p className="text-sm text-gray-500">Health nut</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;