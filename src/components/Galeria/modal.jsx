import { useRef, useState, useEffect } from "preact/hooks"

export const Modal = ({ close, active, image, anterior, siguiente, id }) => {

    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const imgRef = useRef(null);

    useEffect(() => {
        if (scale === 1) setPosition({ x: 0, y: 0 }); // Reset position when zoom is reset
    }, [scale]);

    const handleWheel = (e) => {
        e.preventDefault();
        setScale((prevScale) => Math.min(Math.max(prevScale + e.deltaY * -0.001, 1), 5));
    };

    const handleMouseDown = (e) => {
        setDragging(true);
        setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    /* const handleMouseMove = (e) => {
        if (!dragging ) return;
        const img = imgRef.current;
        const container = img.parentElement;
        const maxX = (img.width * scale - container.clientWidth) / 2;
        const maxY = (img.height * scale - container.clientHeight) / 2;

        let newX = e.clientX - startPos.x;
        let newY = e.clientY - startPos.y;

        // Restringir dentro de los límites
        newX = Math.max(-maxX, Math.min(maxX, newX));
        newY = Math.max(-maxY, Math.min(maxY, newY));

        setPosition({ x: newX, y: newY });
    }; */

    const handleMouseUp = () => setDragging(false);
    return active &&
        <div className='bg-modal'>
            <div class='body-modal' onWheel={handleWheel}>
                {image ? <img
                    ref={imgRef}
                    class={'img-modal-ext'}
                    src={image}
                    alt={'remodelaciones en costa rica'}
                    style={{
                        transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                        transition: dragging ? "none" : "transform 0.2s ease-out",
                    }}
                    onMouseDown={handleMouseDown}
                    /* onMouseMove={handleMouseMove} */
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    draggable="false"
                /> : <p>Sin imagen que mostrar</p>}
            </div>
            <div class={'modal-buttons mb-5 mb-md-5 mb-lg-1'}>
                <button onClick={() => anterior(id)} class={'modal-arrows'}> <i class={'bi bi-chevron-left'} /> </button>
                <button class={'btn-close-modal'} onClick={close}> <i class={'bi bi-x'} /> Cerrar </button>
                <button onClick={() => siguiente(id)} class={'modal-arrows'}> <i class={'bi bi-chevron-right'} /> </button>
            </div>
        </div>
}

