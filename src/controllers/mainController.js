const path = require("path");

const mainController = {
        home: (req,res) =>{
                return res.render("index.ejs");               
}
}

module.exports = mainController;


