import { Test, TestingModule } from '@nestjs/testing';
import { UserDTO } from '../dto/user.dto';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';
import{UserEntity} from "../../../db/entities/users.entity"

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  it('should call userService.createUser with correct arguments', async () => {
    const userDTO: UserDTO = { 
      
            "name": "Leandro Hassum",
            "email": "gutajvieira11@gmail.com",
            "username": "Hassum",
            "password": "1234", 
            "role": "Mock",
            "coin": 0,
            "typeuser": 3
    };
    const createUserSpy = jest.spyOn(userService, 'createUser');

    await userController.createUser(userDTO);

    expect(createUserSpy).toHaveBeenCalledWith(userDTO);
  });
});