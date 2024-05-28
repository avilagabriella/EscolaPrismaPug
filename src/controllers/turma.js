const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const iniciar = async (req, res) => {
    const turmas =  await prisma.turma.fireMany({});
    res.render('index', turmas)
}

module.exports = {
    iniciar
}