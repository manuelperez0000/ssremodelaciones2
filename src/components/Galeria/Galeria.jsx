import { useState } from "preact/hooks"
/* import { Modal } from "./modal" */
import ImagesSection from "./imagesSection";

const imagesGalery = [
  {
    title:'title 1',
    images:["https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
  "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg","https://photolari.com/wp-content/uploads/2017/06/MontBlancGigapixel-01.jpg"]
  },
  {
    title:'title 2',
    images:["https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
  "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"]
  },
  {
    title:'title 3',
    images:["https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
  "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg"]
  },
  
];

export const Galeria = () => {

 /*  const [modal, setModal] = useState(false)
  const [image, setImage] = useState(false)
  const [imageId, setImageId] = useState(false)

  const openModal = (e) => {
    setImage(e.target.src)
    setImageId(e.target.id)
    setModal(true)
  } */

 /*  const close = () => setModal(false) */

 /*  const anterior = (id) => {
    const length = imagesGalery.length
    if (id < 1) {
      setImageId(length - 1)
      setImage(imagesGalery[length - 1])
    } else {
      setImageId(Number(id) - 1)
      setImage(imagesGalery[Number(id) - 1])
    }
  } */

/*   const siguiente = (id) => {
    const length = imagesGalery.length
    if (id >= length - 1) {
      setImage(imagesGalery[0])
      setImageId(0)
    } else {
      setImage(imagesGalery[Number(id) + 1])
      setImageId(Number(id) + 1)
    }
  } */



  return <>

    {imagesGalery.map((item)=>{
      return <ImagesSection images={item.images} title={item.title} />
    })}
    

    {/* <Modal id={imageId} image={image} active={modal} close={close} anterior={anterior} siguiente={siguiente} />
    <div class="content-image">
      {imagesGalery.map((img, index) => {
        return <div class="box">
          <img onClick={(e) => openModal(e)}
            id={index}
            class="img-detail"
            src={img}
            alt="remodelaciones en costa rica"
          />
        </div>
      })}

    </div> */}
  </>
}
