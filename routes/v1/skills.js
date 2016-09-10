const express = require('express')
const router = express.Router()

const db = require('../../lib/database')

module.exports = router

router.get('/top3', (req, res) => {
  res.send([
    {
      id: 1237,
      link: "https://www.youtube.com/embed/s9r-CxnCXkg",
      skillName: "Change Lightbulb"
    },
    {
      id: 1238,
      link: "https://www.youtube.com/embed/s9r-CxnCXkg",
      skillName: "How to Write a cheque"
    },
    {
      id: 1239,
      link: "https://www.youtube.com/embed/s9r-CxnCXkg",
      skillName: "How to Grow Herbs"
    },
  ])
})


router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getSkillsById(id)
    .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.sendStatus(500))
})

router.get('/', (req, res) => {
  db.getSkills()
    .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.sendStatus(500))
})
