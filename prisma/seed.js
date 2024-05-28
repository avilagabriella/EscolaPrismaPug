const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const reenye = await prisma.professor.upsert({
    create: {
      nome: 'Reenye Lima',
      especialidade: 'Front-End'
     
    },
  });
  const lucas = await prisma.professor.upsert({
    create: {
      nome: 'Lucas Paiva',
      especialidade: 'Pentelhar'
    },
  })
}

main()
  .then(rawSql)
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
