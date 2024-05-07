import Image from 'react-bootstrap/Image';

export const CardHome = ({ title, src }) => {
    return (
        <div className='flex flex-col gap-4 '>
            <Image
                src={src}
                fluid
                className='w-full h-96 p-4'/>
        </div>

    )
}