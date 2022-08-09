export const register = (req, res) => {
  console.log(req.body);
  res.json({ ok: "Prueba Register Pasada" });
};

export const login = (req, res) => {
  res.json({ ok: "Prueba Login Pasada" });
};
