import { Router } from 'express'
import {
  handleCreateUser,
  handleDeleteUser,
  handleGetUser,
  handleGetUsers,
  handleUpdateProfile,
} from './user.controller.js'

const router = Router()

router.get('/', handleGetUsers)

router.get('/:id', handleGetUser)

router.post('/', handleCreateUser)

router.patch('/:id', handleUpdateProfile)

router.delete('/:id', handleDeleteUser)

export default router
