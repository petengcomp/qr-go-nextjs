export default (req, res) => {
  if (req.method === 'POST') {
    if(req.body?.login === 'petengcomp' && req.body?.password === 'paraDEcao'){
      res.status(200).json({ status: 'Ok' });;
    }
    else{
      res.status(200).json({ status: 'Dados incorretos' });;;
    }
  } else {
    res.status(404).json({ name: 'Erro' });
  }
}
  