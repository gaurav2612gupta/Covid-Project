

exports.getHome = function (req, res, next) {
  
    res.render("../view/home");
  
};
exports.getSearch = function (req, res, next) {
  
    res.render("../view/search");
  
};
exports.getRegister = function (req, res, next) {
  
    res.render("../view/register");
  
};