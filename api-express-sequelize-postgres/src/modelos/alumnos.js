module.exports = (sequelize, Sequelize) => {
        const Alumnos = sequelize.define('alumnos123', {
            id: {
                type: Sequelize.SMALLINT,
                primaryKey: true,
                autoIncrement: true
            },
            nombres: Sequelize.STRING,
            apellidos: Sequelize.STRING,
            doc_identidad: Sequelize.STRING
        });
        return Alumnos; }