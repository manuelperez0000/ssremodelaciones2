import { useState } from "preact/hooks"

const useImages = ({images}) => {

    const [modal, setModal] = useState(false)
    const [image, setImage] = useState(false)
    const [imageId, setImageId] = useState(false)

    const openModal = (e) => {
        setImage(e.target.src)
        setImageId(e.target.id)
        setModal(true)
    }

    const close = () => setModal(false)

    const anterior = (id) => {
        const length = images.length
        if (id < 1) {
            setImageId(length - 1)
            setImage(images[length - 1])
        } else {
            setImageId(Number(id) - 1)
            setImage(images[Number(id) - 1])
        }
    }

    const siguiente = (id) => {
        const length = images.length
        if (id >= length - 1) {
            setImage(images[0])
            setImageId(0)
        } else {
            setImage(images[Number(id) + 1])
            setImageId(Number(id) + 1)
        }
    }

    return {
        modal, setModal,
        image, setImage,
        imageId, setImageId,
        openModal,
        close,
        anterior,
        siguiente
    }
}
export default useImages