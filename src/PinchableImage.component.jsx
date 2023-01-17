import { useRef, useState } from 'react'
import Hammer from 'react-hammerjs'


const PinchableImage = ({
    imageId,
}) => {
    const imgRef = useRef()
    // const [scale, setscale] = useState(1) // scale of the image
    const [xLast, setxLast] = useState(0) // last x location on the screen
    const [yLast, setyLast] = useState(0) // last y location on the screen
    const [xImage, setxImage] = useState(0) // last x location on the image
    const [yImage, setyImage] = useState(0) // last y location on the image

    const handlePinch = (event) => {
        console.log(event)

        const posX = event.center.x
        const posY = event.center.y
        const { scale } = event

        // find current location on screen
        const xScreen = posX
        const yScreen = posY

        // find current location on the image at the current scale
        setxImage((+xImage + (xScreen - xLast) / scale).toFixed(4))
        setyImage((+yImage + (yScreen - yLast) / scale).toFixed(4))

        // setscale((s) => s + 1)

        // determine the location on the screen at the new scale
        const xNew = ((xScreen - +xImage) / scale).toFixed(3)
        const yNew = ((yScreen - +yImage) / scale).toFixed(3)

        // save the current screen location
        setxLast(xScreen)
        setyLast(yScreen)

        let transformOrigin = xImage + 'px ' + yImage + ' px'
        let transform = 'scale(' + scale + ') translate(' + xNew + 'px, ' + yNew + 'px)'
        console.log(transformOrigin, transform)
        imgRef.current.style.transformOrigin = transformOrigin
        imgRef.current.style.transform = transform

        console.log(imgRef.current.style.transformOrigin)

        // setTransformOrigin(`${xImage}px ${yImage}px !important`)
        // setTransform(`scale(${scale}) translate(${xNew}px, ${yNew}px) !important`)
    }

    return (
        <div>
            <Hammer
                onPinch={handlePinch}
                onTap={handlePinch}
                options={{
                    recognizers: {
                        pinch: { enable: true },
                    },
                }}
            >
                <div>
                    <img
                        ref={imgRef}
                        src={imageId}
                        alt="cover"
                    />
                </div>
            </Hammer>
        </div>
    )
}

export default PinchableImage
