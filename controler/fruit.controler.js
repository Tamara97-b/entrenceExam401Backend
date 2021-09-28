"use strict ";
const axios = require("axios");
const fruitModel = require("../model/fruit.model");

const getFruitApi = async (req, res) => {
  try {
    const fruitDtatApi = await axios.get(
      "https://fruit-api-301.herokuapp.com/getFruit"
    );
    res.send(fruitDtatApi.data);
  } catch (error) {
    res.send(error);
  }
};

const getOwnFruit = (req, res) => {
  fruitModel.find({ email: req.query.email }, (error, fruitDtat) => {
    res.json(fruitDtat);
  });
};

const createFruit = (req, res) => {
    const { name, image, price, email } = req.body;
    const newFruit = new fruitModel({ name, image, price, email });
    newFruit.save();
    res.json(newFruit);


};

const deleteFruit = (req, res) => {
    const fruitId = req.params._id;
    fruitModel.deleteOne({ _id: fruitId }, (error, deletedData) => {
        res.json(deletedData)
    
    
    })

}

const updateFruit = (req, res )=> {
    const { name, image, price, email } = req.body;
    const fruitId = req.params._id;
    fruitModel.findByIdAndUpdate({ _id: fruitId }, { name, image, price, email }, { new: true }, (error, updatedData))
    res.json(updatedData)
}

module.exports = {
  getFruitApi,
    getOwnFruit,
    createFruit,
    deleteFruit,
    updateFruit
  
};
