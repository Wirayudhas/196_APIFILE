module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define(
        'Komik',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            judul: {
                type: DataTypes.STRING,
                allowNull: false
            },
            deskripsi: {
                type: DataTypes.STRING,
                allowNull: false
            },
            penulis: {
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
