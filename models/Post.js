const {Model, DataTypes} = require('sequelize');
// const { model } = require('../config/connection');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        post_content: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        user_id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },

    {
        sequelize,
        freezeTableName: true,
        undeerscored: true,
        modelName: 'post'
    }

);

module.exports = Post;