const Party = require('../models/partySchema.js');

const express = require("express");

const router = express.Router();

// Retrieving parties
router.get("/party-list", async (req, res) => {
    try{
        const PartyList = await Party.find();
        console.log("Data Retrieved");
        return res.status(200).json({ Posts });
    }catch (error) {
        console.error(error);
        return res.status(500).json({ errorMessage: "Party list could not be retrieved" });
    }
});

module.exports = router;