var express = require("express");

// console.log(burger);
var router = express.Router();

var db = require("../models");


router.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (burgerBd) {
        // console.log(burgerBd);

        res.render("index", { burgerBd });
    });
});

router.get("/api/burgers", function (req, res) {
    db.Burger.findAll({}).then(function (burgerBd) {
        res.json(burgerBd);
    });
});






// Route to create another burger
router.post('/burgers/create', function (req, res) {
    var burgerName = {
        burger_name: req.body.burger_name
    }
    db.Burger.create(burgerName).then(function (burgerCr) {
        res.redirect("/");
    }).catch(function (err) {
        console.log(err)
    });
});



router.put("/burgers/update/:id", function (req, res) {
    var devoured = {
        devoured: true,
    }
    db.Burger.update(devoured, { where: { id: req.params.id } }).then(function () {
        res.redirect('/');
    }).catch(function (err) {
        console.log(err)
    });
});


// exporting the router
module.exports = router;