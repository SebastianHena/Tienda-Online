import Form from 'react-bootstrap/Form';

export const CardContact = () => {
    return (
        <Form className='w-1/2 grid gap-4 p-4 bg-gray-200 rounded-lg'>

            <Form.Group className='grid gap-4'>
                <Form.Label className="text-lg font-semibold">Nombre completo</Form.Label>
                <Form.Control
                    type="text"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </Form.Group>

            <Form.Group className='grid gap-4'>
                <Form.Label className="text-lg font-semibold">Número celular</Form.Label>
                <Form.Control
                    type="number"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </Form.Group>

            <Form.Group className='grid gap-4'>
                <Form.Label className="text-lg font-semibold">Email</Form.Label>
                <Form.Control
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </Form.Group>

            <Form.Group className='grid gap-4'>
                <Form.Label className="text-lg font-semibold">Mensaje</Form.Label>
                <Form.Control
                    as="textarea"
                    required
                    placeholder='¡Envianos un mensaje con el motivo de tu contacto!'
                    rows={5}
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </Form.Group>

            <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out">
                Enviar</button>
        </Form>
    )
}
