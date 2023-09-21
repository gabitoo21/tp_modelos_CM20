module.exports = (sequelize, dataTypes) => {
    
    const alias = "Actor";
    
    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        first_name : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        last_name : {
            type : dataTypes.STRING(100),
            allowNull : false
        }
    }

    const config = {
        tableName : "actors", // sesible a mayusculas y minisculas
        timestamps : true, // hay que aclarar si la tabla tiene marca de tiempo o no, sino rompe
        underscored : true // tipo de formato que estan escritos camel o unders, etc
    }
    
    const Actor = sequelize.define(alias, cols, config);

    return Actor

}