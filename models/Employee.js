module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("Employee", {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50)
        },
        phone_number: {
            type: DataTypes.STRING(16)
        },
        job_title: {
            type: DataTypes.STRING(25)
        }
    });

    return Employee;
}