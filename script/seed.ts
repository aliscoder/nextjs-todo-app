import { faker } from "@faker-js/faker/locale/en";
import prisma from "../prisma/prisma";

async function createFakeTodos() {
  for (let i = 0; i < 20; i++) {
    await prisma.todo.create({
      data: {
        title: faker.word.noun(),
        body: faker.lorem.paragraphs(1),
        completed: faker.datatype.boolean()
      },
    });
  }
}

(async function() {
  await createFakeTodos()
})()
