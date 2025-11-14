import './Slides.css'

export const Creatividad = () => {
    return (
        <div className='slide__container'>
            <h1>Storytelling</h1>
            <video
                controls
                preload="metadata"
                type="video/mp4"
                src='./video_storytelling.mp4'>
            </video>
        </div >
    )
}