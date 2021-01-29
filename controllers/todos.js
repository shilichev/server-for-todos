module.exports.todos = (req, res)=>{
    res.status(200).json({
        todos: "from controller",
      });
}