import "reflect-metadata"
import express, { Request, Response } from 'express';
import { User } from "./Entities/User.entitty";
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
  let userRepo = AppDataSource.getRepository(User);

  // const course1 = new Course();
  // course1.code = "CS-001";
  // course1.title = "Computer Programming"; use this agency

  const user = new User();
  user.email = "smadays@gmail.com";
  user.firstName = "Ahmad";
  user.lastName = "Asad";
  user.contactNumber = 5555555;
  user.address = "Asad";
  user.postcode = "Asad";
  user.benefit = true;
  user.consent = true;
  user.available = true;
  user.houseDemography = "Asad";
  user.ethnicity = "Asad";
  user.age = 18_24;
  user.benefits = "Asad";
  //user.timeOfCollection =  Date;
  //user.agency= [agency];


  let savedUser = await userRepo.find()


  res.json(savedUser);



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





