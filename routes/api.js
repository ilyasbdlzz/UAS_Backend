// import PatientController
const PatientController = require("../controllers/PatientController");
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/welcome", (req, res) => {
  res.send("Hello Covid API Express");
});

// Membuat routing patients
router.get("/patients", PatientController.getAllPatients); // Get All Resource
router.post("/patients", PatientController.createPatient); // Add Resource
router.put("/patients/:id", PatientController.updatePatient); // Edit Resource
router.delete("/patients/:id", PatientController.deletePatient); // Delete Resource
router.get("/patients/:id", PatientController.getPatientById); // Get Detail Resource
router.get("/patients/search/:name", PatientController.searchPatientByName); // Search Resource by name
router.get("/patients/status/positive", PatientController.getPositivePatients); // Get Positive Resource
router.get("/patients/status/recovered", PatientController.getRecoveredPatients); // Get Recovered Resource
router.get("/patients/status/dead", PatientController.getDeadPatients); // Get Dead Resource

// export router
module.exports = router;
