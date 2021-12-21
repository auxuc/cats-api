import express from 'express'
import { param } from 'express-validator'

import {catsController} from '../controller/cats'

const router = express.Router()
const cats = new catsController()

router.post('/create', cats.postCat )
router.put('/update', cats.putCat )
router.get('/all', cats.getAllCats )
router.get('/location', cats.getLocationCats)
router.get('/get/:uuid',[param('uuid').notEmpty().isString()], cats.getOneCat )
router.delete('/delete/:uuid',[param('uuid').notEmpty().isString()], cats.deleteCat )

export default router

