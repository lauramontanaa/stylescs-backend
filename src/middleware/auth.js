const Person = require('../models/Person');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');

const Login = async (req, res) => {
    const { correo, contraseña } = req.body; 

    try {
        const persona = await Person.findOne({ where: { per_mail: correo } });
        if (!persona) {
            return res.status(401).json({ message: 'Correo o contraseña incorrecta' });
        }

        const coincidencia = await bcrypt.compare(contraseña, persona.per_password);
        if (!coincidencia) {
            return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
        }

        const token = jwt.sign({ id: persona.per_id }, 'tu_clave_secreta', { expiresIn: '1h' });
        res.json({ message: 'Login exitoso', token });

    } catch (err) {
        console.error('Error en el servidor:', err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

module.exports = {
    Login, 
};
