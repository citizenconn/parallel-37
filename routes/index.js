/**
 * User: citizen
 * Date: 8/13/12
 * Time: 9:09 PM
 */
exports.index = function (req, res) {
    res.render('index.html', {title:"P37--FUCK YEAH"});
};

exports.fbChannel = function(req, res){
  res.send('<script src="//connect.facebook.net/en_US/all.js"></script>');
}