import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export default function VideoCard({ link }) {
    // remove "https://www.youtube.com/watch?v="
    const linkVideo = link.substr(32)

    return (
        <>
            <style jsx>{`
                .embed-responsive {
                    position: relative;
                    display: block;
                    width: 100%;
                    padding: 0;
                    overflow: hidden;
                }
            `}</style>

            <div className="embed-responsive rounded">
                <LiteYouTubeEmbed
                    id={linkVideo}
                    title="Youtube Video"
                />
            </div>
        </>
    );
}