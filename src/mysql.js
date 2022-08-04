// const mysql = require("mysql");
// const { Promisify } = require("./helpers");

// class MySQL {
//   constructor() {
//       console.debug("Preparing connection pool")
//     this.connectionPool = mysql.createPool({
//       host: process.env.DB_HOST,
//       database: process.env.DB_NAME,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASS,
//     });
//     console.log(process.env.DB_HOST)
//   }

//   getConnection() {
//     console.debug("Getting connection from pool");
//     return new Promise((resolve, reject) => {
//       this.connectionPool.getConnection(function (err, connection) {
//         if (err) {
//           console.debug("Connection error");
//           reject(err);
//         } else {
//           console.debug("Connection OK");
//           resolve(connection);
//         }
//       });
//     });
//   }

//   executeQuery(query) {
//     return this.getConnection()
//       .then(
//         (connection) => {
//           console.debug(`Sending query: ${query}`);
//           return Promisify((resolve, reject) => {
//             connection.query(query, (err, result, fields) => {
//               if(err) {
//                 throw Error(err);
//               } else {
//                 resolve({
//                   result: result,
//                   fields: fields
//                 });
//               }
//             });
//           });
//         },
//         (err) => {
//           throw Error(err);
//         }
//       );
//   }

//   selectAllFrom(tableName) {
//     const query = `SELECT * FROM ${tableName}`;
//     return this.executeQuery(query);
//   }

//   selectWhere(tableName, condition) {
//     const query = `SELECT * FROM ${tableName} WHERE ${condition}`;
//     return this.executeQuery(query);
//   }  
  
//   insertInto(tableName, columns, values) {
//     const query = `INSERT INTO ${tableName} (${columns}) VALUES (${values})`;
//     return this.executeQuery(query);
//   }

//   // insertNewUser(email = "", name, ...) {
//   //   const columns = ""
//   //   const values = ""
//   //   if(email != "") {
//   //     columns += "email"
//   //     values += email
//   //   }
//   // }

//   updateWhere(tableName, value1, value2, id) {
//     const query = `UPDATE ${tableName} SET ${value1}=${value2} WHERE ${id}=${id}`;
//     return this.executeQuery(query);
//   }

//   deleteFrom(tableName, id) {
//     const query = `DELETE FROM ${tableName} WHERE ${id}=${id}`;
//     return this.executeQuery(query);
//   }
// }

// const MYSQL = new MySQL();

// module.exports={
//   MYSQL:MYSQL
// };
