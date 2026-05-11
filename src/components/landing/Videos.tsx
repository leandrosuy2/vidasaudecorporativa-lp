"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  landingYoutubeVideos,
  youtubeEmbedUrl,
  youtubeThumbUrl,
  youtubeWatchUrl,
} from "@/lib/youtubeVideos";

function VideoThumb({ videoId, alt }: { videoId: string; alt: string }) {
  const [hq, setHq] = useState(false);
  const src = youtubeThumbUrl(videoId, hq ? "hq" : "maxres");
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      onError={() => {
        if (!hq) setHq(true);
      }}
    />
  );
}

export function Videos() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const active = landingYoutubeVideos.find((v) => v.videoId === activeId);

  return (
    <section id="videos" className="border-t border-white/[0.06] bg-[#08090c] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c6a64a]">
            Conteúdo em vídeo
          </span>
          <h2 className="font-elegant mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Registros em vídeo
          </h2>
          <p className="mt-4 text-sm text-white/60 sm:text-base">
            Clique no card para assistir no site (YouTube) ou abra em nova aba.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {landingYoutubeVideos.map((v) => (
            <button
              key={v.videoId}
              type="button"
              onClick={() => {
                setActiveId(v.videoId);
                setOpen(true);
              }}
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-xl border border-white/[0.08] bg-[#0e1016] p-5 text-left shadow-lg transition-[border-color,transform] hover:-translate-y-0.5 hover:border-[#c6a64a]/40"
            >
              <VideoThumb videoId={v.videoId} alt={v.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060607] via-[#060607]/75 to-transparent" />
              <div className="absolute left-1/2 top-[42%] flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-[#e4cf8a] ring-2 ring-[#c6a64a]/40 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-[#c6a64a] group-hover:text-[#1a1510]">
                <Play className="ml-0.5 size-6" fill="currentColor" />
              </div>
              <div className="relative z-[1] mt-auto">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#c6a64a]/95">
                  {v.subtitle}
                </p>
                <p className="mt-1 font-display text-base font-bold leading-snug text-white">{v.title}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-white/50">
                  Reproduzir vídeo
                </p>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/45">
          Ajuste os IDs em{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-[11px] text-[#e4cf8a]">
            src/lib/youtubeVideos.ts
          </code>{" "}
          para apontar para os seus vídeos oficiais.
        </p>
      </div>

      <Dialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) setActiveId(null);
        }}
      >
        <DialogContent className="max-w-4xl gap-0 overflow-hidden border border-white/10 bg-[#0e1016] p-0 text-white sm:max-w-4xl [&>button]:text-white/80 [&>button]:hover:text-white">
          <DialogHeader className="sr-only">
            <DialogTitle>{active?.title ?? "Vídeo"}</DialogTitle>
          </DialogHeader>
          {activeId ? (
            <div className="aspect-video w-full bg-black">
              <iframe
                key={activeId}
                title={active?.title ?? "YouTube"}
                src={youtubeEmbedUrl(activeId)}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : null}
          {active ? (
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
              <p className="text-sm text-white/70">{active.title}</p>
              <a
                href={youtubeWatchUrl(active.videoId)}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-[#c6a64a] hover:text-[#e4cf8a]"
              >
                Abrir no YouTube
              </a>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
