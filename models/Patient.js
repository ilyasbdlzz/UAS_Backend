const db = require("../config/database");

class Patient {
  static getAllPatients(callback) {
    db.query("SELECT * FROM patients", callback);
  }

  static getPatientById(id, callback) {
    db.query("SELECT * FROM patients WHERE id = ?", [id], callback);
  }

  static createPatient(patient, callback) {
    const { name, phone, address, status, in_date_at, out_date_at } = patient;
    db.query(
      "INSERT INTO patients (name, phone, address, status, in_date_at, out_date_at) VALUES (?, ?, ?, ?, ?, ?)",
      [name, phone, address, status, in_date_at, out_date_at],
      callback
    );
  }

  static updatePatient(id, patient, callback) {
    const { name, phone, address, status, in_date_at, out_date_at } = patient;
    db.query(
      "UPDATE patients SET name = ?, phone = ?, address = ?, status = ?, in_date_at = ?, out_date_at = ? WHERE id = ?",
      [name, phone, address, status, in_date_at, out_date_at, id],
      callback
    );
  }

  static deletePatient(id, callback) {
    db.query("DELETE FROM patients WHERE id = ?", [id], callback);
  }

  static searchPatientByName(name, callback) {
    db.query("SELECT * FROM patients WHERE name LIKE ?", [`%${name}%`], callback);
  }

  static getPatientsByStatus(status, callback) {
    db.query("SELECT * FROM patients WHERE status = ?", [status], callback);
  }
}

module.exports = Patient;
