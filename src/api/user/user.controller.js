import { getUsers, getUser, deleteUser, createUser } from './user.services.js'

export const handleGetUsers = async (req, res) => {
  try {
    const users = await getUsers()
    return res.status(200).json(users)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export const handleGetUser = async (req, res) => {
  const { id } = req.params

  try {
    const user = await getUser(id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    return res.status(200).json(user)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export const handleCreateUser = async (req, res) => {
  const data = req.body
  try {
    const user = await createUser(data)
    return res.status(201).json(user)
  } catch (err) {
    return res.status(500).json(err.message)
  }
}
export const handleUpdateProfile = async (req, res) => {}

export const handleDeleteUser = async (req, res) => {
  const { id } = req.params

  try {
    deleteUser(id)
    return res.status(200).json({ message: 'User deleted' })
  } catch (err) {
    return res.status(500).json(err.message)
  }
}
