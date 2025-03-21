import { Modal } from './modal'
import './style.css'
import useImages from './hooks/useImages'

const ImagesSection = ({ images, title }) => {

    const { modal, image, imageId, openModal, close, anterior, siguiente } = useImages({ images })

    return <div style={{ marginBottom: "100px" }}>
        <h1>{title}</h1>
        <div className="container">
            <div className="row g-1">
                {images.map((image, index) => {
                    return <div className="col-3 mh-200">
                        <img onClick={(e) => openModal(e)}
                            id={index}
                            class="image-12"
                            src={image}
                            alt="remodelaciones en costa rica"
                        />
                    </div>
                })}
            </div>
        </div>

        <Modal id={imageId} image={image} active={modal} close={close} anterior={anterior} siguiente={siguiente} />

    </div>
}

export default ImagesSection