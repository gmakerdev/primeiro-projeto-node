import { Router } from 'express';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

interface UserResponse {
  id: string;
  name: string;
  email: string;
  password?: string;
  created_at: Date;
  updated_at: Date;
}

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  const userReponse: UserResponse = { ...user };
  delete userReponse.password;

  return response.json({ userReponse, token });
});

export default sessionsRouter;
