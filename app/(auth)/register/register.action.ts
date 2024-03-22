'use server';

import { connectDB } from '@/lib/db/connectDb';
import { UserModel } from '@/lib/db/model/userModel';
import { sendErrorResponse, sendSuccessResponse } from '@/utils/api.helper';

export async function RegisterAction(formData: FormData) {
  try {
    await connectDB();

    const phone = formData.get('phone');
    const name = formData.get('name');
    const password = formData.get('password');

    // checking if user already exist
    const user = await UserModel.findOne({ phone: phone as string });
    console.log(user);
    if (user) throw new Error('User Already Exist');

    await UserModel.create({ phone, name, password });
    return sendSuccessResponse({ data: null, message: 'User Created' });
  } catch (err) {
    if (err instanceof Error) return sendErrorResponse(err.message);
    return sendErrorResponse(JSON.stringify(err));
  }
}
