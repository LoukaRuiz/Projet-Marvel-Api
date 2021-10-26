const getComics = async(req, res) => {
    let comics = await axios.get('comics')
    .catch(function (error) {
      res.json(error)
    })
  res.json(comics.data)
};
