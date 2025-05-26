import express, { Request, Response, Router } from 'express';
import { GitProject } from '../models/GitProject';

const router: Router = Router();


router.get('/', async (req: Request, res: Response) => {
    try {
        const projects = await GitProject.find();
        res.json(projects);
        res.status(200);
    }
    catch (error) {
        console.error('Error fetching project:', error);
        res.status(500)
    }
})

export default router;