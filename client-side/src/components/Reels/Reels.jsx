import "./Reels.scss"
import { Link } from "react-router-dom";
import { useEffect } from 'react';
// import InstagramEmbed from 'react-instagram-embed';


function Reels() {

    useEffect(() => {
        // This code loads the Instagram embed script dynamically
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.instagram.com/embed.js';
        document.body.appendChild(script);

        return () => {
            // Clean up: remove the script when the component is unmounted
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <section className="reels">
                <div className="reels__main">
                    <div className="reels__header">
                        Event Reels
                    </div>
                    <div className="reels__container">
                        <div className="reels__reel">
                            <blockquote
                                className="instagram-media"
                                data-instgrm-captioned
                                data-instgrm-permalink="https://www.instagram.com/reel/CsBeSs9sLXI/?utm_source=ig_embed&utm_campaign=loading"
                                data-instgrm-version="14"
                                style={{
                                    background: '#FFF',
                                    border: 0,
                                    borderRadius: '3px',
                                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                                    margin: '1px',
                                    maxWidth: '540px',
                                    minWidth: '326px',
                                    padding: 0,
                                    width: '99.375%',
                                    width: '-webkit-calc(100% - 2px)',
                                    width: 'calc(100% - 2px)'
                                }}
                            >
                                <div style={{ padding: '16px' }}>
                                    {/* Replace the content of the blockquote with the Instagram post content */}
                                    {/* You can customize the content here if needed */}
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reels;


{/* <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/CsBeSs9sLXI/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/CsBeSs9sLXI/?utm_source=ig_embed&amp;utm_campaign= */ }


{/* <iframe
    src="https://www.instagram.com/reel/CsBeSs9sLXI/embed/"
    width="520"
    height="920"
    frameborder="0"
    allowfullscreen
></iframe> */}