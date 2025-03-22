export const Modal = ({ close, active, image, anterior, siguiente, id }) =>
    active &&
    <div className='bg-modal'>
        <div class='body-modal'>
            {image ? <img class={'img-modal-ext'} src={image} alt={'remodelaciones en costa rica'} /> : <p>Sin imagen que mostrar</p>}
        </div>
        <div class={'modal-buttons'}>
            <button onClick={() => anterior(id)} class={'modal-arrows'}> <i class={'bi bi-chevron-left'} /> </button>
            <button class={'btn-close-modal'} onClick={close}> <i class={'bi bi-x'} /> Cerrar </button>
            <button onClick={() => siguiente(id)} class={'modal-arrows'}> <i class={'bi bi-chevron-right'} /> </button>
        </div>
    </div>
