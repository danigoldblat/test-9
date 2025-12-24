export const Auth = async (req, res) => {
  try {
    res.json({ ok: true });
  } catch (error) {
    res.status(401).dend("server not the dfinf");
  }
}