'use strict'
const mongoose = require('mongoose')
const User = mongoose.model('Users')

exports.listAllUsers = function (req, res) {
    var query = { sort: { firstName: 1 } }
    User.find({}, null, query, function (err, user) {
        if (err) throw err
        res.json(user)
    })
}

exports.createAUser = function (req, res) {
    var newUser = new User(req.body)
    newUser.save(function (err, user) {
        if (err) throw err
        res.json(user)
    })
}

exports.readAUser = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err) throw err
        res.json(user)
    })
}

exports.deleteAUser = function (req, res) {
    User.findByIdAndRemove(req.params.userId, function (err, user) {
        if (err) throw err
        const response = {
            message: "Delete user id: " + req.params.userId + " successfully",
            id: user._id
        }
        res.json(response)
    })
}

exports.updateAUser = function (req, res) {
    var newUser = {}
    newUser = req.body
    User.findByIdAndUpdate(req.params.userId, newUser, {
        new: true
    }, function (err, user) {
        if (err) throw err
        res.json(user)
    })
}