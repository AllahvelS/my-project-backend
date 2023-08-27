const checkTitle = (req, res, next) => {
    if (req.body.title) {
        next();
    } else {
        res.status(400).json({ error: "Title is required" });
    }
}

const checkBoolean = (req, res, next) => {
    const { is_important } = req.body;
    if (
        is_important == "true" || is_important == true ||
        is_important == "false" || is_important == false ||
        is_important == undefined
    ) {
        next();
    } else {
        res.status(400).json({ error: "is_important must be a boolean value" });
    }
};

module.exports = { checkBoolean, checkTitle };
