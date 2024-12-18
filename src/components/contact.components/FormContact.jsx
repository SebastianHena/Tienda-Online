import Form from 'react-bootstrap/Form';

export const FormContact = () => {
    return (
        <>
            <section className='flex justify-center justify-items-center w-full h-auto'>
                <article className='w-full sm:w-1/2 ml-4'>
                    <Form className='w-full grid gap-4 p-8'>
                        <Form.Group className='grid gap-4'>
                            <Form.Label className="text-lg text-black font-semibold">Nombre completo</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                className="w-full text-black p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-50" />
                        </Form.Group>

                        <Form.Group className='grid gap-4'>
                            <Form.Label className="text-lg text-black font-semibold">Número celular</Form.Label>
                            <Form.Control
                                type="number"
                                required
                                className="w-full text-black p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-50" />
                        </Form.Group>

                        <Form.Group className='grid gap-4'>
                            <Form.Label className="text-lg text-black font-semibold">Email</Form.Label>
                            <Form.Control
                                type="email"
                                required
                                placeholder="name@example.com"
                                className="w-full text-black p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-50" />
                        </Form.Group>

                        <Form.Group className='grid gap-4'>
                            <Form.Label className="text-lg text-black font-semibold">Mensaje</Form.Label>
                            <Form.Control
                                as="textarea"
                                required
                                placeholder='¡Envianos un mensaje con el motivo de tu contacto!'
                                rows={5}
                                className="p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-50" />
                        </Form.Group>

                        <button
                            className="bg-green-button text-black font-semibold py-2 px-4 rounded-md hover:bg-green-custom transition-colors duration-300 ease-in-out">
                            Enviar</button>
                    </Form>
                </article>
                <article className='w-0 sm:w-[45%]'>
                    <img src="/imgs/carrusel1.jpg" alt="" className='w-full h-full' />
                </article>
            </section>

        </>
    )
}