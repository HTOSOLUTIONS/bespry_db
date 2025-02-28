import mysql2 from 'mysql2'
import { Sequelize } from 'sequelize'
import { dbName, username, password, host } from '../../config'



const sequelize = new Sequelize(dbName, username, password, {
  host: host,
  dialect: 'mysql',
  dialectModule: mysql2
})

export default sequelize


