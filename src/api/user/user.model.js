import mongoose, { mongo } from 'mongoose'

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      min: [6, 'Your password must be more than 6 characters'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    address: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

UserSchema.path('email').validate(async (email) => {
  const user = await User.findOne({ email })
  if (user) {
    return false
  }
  return true
}, 'Email is already taken')

const User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User
