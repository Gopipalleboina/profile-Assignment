import express from 'express';
import {
    getProfile,
    updateProfile,
    endorseSkill,
    addSkill,
    deleteSkill,
    addsocialLink,
    deletesocialLink,
    updateTheme
} from '../controllers/profileControllers.js';

const router=express.Router();

router.get('/',getProfile);
router.put('/',updateProfile);
router.put('/endorse/:skillId',endorseSkill);
router.post('/skills',addSkill);
router.delete("/skills/:skillId",deleteSkill);
router.post('/social-links',addsocialLink);
router.delete('/social-links/:linkId',deletesocialLink);
router.put('/theme',updateTheme);

export default router;