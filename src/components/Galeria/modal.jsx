export const Modal = ({ close, active, image, anterior, siguiente, id }) =>
    active &&
    <div className='bg-modal'>
        <div class='body-modal'>
            {image ? <img class={'img-modal-ext'} src={image} alt={'remodelaciones en costa rica'} /> : <h1>Sin imagen que mostrar</h1>}
        </div>
        <div class={'modal-buttons'}>
            <button onClick={() => anterior(id)} class={'modal-arrows'}> <i class={'bi bi-chevron-left'} /> </button>
            <button class={'btn-close-modal'} onClick={close}> <i class={'bi bi-x'} /> Cerrar </button>
            <button onClick={() => siguiente(id)} class={'modal-arrows'}> <i class={'bi bi-chevron-right'} /> </button>
        </div>
    </div>
