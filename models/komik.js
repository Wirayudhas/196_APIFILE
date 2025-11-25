module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define(
        'Komik',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false
            },
            imageType: {
                type: DataTypes.STRING
            },
            imageName: {
                type: DataTypes.STRING
            },
            imageData: {
                type: DataTypes.BLOB('long')
            }
        },
        {
            tableName: 'komik'
        }
    );

    return Komik;
};
