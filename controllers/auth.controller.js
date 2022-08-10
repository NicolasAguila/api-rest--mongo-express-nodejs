import { User } from '../models/User.js';

export const register = async (req, res) => {
  const {email, password} = req.body;
  try{
    // alternativa buscando por email
    let user = await User.findOne({email});
    if(user) throw ({ code: 11000 });

    user = new User({ email, password });
    await user.save();

    //JWT token

    return res.status(201).json({ok: true});
  }catch(error) {
    console.log(error);
    // Alternativa por defecto mongoose
    if(error.code === 11000){
      return res.status(400).json({ error: "Ya existe este usuario" });
    }
    return res.status(500).json({ error: "Error de servidor" });
  }
};

export const login = async (req, res) => {
  res.json({ ok: "Prueba Login Pasada" });
};
