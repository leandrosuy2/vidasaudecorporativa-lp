/**
 * Edite `videoId` com os códigos dos seus vídeos (trecho após watch?v= na URL do YouTube).
 */
export type LandingYoutubeVideo = {
  videoId: string;
  title: string;
  subtitle: string;
};

export const landingYoutubeVideos: LandingYoutubeVideo[] = [
  { videoId: "M7lc1UVf-VE", title: "Tribunal de Justiça da Paraíba", subtitle: "Institucional" },
  { videoId: "qp0HIF3SfI4", title: "Office e cultura", subtitle: "Cultura organizacional" },
  { videoId: "UF8uR6Z6KUc", title: "Capacitação de liderança", subtitle: "Formação de líderes" },
  { videoId: "Ke90Tje7VS0", title: "CDL Uberlândia", subtitle: "Parceria e resultados" },
  { videoId: "60ItHLz5W_E", title: "Creci Campina Grande — Paraíba", subtitle: "Capacitação" },
  { videoId: "jfKfPfyJRdk", title: "Comunicação", subtitle: "Comunicação consciente" },
  { videoId: "jNQXAC9IVRw", title: "Evento liderança", subtitle: "Experiência ao vivo" },
  { videoId: "9bZkp7q19f0", title: "Depoimento Duda", subtitle: "História real" },
];

export function youtubeThumbUrl(videoId: string, quality: "maxres" | "hq" = "maxres") {
  const q = quality === "maxres" ? "maxresdefault" : "hqdefault";
  return `https://i.ytimg.com/vi/${videoId}/${q}.jpg`;
}

export function youtubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function youtubeEmbedUrl(videoId: string) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
}
