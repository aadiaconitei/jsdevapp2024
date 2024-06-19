import { User } from "./../types/User";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";
// Get all users
export const findAll = (callback: Function) => {
  const queryString = `SELECT * FROM jsusers`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const users: User[] = [];
    rows.forEach((row) => {
      const user: User = {
        id: row.id,
        nume: row.nume,
        prenume: row.prenume,
        email: row.email,
        datanastere: row.datanastere,
        telefon: row.telefon,
        cnp: row.cnp,
        dataadaugare: row.dataadaugare,
        poza: row.poza,
        actiune: "",
      };
      users.push(user);
    });
    callback(null, users);
  });
};
// Get one user
export const findOne = (userId: number, callback: Function) => {
  const queryString = `SELECT * FROM jsusers WHERE id=?`;
  db.query(queryString, userId, (err, result) => {
    if (err) {
      callback(err);
    }

    const row = (<RowDataPacket>result)[0];
    const user: User = {
      id: row.id,
      nume: row.nume,
      prenume: row.prenume,
      email: row.email,
      datanastere: row.datanastere,
      telefon: row.telefon,
      poza: row.poza,
      cnp: row.cnp,
      //dataadaugare: row.dataadaugare,
    };
    callback(null, user);
  });
};
// create user
export const create = (user: User, callback: Function) => {
  //let mydate = user.datanastere.toISOString().split('T')[0]
  const queryString =
    "INSERT INTO jsusers (nume, prenume, email, datanastere, telefon, poza, cnp) VALUES (?, ?, ?, ?, ?, ?, ?)";
  console.log(user);
  db.query(
    queryString,
    [
      user.nume,
      user.prenume,
      user.email,
      user.datanastere,
      user.telefon,
      user.poza,
      user.cnp,
    ],
    (err, result) => {
      if (err) {
        callback(err);
      }

      const insertId = (<OkPacket>result).insertId;
      callback(null, insertId);
    }
  );
};

// update user
export const update = (user: User, callback: Function) => {
  // let mydate = user.datanastere.toISOString().split("T")[0];
  const queryString = `UPDATE jsusers SET nume=?, prenume=?,email=?, telefon=?,datanastere=?, poza=?, cnp=? WHERE id=?`;

  db.query(
    queryString,
    [
      user.nume,
      user.prenume,
      user.email,
      user.telefon,
      user.datanastere,
      user.poza,
      user.cnp,
      user.id
    ],
    (err, result) => {
      if (err) {
        console.log("sunt aici", err);
        callback(err);
       
      }
      
      callback(null);
    }
  );
};
// delete user
export const deleteUser = (user: number, callback: Function) => {
  console.log(user);
  const queryString = `DELETE FROM jsusers WHERE id=?`;

  db.query(queryString, [user], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};
