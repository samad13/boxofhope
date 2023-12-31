import { DataSource } from "typeorm";
import { Agency } from "../Entities/agency.entity";
import { User } from "../Entities/User.entitty"



const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: 'kingsam',
    database: "boxofhope",
    entities: [User, Agency],
    logging: true,
    synchronize: true,

})

export default AppDataSource;