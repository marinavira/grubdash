//importing dependencies
const path = require("path");

const dishes = require(path.resolve("src/data/dishes-data"));

//utility function
const nextId = require("../utils/nextId");


//middleware functions
function bodyDataHas(propertyName) {
    return function (req, res, next) {
        const { data = {} } = req.body;
        if (data[propertyName]) {
            return next()
        }
        next({
            status: 400,
            message: `Must include a ${propertyName}`
        })
    }
}


function validatePrice(req, res, next) {
    const { data: { price } = {} } = req.body;

    if (price > 0 && typeof price === 'number') {
        return next()
    }
    return next({
        status: 400,
        message: `The price must be a number, and greater than 0.`
    })
}


//route middleware functions
function idExists(req, res, next) {
    const { dishId } = req.params;
    const foundDish = dishes.find(dish => dish.id === dishId)

    if (foundDish) {
        res.locals.dish = foundDish;
        return next()
    }
    next({
        status: 404, message: `Dish does not exist: ${dishId}.`
    })
}



function idMatches(req, res, next) {

    const { dishId } = req.params;
    const { data: { id } = {} } = req.body;

    if (id && id !== dishId) {
        next({
            status: 400,
            message: `Dish id does not match route id. Dish: ${id}, Route: ${dishId}`
        })
    } else {
        return next()
    }

}


//route handlers
function list(req, res, next) {
    res.json({ data: dishes })
}



function create(req, res, next) {

    const { data: { name, description, price, image_url } = {} } = req.body;

    const newDish = {
        id: nextId(),
        name,
        description,
        price,
        image_url
    }

    dishes.push(newDish)
    res.status(201).json({ data: newDish })
}



function read(req, res, next) {

    res.json({ data: res.locals.dish })
}


function update(req, res, next) {

    const { data: { name, description, price, image_url } = {} } = req.body;

    let dish = res.locals.dish;

    dish.name = name
    dish.description = description
    dish.price = price
    dish.image_url = image_url

    res.json({ data: dish })

}

//exports
module.exports = {
    list,
    create: [bodyDataHas("name"), bodyDataHas("description"), bodyDataHas("price"), bodyDataHas("image_url"), validatePrice, create],
    read: [idExists, read],
    update: [idExists, idMatches, bodyDataHas("name"), bodyDataHas("description"), bodyDataHas("price"), bodyDataHas("image_url"), validatePrice, update],

}

