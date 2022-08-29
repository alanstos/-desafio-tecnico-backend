const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('kanban.db');

console.log("executando ...")
db.serialize(() => {
    db.run("CREATE TABLE if not exists card (id TEXT, titulo TEXT, conteudo TEXT, lista TEXT)");

    console.log("finalizado!")
});

db.close();