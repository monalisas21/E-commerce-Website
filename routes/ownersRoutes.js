const express = require("express");
const router = express.Router();
const ownerModel = require('../models/owner-model');

router.get("/", function(req, res) {
    res.send("hey owner");
});

if (process.env.NODE_ENV === "development") {
    router.post("/create", async function(req, res) {
        try {
            let owners = await ownerModel.find();
            if (owners.length > 0) {
                return res.status(503).send("You don't have permission to create new owner");
            }

            let { fullname, email, password } = req.body;

            let createdOwner = await ownerModel.create({
                fullname,
                email,
                password,
            });

            res.status(201).send(createdOwner);
        } catch (err) {
            res.status(500).send("Internal Server Error");
        }
    });

    // Temporary route to clear owners for testing
    router.delete("/clear", async function(req, res) {
        await ownerModel.deleteMany({});
        res.send("All owners cleared");
    });
}

module.exports = router;