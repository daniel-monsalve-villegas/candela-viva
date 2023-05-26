import User from './user.model.js'

export const getUsers = async () => {
  return User.find()
}

export const getUser = async (id) => {
  const user = User.findById(id)
  return user
}

export const createUser = async (user) => {
  return User.create(user)
}

export const updateProfile = async (id, user) => {
  const updateProfile = User.findByIdAndUpdate(id, user, { new: true })
  return updateProfile
}

export const deleteUser = async (id) => {
  const deleteUser = User.findByIdAndDelete(id)
  return deleteUser
}
