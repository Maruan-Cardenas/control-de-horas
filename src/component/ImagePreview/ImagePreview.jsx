import './ImagePreview.css'

const ImagePreview = ({ image, handleSetImgForm, handleReset }) => {
  return (
    <section>
      {
        image
          ? <div className='imagePreview-container'><img src={image} alt='foto' /><button type='button' onClick={handleSetImgForm}>Si</button><button type='button' onClick={handleReset}>No</button></div>
          : null
      }
    </section>
  )
}

export default ImagePreview
