import { Router } from "express";

const router = Router()

router.get('/intern', (req, res) => {
    res.json({
      name: "Aadi Pawar",
      referralCode: "aadipawar2025",
      totalDonations: 55555  //  updated value
    });

    return
  });

export default router;