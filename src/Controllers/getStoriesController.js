e const getStories = async(req, res) => {
    let Stories = await axios.get('Stories')
    .catch(function (error) {
      res.json(error)
    })

  res.json(Stories.data)
};

