import { faker } from "@faker-js/faker/locale/en";
import prisma from "../prisma/prisma";

async function createFakeTodos() {
  for (let i = 0; i < 50; i++) {
    await prisma.todo.create({
      data: {
        title: faker.word.noun(),
        body: faker.lorem.sentence(15),
        completed: faker.datatype.boolean()
      },
    });
  }
}

(async function() {
  await createFakeTodos()
})()
