'use server';

import { JWT_SECRET } from '@/config/config';
import { connectDB } from '@/lib/db/connectDb';
import { UserModel } from '@/lib/db/model/userModel';
import { sendErrorResponse, sendSuccessResponse } from '@/utils/api.helper';
import jwt from 'jsonwebtoken';

export async function LoginAction(formData: FormData) {
  try {
    await connectDB();
    const phone = formData.get('phone');
    const password = formData.get('password');

    // checking if user is exist or not
    const user = await UserModel.findOne({ phone: phone as string });
    if (!user) throw new Error('User does not exist');

    // checking password
    if (user.password !== password) throw new Error('Wrong Password');

    const { name } = user.toObject();
    const token = jwt.sign({ name, phone }, JWT_SECRET!, { expiresIn: '60d' });

    return sendSuccessResponse({
      data: { token },
      message: 'You are successfully logged in',
    });
  } catch (err) {
    if (err instanceof Error) return sendErrorResponse(err.message);
    return sendErrorResponse(JSON.stringify(err));
  }
}
