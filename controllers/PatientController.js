const Patient = require("../models/Patient");

class PatientController {
  static getAllPatients(req, res) {
    Patient.getAllPatients((err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error: " + err.message });
      }
      res.status(200).json({ data: results });
    });
  }

  static getPatientById(req, res) {
    const { id } = req.params;
    Patient.getPatientById(id, (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error: " + err.message });
      }
      if (!result.length) {
        return res.status(404).json({ message: "Patient not found" });
      }
      res.status(200).json({ data: result[0] });
    });
  }

  static createPatient(req, res) {
    const { name, phone, address, status, in_date_at, out_date_at } = req.body;
    if (!name || !phone || !address || !status || !in_date_at) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }
    const newPatient = { name, phone, address, status, in_date_at, out_date_at: out_date_at || null };
    Patient.createPatient(newPatient, (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error: " + err.message });
      }
      res.status(201).json({ message: "Berhasil menambahkan data pasien", id: result.insertId });
    });
  }

  static updatePatient(req, res) {
    const { id } = req.params;
    const { name, phone, address, status, in_date_at, out_date_at } = req.body;
    if (!name || !phone || !address || !status || !in_date_at) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }
    const updatedPatient = { name, phone, address, status, in_date_at, out_date_at };
    Patient.updatePatient(id, updatedPatient, (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error: " + err.message });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Patient not found" });
      }
      res.status(200).json({ message: "Patient updated successfully" });
    });
  }

  static deletePatient(req, res) {
    const { id } = req.params;
    Patient.deletePatient(id, (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error: " + err.message });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Patient not found" });
      }
      res.status(200).json({ message: "Patient deleted successfully" });
    });
  }
  static searchPatientByName(req, res) {
    const { name } = req.params;
    Patient.searchPatientByName(name, (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error: " + err.message });
      }
      if (!results.length) {
        return res.status(404).json({ message: "No patients found with that name" });
      }
      res.status(200).json({ data: results });
    });
  }

  // Method untuk mendapatkan pasien dengan status 'Positive'
  static getPositivePatients(req, res) {
    Patient.getPatientsByStatus("Positive", (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error: " + err.message });
      }
      res.status(200).json({ data: results });
    });
  }

  // Method untuk mendapatkan pasien dengan status 'Recovered'
  static getRecoveredPatients(req, res) {
    Patient.getPatientsByStatus("Recovered", (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error: " + err.message });
      }
      res.status(200).json({ data: results });
    });
  }

  // Method untuk mendapatkan pasien dengan status 'Dead'
  static getDeadPatients(req, res) {
    Patient.getPatientsByStatus("Dead", (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error: " + err.message });
      }
      res.status(200).json({ data: results });
    });
  }
}

module.exports = PatientController;
