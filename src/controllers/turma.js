const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const iniciar = async (req, res) => {
    const turmas = await prisma.turma.findMany({});
    res.render('index', { turmas: turmas });
}

const create = async(req, res) => {
    const turma = await prisma.turma.create({
        data:req.body
})
    res.redirect('/');
}





module.exports = {
    iniciar,
    create,
}