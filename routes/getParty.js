const Party = require('../model/partySchema.js');

const express = require("express");

const router = express.Router();

// Retrieving parties
router.get("/party-list", async (req, res) => {
    try{
        const PartyList = await Party.find();
        console.log("Data Retrieved");
        return res.status(200).json({ PartyList});
    }catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Party list could not be retrieved" });
    }
});

module.exports = router;