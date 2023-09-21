module.exports = (sequelize, dataTypes) => {
    
    const alias = "Genre";
    
    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        ranking : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique: true
        },
        active : {
            type : dataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : 1
        }
    }

    const config = {
        tableName : "genres", // sesible a mayusculas y minisculas
        timestamps : true, // hay que aclarar si la tabla tiene marca de tiempo o no, sino rompe
        underscored : true // tipo de formato que estan escritos camel o unders, etc
    }
    
    const Genre = sequelize.define(alias, cols, config);

    return Genre

}