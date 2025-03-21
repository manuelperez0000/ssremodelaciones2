import './style.css'
const ImagesSection = ({ images, title }) => {
    return <div style={{ marginBottom: "100px" }}>
        <h1>{title}</h1>
        <div className="container">
            <div className="row g-1">
                {images.map((item) => {
                    return <div className="col-3 mh-200"> <img class={'image-12'} src={item} alt="Remodelaciones" /> </div>
                })}
            </div>
        </div>

    </div>
}

export default ImagesSection