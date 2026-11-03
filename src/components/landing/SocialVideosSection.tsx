import Image from "next/image";
import { images } from "@/assets/images";
import { SocialIcon } from "./SocialIcon";

const videos = [
  { title: "MOTIVACIÓN PARA ENTRENAR", image: images.social.trainingMotivation, href: "https://vt.tiktok.com/ZSpRybwCo/" },
  { title: "BUENO, BONITO Y BARATO", image: images.social.goodBeautifulAffordable, href: "https://vt.tiktok.com/ZSpRyCVhT/" },
  { title: "APERTURA PUCALLPA", image: images.social.pucallpaOpening, href: "https://vt.tiktok.com/ZSpRDC5Tt/" },
];

export function SocialVideosSection() {
  return (
    <section id="redes" className="gym-section social-videos-section" aria-labelledby="social-videos-title">
      <div className="gym-shell">
        <div className="section-heading" data-reveal>
          <h2 id="social-videos-title" className="gym-title">XTREME<br /><span className="text-x-neon">EN MOVIMIENTO.</span></h2>
          <p className="section-description">Consejos, motivación y momentos de nuestra comunidad. Mira nuestros videos en TikTok.</p>
        </div>
        <div className="social-videos-grid">
          {videos.map((video) => (
            <a className="social-video" key={video.href} href={video.href} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${video.title.toLocaleLowerCase("es")} en TikTok (otra pestaña)`} data-reveal>
              <div className="social-video-cover">
                <Image src={video.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                <span className="social-video-platform"><SocialIcon label="TK" /> TikTok</span>
                <span className="social-video-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="m8 4 12 8-12 8V4Z" /></svg></span>
              </div>
              <div className="social-video-caption">
                <h3 className="font-sport">{video.title}</h3>
                <span>Ver en TikTok <span aria-hidden="true">↗</span></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
