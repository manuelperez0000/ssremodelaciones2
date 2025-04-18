import ImagesSection from "./imagesSection";
import imagesGallery from './imagesGallery.json'

export const Galeria = () => {
  return <>            
    {imagesGallery.map((item) => {
      return <ImagesSection images={item.images} title={item.title} videos={item.videos} />
    })}
  </>
}
