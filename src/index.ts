import "reflect-metadata"
import express, { Request, Response } from 'express';
import { User } from "./Entities/User.entitty";
import { AgeBracket } from "./Entities/User.entitty"
import { Agency } from "./Entities/agency.entity";
import AppDataSource from "./datasource/dataSource";

const PORT = 3000;
const app = express();

AppDataSource.initialize().then(() => {
  console.log("Database connection established!");
  app.listen(PORT, () => {
    console.log(`Server starting on PORT: ${PORT}`)
  })
}).catch((err) => {
  console.log("Error connecting to database:", err);
})


app.get('/', async (req: Request, res: Response) => {


})

app.post('/', async (req: Request, res: Response) => {
  let agencyRepo = AppDataSource.getRepository(Agency);

  //first user
  const user1 = new User();
  user1.email = "adekule@gmail.com";
  user1.firstName = "adekulnle";
  user1.lastName = "isiak";
  user1.contactNumber = 555555555;
  user1.address = "bodija";
  user1.postcode = "202220";
  user1.benefit = true;
  user1.consent = true;
  user1.available = true;
  user1.houseDemography = "not sure";
  user1.ethnicity = "black";
  user1.age = AgeBracket._18_24;
  user1.benefits = "it true o";
  user1.timeOfCollection = new Date();
  //user.agency = agency1;

  //second user
  const user2 = new User();
  user2.email = "smadays@gmail.com";
  user2.firstName = "amina";
  user2.lastName = "Adeoti";
  user2.contactNumber = 555555555;
  user2.address = "bodija";
  user2.postcode = "202220";
  user2.benefit = true;
  user2.consent = true;
  user2.available = true;
  user2.houseDemography = "not sure";
  user2.ethnicity = "black";
  user2.age = AgeBracket._25_34;
  user2.benefits = "it true o";
  user2.timeOfCollection = new Date();
  //user.agency = agency1;

  //3rd user 
  const user3 = new User();
  user3.email = "smadays@gmail.com";
  user3.firstName = "Ahmad";
  user3.lastName = "Asad";
  user3.contactNumber = 555555555;
  user3.address = "bodija";
  user3.postcode = "202220";
  user3.benefit = true;
  user3.consent = true;
  user3.available = true;
  user3.houseDemography = "not sure";
  user3.ethnicity = "black";
  user3.age = AgeBracket._OVER_65;
  user3.benefits = "it true o";
  user3.timeOfCollection = new Date();
  //user.agency = agency1;

  const agency1 = new Agency();
  agency1.name = "The faithful group";
  agency1.organisation = "The faithful group association";
  agency1.email = "faithful@gmail.com";
  agency1.contact = "08187145866";
  agency1.users = [user1, user2, user3]

  let savedAgency = await agencyRepo.find({
    relations: ["user"]
  })


  res.json(savedAgency);



})





// let studentRepo = AppDataSource.getRepository(Student);
// let coursesRepo = AppDataSource.getRepository(Course);

// const course1 = new Course();
// course1.code = "CS-001";
// course1.title = "Computer Programming";

// const course2 = new Course();
// course2.code = "CS-002";
// course2.title = "Web Programming";

// const student = new Student();
// student.age = 22;
// student.firstName = "Ahmad";
// student.lastName = "Asad";
// student.rollNo = "ST-001";
// student.courses = [course1, course2];


// // let savedStudent = await studentRepo.find()
// let savedStudent = await coursesRepo.find({
//     relations: ["students"]
// });

// res.json(savedStudent);




// });


// let userRepo = AppDataSource.getRepository(User);

// const todo1 = new Todo();
// todo1.title = 'Typeorm';
// todo1.description = 'learn typorm with samad'

// const todo2 = new Todo();
// todo2.title = 'nestjs';
// todo2.description = 'learn nestjs with samad'

// const todo3 = new Todo();
// todo3.title = 'docker';
// todo3.description = 'learn docker with samad'

// const user = new User()
// user.firstName = 'assade';
// user.lastName = 'alawaite';
// user.isActive = true;
// user.todos = [todo1, todo2, todo3];

// let savedUser = await userRepo.save(user);

// res.json(savedUser)


//let userRepo = AppDataSource.getRepository(User);
// let profileRepo = AppDataSource.getRepository(Profile)
// let profile = new Profile()
// profile.gender = "female";
// profile.skill = "programmer";


// let user = new User()
// user.firstName = "da";
// user.lastName = "yusuf";
// user.isActive = true,
//     user.profile = profile;

// let savedUser = await userRepo.save(user);

// let savedProfile = await profileRepo.find({
//     relations: ['user']
// });



//let allUser = await userRepo.find()
//res.json(savedProfile)

// const user1 = new User();
// user1.firstName = "samad";
// user1.lastName = "yusuf"
// user1.isActive = true;


// const user2 = new User();
// user2.firstName = "amina";
// user2.lastName = "sheriff";
// user2.isActive = true;

// const user3 = new User();
// user3.firstName = "toheeb";
// user3.lastName = "ashore";
// user3.isActive = true;

// res.json(await userRepo.save([user1, user2, user3]))





