
var friends = require("../data/friends.js");

module.exports = function(app){

app.get("/api/friends", function(req, res) {
   res.json(friends);
});
app.post("/api/friends", function(req, res) {
  var addFriend = req.body; //
  addFriend.name = addFriend.name.charAt(0).toUpperCase() + addFriend.name.slice(1);
  friends.push(addFriend);
  res.json(friends);

});
};
