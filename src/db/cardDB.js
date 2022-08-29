const { v4: uuidv4 } = require('uuid');
const sqlite3 = require('sqlite3').verbose()


const findAll = () => {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('kanban.db')
        db.serialize(() => {
            db.all("SELECT id, titulo, conteudo, lista FROM card", (err, rows) => {
                resolve(rows)
            })
            db.close()
        })
    }) 
}

const findById = (id) => {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('kanban.db')
        db.serialize(() => {
            const sql = "SELECT id, titulo, conteudo, lista FROM card WHERE id = ?"
            db.get(sql, [id], (err, row) => {
                resolve(row)
            })
            db.close()
        })
    }) 
}

const create = (card) => {
    const id = uuidv4()
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('kanban.db')
        db.serialize(() => {
            const stmt = db.prepare("INSERT INTO card VALUES (?, ?, ?, ?)");
            stmt.run(id, card.titulo, card.conteudo, card.lista);
            stmt.finalize()

            const sql = "SELECT id, titulo, conteudo, lista FROM card WHERE id = ?"
            db.get(sql, [id], (err, row) => {
                resolve(row)
            })
            db.close()
        })
    })
}

const update = (id, card) => {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('kanban.db')
        db.serialize(() => {
            const data = [card.titulo, card.conteudo, card.lista, id];
            const query = `UPDATE card
                        SET titulo = ?, conteudo = ?, lista = ?
                        WHERE id = ?`;

            db.run(query, data, (err) => {
                if (err) reject(err)
            })

            const sql = "SELECT id, titulo, conteudo, lista FROM card WHERE id = ?"
            db.get(sql, [id], (err, row) => {
                resolve(row)
            })
            db.close()
        })
    })
}

const remove = (id) => {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('kanban.db')
        db.serialize(() => {
            const sql = `DELETE FROM card WHERE id = ?`;

            db.run(sql, [id], (err) => {
                if (err) reject(err)
            })
            
            db.all("SELECT id, titulo, conteudo, lista FROM card", (err, rows) => {
                resolve(rows)
            })
            db.close()
        })
    })
}

module.exports = { findAll, findById, create, update, remove }
