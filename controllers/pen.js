var pen = require('../models/pen');
// List of all pens
// List of all pens
exports.pen_list = async function(req, res) {
try{
thepen = await pen.find();
res.send(thepen);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// VIEWS
// Handle a show all view
exports.pen_view_all_Page = async function(req, res) {
    try{
    thepen = await pen.find();
    res.render('pen', { title: 'pen Search Results', results: thepen });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific pen.
// for a specific Costume.
exports.pen_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await pen.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    // Handle pen create on POST.
// Handle Costume create on POST.
exports.pen_create_post = async function(req, res) {
console.log(req.body)
let document = new pen();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.pen_brand = req.body.pen_brand;
document.ink_color = req.body.ink_color;
document.cost = req.body.cost;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle pen delete from on DELETE.
exports.pen_delete = function(req, res) {
res.send('NOT IMPLEMENTED: pen delete DELETE ' + req.params.id);
};
// Handle pen update form on PUT.
// Handle Costume update form on PUT.
exports.pen_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await pen.findById( req.params.id)
// Do updates of properties
if(req.body.pen_type)
toUpdate.pen_type = req.body.pen_type;
if(req.body.pen) toUpdate.pen = req.body.pen;
if(req.body.pen) toUpdate.pen = req.body.pen;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};